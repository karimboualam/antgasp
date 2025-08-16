package com.antgasp.reservations.service;
import org.springframework.scheduling.annotation.Scheduled; import org.springframework.stereotype.Component;
@Component
public class OutboxPublisher {
  @Scheduled(fixedDelay = 30000) public void publish() { /* stub */ }
}
