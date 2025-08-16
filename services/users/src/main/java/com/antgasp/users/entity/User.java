package com.antgasp.users.entity;
import jakarta.persistence.*; import java.util.UUID;

@Entity @Table(name="app_user")
public class User {
  @Id @Column(columnDefinition="uuid") private UUID id = UUID.randomUUID();
  private String email; private String displayName;
  public User() {}
  public User(String email, String displayName){ this.email=email; this.displayName=displayName; }
  public UUID getId(){ return id; } public void setId(UUID id){ this.id=id; }
  public String getEmail(){ return email; } public void setEmail(String email){ this.email=email; }
  public String getDisplayName(){ return displayName; } public void setDisplayName(String displayName){ this.displayName=displayName; }
}
