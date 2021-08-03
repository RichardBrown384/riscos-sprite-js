const SPRITE_PALETTE_OFFSET = 44;

const DPI_45 = 45;
const DPI_90 = 90;

const SPRITE_MODE_PROPERTIES_MAP = {
    12: {bitsPerPixel: 4, xDpi: DPI_90, yDpi: DPI_45},
    13: {bitsPerPixel: 8, xDpi: DPI_45, yDpi: DPI_45},
    15: {bitsPerPixel: 8},
    18: {bitsPerPixel: 1},
    20: {bitsPerPixel: 4},
    21: {bitsPerPixel: 8},
    27: {bitsPerPixel: 4, xDpi: DPI_90, yDpi: DPI_90},
    28: {bitsPerPixel: 8},
};

const SPRITE_PALETTE_4BPP = [
    {first: 0xFFFFFF00, second: 0xFFFFFF00},
    {first: 0xDDDDDD00, second: 0xDDDDDD00},
    {first: 0xBBBBBB00, second: 0xBBBBBB00},
    {first: 0x99999900, second: 0x99999900},
    {first: 0x77777700, second: 0x77777700},
    {first: 0x55555500, second: 0x55555500},
    {first: 0x33333300, second: 0x33333300},
    {first: 0x00000000, second: 0x00000000},
    {first: 0x99440000, second: 0x99440000},
    {first: 0x00EEEE00, second: 0x00EEEE00},
    {first: 0x00CC0000, second: 0x00CC0000},
    {first: 0x0000DD00, second: 0x0000DD00},
    {first: 0xBBEEEE00, second: 0xBBEEEE00},
    {first: 0x00885500, second: 0x00885500},
    {first: 0x00BBFF00, second: 0x00BBFF00},
    {first: 0xFFBB0000, second: 0xFFBB0000},
];

