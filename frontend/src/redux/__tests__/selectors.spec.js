import { selectAllAddresses } from "../selectors";
import { select } from "redux-saga/effects";

describe("selectAllAddresses", () => {
    describe("filter is not enabled", () => {

        it("returns all addressses, as an array", () => {
            const initState = {
                addresses: {
                    FOO: {
                        name: "foo",
                        phone: 123,
                    }
                },
                filter: {
                    enabled: false,
                    items: []
                }
            }

            expect(selectAllAddresses(initState)).toEqual([
                {
                    name: "foo",
                    phone: 123,
                }
            ]);
        });

        it("returns the address in alphabetical order", () => {
            const initState = {
                addresses: {

                    CHARLIE: {
                        name: "charlie",
                        phone: 123,
                    },
                    BETA: {
                        name: "beta",
                        phone: 123,
                    },
                    ALPHA: {
                        name: "alpha",
                        phone: 123,
                    },

                },
                filter: {
                    enabled: false,
                    items: []
                }
            };

            expect(selectAllAddresses(initState)).toEqual([
                {
                    name: "alpha",
                    phone: 123,
                },
                {
                    name: "beta",
                    phone: 123,
                },
                {
                    name: "charlie",
                    phone: 123,
                },
            ]);
        });
    })

    describe("filter is enabled, but there are no items", () => {
        it("returns all addresses, as an array", () => {
            const initState = {
                addresses: {
                    FOO: {
                        name: "foo",
                        phone: 123,
                    }
                },
                filter: {
                    enabled: true,
                    items: []
                }
            }

            expect(selectAllAddresses(initState)).toEqual([
                {
                    name: "foo",
                    phone: 123,
                }
            ]);
        });
    })

    describe("filter is enabled, and there are items", () => {
        it("only returns matching items", () => {
            const initState = {
                addresses: {
                    FOO: {
                        name: "foo",
                        phone: 123,
                    },

                    bar: {
                        name: "bar",
                        phone: 321,
                    }
                },
                filter: {
                    enabled: true,
                    items: ["bar"]
                }
            }

            expect(selectAllAddresses(initState)).toEqual([
                {
                    name: "bar",
                    phone: 321,
                }
            ]);
        });
    });
}); 