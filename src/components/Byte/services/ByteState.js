class ByteState {
    static active: string;

    constructor(active?: string) {
        if (active) this.active = active;
    }
}

export let byteState = new ByteState();