package com.antgasp.reservations.entity;
import jakarta.persistence.*; import java.time.Instant; import java.util.UUID;
@Entity public class Reservation {
  @Id @Column(columnDefinition="uuid") private UUID id = UUID.randomUUID();
  private String offerId; private String userEmail; private String status = "PENDING";
  private Instant createdAt = Instant.now();
  public UUID getId(){return id;} public void setId(UUID id){this.id=id;}
  public String getOfferId(){return offerId;} public void setOfferId(String offerId){this.offerId=offerId;}
  public String getUserEmail(){return userEmail;} public void setUserEmail(String e){this.userEmail=e;}
  public String getStatus(){return status;} public void setStatus(String s){this.status=s;}
  public Instant getCreatedAt(){return createdAt;} public void setCreatedAt(Instant t){this.createdAt=t;}
}
