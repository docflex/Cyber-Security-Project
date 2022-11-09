const crypto = require("crypto");
const secret = "pppppppppppppppppppppppppppppppp";

const getNoise = () => {
    noise.seed(Math.random());
    for (var x = 0; x < canvas.width; x++) {
        for (var y = 0; y < canvas.height; y++) {
            // All noise functions return values in the range of -1 to 1.
            // noise.simplex2 and noise.perlin2 for 2d noise
            var value = noise.simplex2(x / 100, y / 100);
            // ... or noise.simplex3 and noise.perlin3:
            var value = noise.simplex3(x / 100, y / 100, time);
            image[x][y].r = Math.abs(value) * 256; // Or whatever. Open demo.html to see it used with canvas.
        }
    }
};

const encrypt = (password) => {
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv(
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
    const decipher = crypto.createDecipheriv(
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
    const decipher = crypto.createDecipheriv(
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
