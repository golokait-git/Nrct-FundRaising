package com.example.nrct.controller;

import com.example.nrct.model.NrctModel;
import com.example.nrct.service.NrctService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.mail.javamail.MimeMessageHelper;

import java.util.List;

@RestController
@RequestMapping("/api/v1/nrct")
public class NrctController {

    private final NrctService nrctService;
    private final JavaMailSender javaMailSender;

    @Autowired
    public NrctController(NrctService nrctService, JavaMailSender javaMailSender) {
        this.nrctService = nrctService;
        this.javaMailSender = javaMailSender;
    }

    @GetMapping("/all")
    public List<NrctModel> getAllNrctModels() {
        return nrctService.getAllNrctModels();
    }

    @GetMapping("/{id}")
    public NrctModel getNrctModelById(@PathVariable Long id) {
        return nrctService.getNrctModelById(id);
    }

    @PostMapping("/create")
    public NrctModel createNrctModel(@RequestBody NrctModel nrctModel) { // Changed exception
                                                                                                   // type
        NrctModel createdNrctModel = nrctService.createOrUpdateNrctModel(nrctModel);

        // Send email to donor
        sendEmailToDonor(createdNrctModel);

        return createdNrctModel;
    }

    @PutMapping("/update")
    public NrctModel updateNrctModel(@RequestBody NrctModel nrctModel) {
        return nrctService.createOrUpdateNrctModel(nrctModel);
    }

    @DeleteMapping("/{id}")
    public void deleteNrctModel(@PathVariable Long id) {
        nrctService.deleteNrctModel(id);
    }

    private void sendEmailToDonor(NrctModel nrctModel){ // Changed exception type
        
        try{
            System.out.println(nrctModel);
            System.out.println(nrctModel.getEmail());
                jakarta.mail.internet.MimeMessage message = javaMailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message, true);
                System.out.println(message);
                System.out.println(helper);
                helper.setTo(nrctModel.getEmail());
                helper.setSubject("Thank you for your donation");
                helper.setText("Dear " + nrctModel.getName() + ",\n\n"
                        + "Thank you for your donation of $" + nrctModel.getAmount() + ".\n"
                        + "Your transaction ID is " + nrctModel.getTransactionId() + ".\n"
                        + "Payment was made on " + nrctModel.getPaymentDate() + ".\n"
                        + "Payment mode: " + nrctModel.getModeOfPayment() + ".\n\n"
                        + "Best regards,\n"
                        + "Your Organization");

                javaMailSender.send(message);
                System.out.println(message);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e);
        }
    }
}