const SPRITE_PALETTE_8BPP = [
    {first: 0x00000000, second: 0x00000000},
    {first: 0x11111100, second: 0x11111100},
    {first: 0x22222200, second: 0x22222200},
    {first: 0x33333300, second: 0x33333300},
    {first: 0x00004400, second: 0x00004400},
    {first: 0x11115500, second: 0x11115500},
    {first: 0x22226600, second: 0x22226600},
    {first: 0x33337700, second: 0x33337700},
    {first: 0x44000000, second: 0x44000000},
    {first: 0x55111100, second: 0x55111100},
    {first: 0x66222200, second: 0x66222200},
    {first: 0x77333300, second: 0x77333300},
    {first: 0x44004400, second: 0x44004400},
    {first: 0x55115500, second: 0x55115500},
    {first: 0x66226600, second: 0x66226600},
    {first: 0x77337700, second: 0x77337700},
    {first: 0x00008800, second: 0x00008800},
    {first: 0x11119900, second: 0x11119900},
    {first: 0x2222AA00, second: 0x2222AA00},
    {first: 0x3333BB00, second: 0x3333BB00},
    {first: 0x0000CC00, second: 0x0000CC00},
    {first: 0x1111DD00, second: 0x1111DD00},
    {first: 0x2222EE00, second: 0x2222EE00},
    {first: 0x3333FF00, second: 0x3333FF00},
    {first: 0x44008800, second: 0x44008800},
    {first: 0x55119900, second: 0x55119900},
    {first: 0x6622AA00, second: 0x6622AA00},
    {first: 0x7733BB00, second: 0x7733BB00},
    {first: 0x4400CC00, second: 0x4400CC00},
    {first: 0x5511DD00, second: 0x5511DD00},
    {first: 0x6622EE00, second: 0x6622EE00},
    {first: 0x7733FF00, second: 0x7733FF00},
    {first: 0x00440000, second: 0x00440000},
    {first: 0x11551100, second: 0x11551100},
    {first: 0x22662200, second: 0x22662200},
    {first: 0x33773300, second: 0x33773300},
    {first: 0x00444400, second: 0x00444400},
    {first: 0x11555500, second: 0x11555500},
    {first: 0x22666600, second: 0x22666600},
    {first: 0x33777700, second: 0x33777700},
    {first: 0x44440000, second: 0x44440000},
    {first: 0x55551100, second: 0x55551100},
    {first: 0x66662200, second: 0x66662200},
    {first: 0x77773300, second: 0x77773300},
    {first: 0x44444400, second: 0x44444400},
    {first: 0x55555500, second: 0x55555500},
    {first: 0x66666600, second: 0x66666600},
    {first: 0x77777700, second: 0x77777700},
    {first: 0x00448800, second: 0x00448800},
    {first: 0x11559900, second: 0x11559900},
    {first: 0x2266AA00, second: 0x2266AA00},
    {first: 0x3377BB00, second: 0x3377BB00},
    {first: 0x0044CC00, second: 0x0044CC00},
    {first: 0x1155DD00, second: 0x1155DD00},
    {first: 0x2266EE00, second: 0x2266EE00},
    {first: 0x3377FF00, second: 0x3377FF00},
    {first: 0x44448800, second: 0x44448800},
    {first: 0x55559900, second: 0x55559900},
    {first: 0x6666AA00, second: 0x6666AA00},
    {first: 0x7777BB00, second: 0x7777BB00},
    {first: 0x4444CC00, second: 0x4444CC00},
    {first: 0x5555DD00, second: 0x5555DD00},
    {first: 0x6666EE00, second: 0x6666EE00},
    {first: 0x7777FF00, second: 0x7777FF00},
    {first: 0x00880000, second: 0x00880000},
    {first: 0x11991100, second: 0x11991100},
    {first: 0x22AA2200, second: 0x22AA2200},
    {first: 0x33BB3300, second: 0x33BB3300},
    {first: 0x00884400, second: 0x00884400},
    {first: 0x11995500, second: 0x11995500},
    {first: 0x22AA6600, second: 0x22AA6600},
    {first: 0x33BB7700, second: 0x33BB7700},
    {first: 0x44880000, second: 0x44880000},
    {first: 0x55991100, second: 0x55991100},
    {first: 0x66AA2200, second: 0x66AA2200},
    {first: 0x77BB3300, second: 0x77BB3300},
    {first: 0x44884400, second: 0x44884400},
    {first: 0x55995500, second: 0x55995500},
    {first: 0x66AA6600, second: 0x66AA6600},
    {first: 0x77BB7700, second: 0x77BB7700},
    {first: 0x00888800, second: 0x00888800},
    {first: 0x11999900, second: 0x11999900},
    {first: 0x22AAAA00, second: 0x22AAAA00},
    {first: 0x33BBBB00, second: 0x33BBBB00},
    {first: 0x0088CC00, second: 0x0088CC00},
    {first: 0x1199DD00, second: 0x1199DD00},
    {first: 0x22AAEE00, second: 0x22AAEE00},
    {first: 0x33BBFF00, second: 0x33BBFF00},
    {first: 0x44888800, second: 0x44888800},
    {first: 0x55999900, second: 0x55999900},
    {first: 0x66AAAA00, second: 0x66AAAA00},
    {first: 0x77BBBB00, second: 0x77BBBB00},
    {first: 0x4488CC00, second: 0x4488CC00},
    {first: 0x5599DD00, second: 0x5599DD00},
    {first: 0x66AAEE00, second: 0x66AAEE00},
    {first: 0x77BBFF00, second: 0x77BBFF00},
    {first: 0x00CC0000, second: 0x00CC0000},
    {first: 0x11DD1100, second: 0x11DD1100},
    {first: 0x22EE2200, second: 0x22EE2200},
    {first: 0x33FF3300, second: 0x33FF3300},
    {first: 0x00CC4400, second: 0x00CC4400},
    {first: 0x11DD5500, second: 0x11DD5500},
    {first: 0x22EE6600, second: 0x22EE6600},
    {first: 0x33FF7700, second: 0x33FF7700},
    {first: 0x44CC0000, second: 0x44CC0000},
    {first: 0x55DD1100, second: 0x55DD1100},
    {first: 0x66EE2200, second: 0x66EE2200},
    {first: 0x77FF3300, second: 0x77FF3300},
    {first: 0x44CC4400, second: 0x44CC4400},
    {first: 0x55DD5500, second: 0x55DD5500},
    {first: 0x66EE6600, second: 0x66EE6600},
    {first: 0x77FF7700, second: 0x77FF7700},
    {first: 0x00CC8800, second: 0x00CC8800},
    {first: 0x11DD9900, second: 0x11DD9900},
    {first: 0x22EEAA00, second: 0x22EEAA00},
    {first: 0x33FFBB00, second: 0x33FFBB00},
    {first: 0x00CCCC00, second: 0x00CCCC00},
    {first: 0x11DDDD00, second: 0x11DDDD00},
    {first: 0x22EEEE00, second: 0x22EEEE00},
    {first: 0x33FFFF00, second: 0x33FFFF00},
    {first: 0x44CC8800, second: 0x44CC8800},
    {first: 0x55DD9900, second: 0x55DD9900},
    {first: 0x66EEAA00, second: 0x66EEAA00},
    {first: 0x77FFBB00, second: 0x77FFBB00},
    {first: 0x44CCCC00, second: 0x44CCCC00},
    {first: 0x55DDDD00, second: 0x55DDDD00},
    {first: 0x66EEEE00, second: 0x66EEEE00},
    {first: 0x77FFFF00, second: 0x77FFFF00},
    {first: 0x88000000, second: 0x88000000},
    {first: 0x99111100, second: 0x99111100},
    {first: 0xAA222200, second: 0xAA222200},
    {first: 0xBB333300, second: 0xBB333300},
    {first: 0x88004400, second: 0x88004400},
    {first: 0x99115500, second: 0x99115500},
    {first: 0xAA226600, second: 0xAA226600},
    {first: 0xBB337700, second: 0xBB337700},
    {first: 0xCC000000, second: 0xCC000000},
    {first: 0xDD111100, second: 0xDD111100},
    {first: 0xEE222200, second: 0xEE222200},
    {first: 0xFF333300, second: 0xFF333300},
    {first: 0xCC004400, second: 0xCC004400},
    {first: 0xDD115500, second: 0xDD115500},
    {first: 0xEE226600, second: 0xEE226600},
    {first: 0xFF337700, second: 0xFF337700},
    {first: 0x88008800, second: 0x88008800},
    {first: 0x99119900, second: 0x99119900},
    {first: 0xAA22AA00, second: 0xAA22AA00},
    {first: 0xBB33BB00, second: 0xBB33BB00},
    {first: 0x8800CC00, second: 0x8800CC00},
    {first: 0x9911DD00, second: 0x9911DD00},
    {first: 0xAA22EE00, second: 0xAA22EE00},
    {first: 0xBB33FF00, second: 0xBB33FF00},
    {first: 0xCC008800, second: 0xCC008800},
    {first: 0xDD119900, second: 0xDD119900},
    {first: 0xEE22AA00, second: 0xEE22AA00},
    {first: 0xFF33BB00, second: 0xFF33BB00},
    {first: 0xCC00CC00, second: 0xCC00CC00},
    {first: 0xDD11DD00, second: 0xDD11DD00},
    {first: 0xEE22EE00, second: 0xEE22EE00},
    {first: 0xFF33FF00, second: 0xFF33FF00},
    {first: 0x88440000, second: 0x88440000},
    {first: 0x99551100, second: 0x99551100},
    {first: 0xAA662200, second: 0xAA662200},
    {first: 0xBB773300, second: 0xBB773300},
    {first: 0x88444400, second: 0x88444400},
    {first: 0x99555500, second: 0x99555500},
    {first: 0xAA666600, second: 0xAA666600},
    {first: 0xBB777700, second: 0xBB777700},
    {first: 0xCC440000, second: 0xCC440000},
    {first: 0xDD551100, second: 0xDD551100},
    {first: 0xEE662200, second: 0xEE662200},
    {first: 0xFF773300, second: 0xFF773300},
    {first: 0xCC444400, second: 0xCC444400},
    {first: 0xDD555500, second: 0xDD555500},
    {first: 0xEE666600, second: 0xEE666600},
    {first: 0xFF777700, second: 0xFF777700},
    {first: 0x88448800, second: 0x88448800},
    {first: 0x99559900, second: 0x99559900},
    {first: 0xAA66AA00, second: 0xAA66AA00},
    {first: 0xBB77BB00, second: 0xBB77BB00},
    {first: 0x8844CC00, second: 0x8844CC00},
    {first: 0x9955DD00, second: 0x9955DD00},
    {first: 0xAA66EE00, second: 0xAA66EE00},
    {first: 0xBB77FF00, second: 0xBB77FF00},
    {first: 0xCC448800, second: 0xCC448800},
    {first: 0xDD559900, second: 0xDD559900},
    {first: 0xEE66AA00, second: 0xEE66AA00},
    {first: 0xFF77BB00, second: 0xFF77BB00},
    {first: 0xCC44CC00, second: 0xCC44CC00},
    {first: 0xDD55DD00, second: 0xDD55DD00},
    {first: 0xEE66EE00, second: 0xEE66EE00},
    {first: 0xFF77FF00, second: 0xFF77FF00},
    {first: 0x88880000, second: 0x88880000},
    {first: 0x99991100, second: 0x99991100},
    {first: 0xAAAA2200, second: 0xAAAA2200},
    {first: 0xBBBB3300, second: 0xBBBB3300},
    {first: 0x88884400, second: 0x88884400},
    {first: 0x99995500, second: 0x99995500},
    {first: 0xAAAA6600, second: 0xAAAA6600},
    {first: 0xBBBB7700, second: 0xBBBB7700},
    {first: 0xCC880000, second: 0xCC880000},
    {first: 0xDD991100, second: 0xDD991100},
    {first: 0xEEAA2200, second: 0xEEAA2200},
    {first: 0xFFBB3300, second: 0xFFBB3300},
    {first: 0xCC884400, second: 0xCC884400},
    {first: 0xDD995500, second: 0xDD995500},
    {first: 0xEEAA6600, second: 0xEEAA6600},
    {first: 0xFFBB7700, second: 0xFFBB7700},
    {first: 0x88888800, second: 0x88888800},
    {first: 0x99999900, second: 0x99999900},
    {first: 0xAAAAAA00, second: 0xAAAAAA00},
    {first: 0xBBBBBB00, second: 0xBBBBBB00},
    {first: 0x8888CC00, second: 0x8888CC00},
    {first: 0x9999DD00, second: 0x9999DD00},
    {first: 0xAAAAEE00, second: 0xAAAAEE00},
    {first: 0xBBBBFF00, second: 0xBBBBFF00},
    {first: 0xCC888800, second: 0xCC888800},
    {first: 0xDD999900, second: 0xDD999900},
    {first: 0xEEAAAA00, second: 0xEEAAAA00},
    {first: 0xFFBBBB00, second: 0xFFBBBB00},
    {first: 0xCC88CC00, second: 0xCC88CC00},
    {first: 0xDD99DD00, second: 0xDD99DD00},
    {first: 0xEEAAEE00, second: 0xEEAAEE00},
    {first: 0xFFBBFF00, second: 0xFFBBFF00},
    {first: 0x88CC0000, second: 0x88CC0000},
    {first: 0x99DD1100, second: 0x99DD1100},
    {first: 0xAAEE2200, second: 0xAAEE2200},
    {first: 0xBBFF3300, second: 0xBBFF3300},
    {first: 0x88CC4400, second: 0x88CC4400},
    {first: 0x99DD5500, second: 0x99DD5500},
    {first: 0xAAEE6600, second: 0xAAEE6600},
    {first: 0xBBFF7700, second: 0xBBFF7700},
    {first: 0xCCCC0000, second: 0xCCCC0000},
    {first: 0xDDDD1100, second: 0xDDDD1100},
    {first: 0xEEEE2200, second: 0xEEEE2200},
    {first: 0xFFFF3300, second: 0xFFFF3300},
    {first: 0xCCCC4400, second: 0xCCCC4400},
    {first: 0xDDDD5500, second: 0xDDDD5500},
    {first: 0xEEEE6600, second: 0xEEEE6600},
    {first: 0xFFFF7700, second: 0xFFFF7700},
    {first: 0x88CC8800, second: 0x88CC8800},
    {first: 0x99DD9900, second: 0x99DD9900},
    {first: 0xAAEEAA00, second: 0xAAEEAA00},
    {first: 0xBBFFBB00, second: 0xBBFFBB00},
    {first: 0x88CCCC00, second: 0x88CCCC00},
    {first: 0x99DDDD00, second: 0x99DDDD00},
    {first: 0xAAEEEE00, second: 0xAAEEEE00},
    {first: 0xBBFFFF00, second: 0xBBFFFF00},
    {first: 0xCCCC8800, second: 0xCCCC8800},
    {first: 0xDDDD9900, second: 0xDDDD9900},
    {first: 0xEEEEAA00, second: 0xEEEEAA00},
    {first: 0xFFFFBB00, second: 0xFFFFBB00},
    {first: 0xCCCCCC00, second: 0xCCCCCC00},
    {first: 0xDDDDDD00, second: 0xDDDDDD00},
    {first: 0xEEEEEE00, second: 0xEEEEEE00},
    {first: 0xFFFFFF00, second: 0xFFFFFF00}
];

