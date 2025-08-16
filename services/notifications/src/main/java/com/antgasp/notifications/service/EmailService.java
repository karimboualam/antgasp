package com.antgasp.notifications.service;
import org.springframework.stereotype.Service; 

@Service public class EmailService { 
    public void send(String to,String subject,String body){
        // Stub method to simulate sending an email
        System.out.println("Sending email to: " + to + ", Subject: " + subject + ", Body: " + body);
    }
 }
