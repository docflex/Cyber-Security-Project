const crypto = require("crypto");
const secret = "pppppppppppppppppppppppppppppppp";

var noiseSeed = 2147483647; // Highest 32 bit Prime
var maxDependencies = 9007199254740881; // Highest 53 bit prime. Can be handled with JS

const getNoise = (intensity) => {
    noise.seed(Math.random());
    for (var x = 0; x < 100; x++) {
        for (var y = 0; y < 100; y++) {
            // All noise functions return values in the range of -1 to 1.
            noiseSeed = noise.simplex3(x / 100, y / 100, time) % 1000000007;
            image[x][y].r = Math.abs(value) * 256; // Or whatever. Open demo.html to see it used with canvas.
        }
    }
    return noiseSeed * intensity;
};

const encrypt = (password) => {
    const iv = getNoise(maxDependencies);
    iv = Buffer.from(randomBytes(16));
    const cipher = createCipheriv(
        "aes-256-ctr",
        Buffer.from(secret),
        iv
    );

    const encryptedPassword = Buffer.concat([
        cipher.update(password),
        cipher.final(),
    ]);

    return {
        iv: iv.toString("hex"),
        password: encryptedPassword.toString("hex"),
    };
};

const decrypt = (encryption) => {
    const decipher = createDecipheriv(
        "aes-256-ctr",
        Buffer.from(secret),
        Buffer.from(encryption.TransactionPasswordIv, "hex")
    );

    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryption.TransactionPassword, "hex")),
        decipher.final(),
    ]);

    return decryptedPassword.toString();
};

const decryptpass = (encryption) => {
    const decipher = createDecipheriv(
        "aes-256-ctr",
        Buffer.from(secret),
        Buffer.from(encryption.Encryptediv, "hex")
    );

    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryption.HashedPassword, "hex")),
        decipher.final(),
    ]);

    return decryptedPassword.toString();
};

module.exports = { encrypt, decrypt, decryptpass };
