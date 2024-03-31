package com.nrct.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "nrct")
public class NrctModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String mobile;

    private String address;

    private Double amount;

    private ModeOfPayment modeOfPayment;

    private Date paymentDate;

    private String transactionId;

    // Constructors, Getters, and Setters

    public NrctModel() {
        // Default constructor
    }

    public NrctModel(String name, String email, String mobile, String address, Double amount, ModeOfPayment modeOfPayment,
            Date paymentDate, String transactionId) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.amount = amount;
        this.modeOfPayment = modeOfPayment;
        this.paymentDate = paymentDate;
        this.transactionId = transactionId;
    }

    // Getters and Setters for all fields

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public ModeOfPayment getModeOfPayment() {
        return modeOfPayment;
    }

    public void setModeOfPayment(ModeOfPayment modeOfPayment) {
        this.modeOfPayment = modeOfPayment;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }
}