(function () {
  const storageKey = "modasphere.accounts";
  const iterations = 310000;

  function readAccounts() {
    const storedAccounts = localStorage.getItem(storageKey);
    if (storedAccounts === null) {
      return [];
    }

    const accounts = JSON.parse(storedAccounts);
    if (
      !Array.isArray(accounts) ||
      accounts.some((account) =>
        !account ||
        typeof account.username !== "string" ||
        typeof account.salt !== "string" ||
        typeof account.passwordHash !== "string" ||
        typeof account.iterations !== "number"
      )
    ) {
      throw new Error("Saved account data is invalid. Clear the saved accounts and try again.");
    }

    return accounts;
  }

  function toHex(bytes) {
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function fromHex(value) {
    if (!/^(?:[0-9a-f]{2})+$/i.test(value)) {
      throw new Error("Saved account data is invalid. Clear the saved accounts and try again.");
    }

    return Uint8Array.from(value.match(/.{2}/g), (byte) => parseInt(byte, 16));
  }

  async function hashPassword(password, salt, rounds) {
    if (!crypto.subtle) {
      throw new Error("Secure browser cryptography is unavailable. Open this page on localhost or a secure website.");
    }

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveBits"]
    );
    const result = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt,
        iterations: rounds,
        hash: "SHA-256"
      },
      key,
      256
    );

    return toHex(new Uint8Array(result));
  }

  async function createAccount(accountDetails) {
    const accounts = readAccounts();
    const normalizedUsername = accountDetails.username.toLowerCase();
    const normalizedEmail = accountDetails.email.toLowerCase();

    if (accounts.some((account) =>
      account.username.toLowerCase() === normalizedUsername ||
      account.email.toLowerCase() === normalizedEmail
    )) {
      return false;
    }

    const salt = crypto.getRandomValues(new Uint8Array(16));
    const passwordHash = await hashPassword(
      accountDetails.password,
      salt,
      iterations
    );

    accounts.push({
      fullname: accountDetails.fullname,
      username: accountDetails.username,
      email: accountDetails.email,
      salt: toHex(salt),
      passwordHash,
      iterations
    });
    localStorage.setItem(storageKey, JSON.stringify(accounts));
    return true;
  }

  async function authenticate(username, password) {
    const normalizedUsername = username.trim().toLowerCase();
    const account = readAccounts().find(
      (savedAccount) => savedAccount.username.toLowerCase() === normalizedUsername
    );

    if (!account) {
      return false;
    }

    const passwordHash = await hashPassword(
      password,
      fromHex(account.salt),
      account.iterations
    );
    return passwordHash === account.passwordHash;
  }

  async function changePassword(username, currentPassword, newPassword) {
    const accounts = readAccounts();
    const normalizedUsername = username.trim().toLowerCase();
    const accountIndex = accounts.findIndex(
      (savedAccount) => savedAccount.username.toLowerCase() === normalizedUsername
    );

    if (accountIndex === -1) {
      return false;
    }

    const account = accounts[accountIndex];
    const currentHash = await hashPassword(
      currentPassword,
      fromHex(account.salt),
      account.iterations
    );

    if (currentHash !== account.passwordHash) {
      return false;
    }

    const salt = crypto.getRandomValues(new Uint8Array(16));
    account.salt = toHex(salt);
    account.passwordHash = await hashPassword(newPassword, salt, iterations);
    account.iterations = iterations;
    localStorage.setItem(storageKey, JSON.stringify(accounts));
    return true;
  }

  window.ModaSphereAuth = Object.freeze({
    createAccount,
    authenticate,
    changePassword
  });
})();