const SPRITE_BITS_PER_PIXEL_PALETTE = {
    4: SPRITE_PALETTE_4BPP,
    8: SPRITE_PALETTE_8BPP
};

class SpriteError extends Error {
    constructor(message, position, data) {
        super(message);
        this.name = 'SpriteError';
        this.position = position;
        this.data = data;
    }
}

class SpriteFile {

    constructor(buffer) {
        this.view = new DataView(buffer);
        this.length = buffer.byteLength;
        this.position = 0;
    }

    getLength() {
        return this.length;
    }

    getPosition() {
        return this.position;
    }

    setPosition(v) {
        this.position = v;
    }

    check(condition, message, data = {}) {
        if (!condition) {
            throw new SpriteError(message, this.getPosition(), data);
        }
    }

    checkAlignment(message, data = {}) {
        this.check(this.getPosition() % 4 === 0, message, data);
    }

    checkPositionAndSize(n) {
        this.check(this.position >= 0, 'reading off the start of a file');
        this.check(this.position <= this.getLength() - n, 'reading off the end of the file');
    }

    readByte() {
        this.checkPositionAndSize(1);
        const b = this.view.getUint8(this.position);
        this.position = this.position + 1;
        return b;
    }

    readUint() {
        this.checkAlignment('misaligned uint');
        this.checkPositionAndSize(4);
        const v = this.view.getUint32(this.position, true);
        this.position = this.position + 4;
        return v;
    }

