package com.nrct.model;

public enum ModeOfPayment {
    UPI("UPI"),
    CREDIT_CARD("CREDIT CARD"),
    DEBIT_CARD("DEBIT CARD"),
    NET_BANKING("NET BANKING");

    private final String value;

    ModeOfPayment(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static ModeOfPayment fromValue(String value) {
        for (ModeOfPayment mode : values()) {
            if (mode.value.equalsIgnoreCase(value)) {
                return mode;
            }
        }
        throw new IllegalArgumentException("Invalid ModeOfPayment value: " + value);
    }
}
