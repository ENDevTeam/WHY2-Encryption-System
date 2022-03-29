const s = async () => {
	const { encrypt, decrypt } = require("./index.js");
	const data = await encrypt("Rumunsko");
	if (data.exitCode !== 0) {
		throw new Error("Program fault " + data.error);
	}
	console.log("Encryption successfull! " + JSON.stringify(data));
	const reversedData = decrypt(data.value, data.key);
	console.log("Decryption successfull! " + JSON.stringify(reversedData));
	return reversedData;
};
s();