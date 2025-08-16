package com.antgasp.products.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity @Table(name = "product")
public class Product {
  @Id @Column(columnDefinition = "uuid")
  private UUID id = UUID.randomUUID();
  private String title;
  private Double price;
  private String merchantName;
  private String city;
  private String imageUrl;

  public Product() {}
  public Product(String title, Double price, String merchantName, String city, String imageUrl) {
    this.title = title; this.price = price; this.merchantName = merchantName; this.city = city; this.imageUrl = imageUrl;
  }

  public UUID getId() { return id; }
  public void setId(UUID id) { this.id = id; }
  public String getTitle() { return title; }
  public void setTitle(String title) { this.title = title; }
  public Double getPrice() { return price; }
  public void setPrice(Double price) { this.price = price; }
  public String getMerchantName() { return merchantName; }
  public void setMerchantName(String merchantName) { this.merchantName = merchantName; }
  public String getCity() { return city; }
  public void setCity(String city) { this.city = city; }
  public String getImageUrl() { return imageUrl; }
  public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