    readStringFully(n) {
        this.checkAlignment('misaligned string');
        const chars = [];
        for (let i = 0, terminated = false; i < n; i = 1 + i) {
            const c = this.readByte();
            if (c === 0) {
                terminated = true;
            } else if (!terminated) {
                chars.push(c)
            }
        }
        return String.fromCharCode(...chars);
    }

    readSpriteControlBlock() {
        this.checkAlignment('misaligned sprite control block');
        return {
            spriteOffset: this.readUint(),
            spriteName: this.readStringFully(12),
            wordWidth: this.readUint(),
            lineHeight: this.readUint(),
            firstBitUsed: this.readUint(),
            lastBitUsed: this.readUint(),
            imageOffset: this.readUint(),
            maskOffset: this.readUint(),
            mode: this.readUint(),
        };
    }

    readSpriteImage({wordWidth, firstBitUsed, lastBitUsed}, bitsPerPixel, pixelWidth, pixelHeight) {
        this.checkAlignment('misaligned sprite image');
        const mask = (1 << bitsPerPixel) - 1;
        const image = [];
        const extractPixels = (data, bits) => {
            this.check(bits > 0, 'negative number of bits in word', {
                bits
            });
            this.check(bits % bitsPerPixel === 0,
                'non integral number of pixels in sprite word', {
                    bits, bitsPerPixel
                });
            for (let n = 0; n < bits / bitsPerPixel; n++) {
                image.push(data & mask);
                data >>= bitsPerPixel;
            }
        };
        for (let y = 0; y < pixelHeight; y++) {
            if (wordWidth === 0) {
                extractPixels(this.readUint() >> firstBitUsed, 1 + lastBitUsed - firstBitUsed);
            } else {
                extractPixels(this.readUint() >> firstBitUsed, 32 - firstBitUsed);
                for (let n = 0; n < wordWidth - 1; n++) {
                    extractPixels(this.readUint(), 32);
                }
                extractPixels(this.readUint(), 1 + lastBitUsed);
            }
        }
        return image;
    }

    readSpritePaletteArea({imageOffset}, bitsPerPixel) {
        this.checkAlignment('misaligned sprite palette')
        const count = (imageOffset - SPRITE_PALETTE_OFFSET) / 8;
        if (count === 0) {
            return SPRITE_BITS_PER_PIXEL_PALETTE[bitsPerPixel];
        }
        const palette = [];
        for (let n = 0; n < count; n++) {
            palette.push({
                first: this.readUint(),
                second: this.readUint()
            });
        }
        return palette;
    }

    readSprite() {
        this.checkAlignment('misaligned sprite');
        const spritePosition = this.getPosition();
        const controlBlock = this.readSpriteControlBlock();
        const {
            wordWidth,
            lineHeight,
            firstBitUsed,
            lastBitUsed,
            imageOffset,
            maskOffset,
            mode
        } = controlBlock;

        const modeProperties = SPRITE_MODE_PROPERTIES_MAP[mode];
        this.check(modeProperties, 'unsupported sprite screen mode', {mode})

        const {bitsPerPixel} = modeProperties;
        const bitsPerLine = 32 * wordWidth + 1 + lastBitUsed - firstBitUsed;
        const pixelWidth = bitsPerLine / bitsPerPixel;
        const pixelHeight = lineHeight + 1;
        this.check(bitsPerLine % bitsPerPixel === 0,
            'non integral number of pixels per line', {
                mode, bitsPerPixel, bitsPerLine, pixelWidth
            });
        this.check(pixelWidth > 0, 'zero or negative sprite width');
        this.check(pixelHeight > 0, 'zero or negative sprite height');

        this.setPosition(spritePosition + SPRITE_PALETTE_OFFSET);
        const palette = this.readSpritePaletteArea(controlBlock, bitsPerPixel);
        this.check(palette, 'no palette defined', {bitsPerPixel});

        this.setPosition(spritePosition + imageOffset);
        const image = this.readSpriteImage(controlBlock, bitsPerPixel, pixelWidth, pixelHeight);

        let mask = undefined;
        if (maskOffset !== imageOffset) {
            this.setPosition(spritePosition + maskOffset);
            mask = this.readSpriteImage(controlBlock, bitsPerPixel, pixelWidth, pixelHeight);
        }

        return {
            controlBlock,
            ...modeProperties,
            pixelWidth,
            pixelHeight,
            image,
            ...(mask && {mask}),
            palette
        }
    }

    readControlBlock() {
        return {
            spriteCount: this.readUint(),
            spriteOffset: this.readUint(),
            freeOffset: this.readUint()
        }
    }

    readSpriteArea() {
        const controlBlock = this.readControlBlock();
        const {
            spriteCount,
            spriteOffset
        } = controlBlock;
        const sprites = [];
        for (let n = 0, spritePosition = spriteOffset - 4; n < spriteCount; n++) {
            this.setPosition(spritePosition);
            const sprite = this.readSprite();
            sprites.push(sprite);
            const {controlBlock: {spriteOffset}} = sprite;
            spritePosition += spriteOffset;
        }
        return {
            controlBlock,
            sprites
        };
    }
}

module.exports = {
    SpriteArea: {
        fromUint8Array: function (array) {
            return new SpriteFile(array.buffer).readSpriteArea();
        }
    },
    Sprite: {
        fromUint8Array: function (array) {
            return new SpriteFile(array.buffer).readSprite();
        }
    }

};