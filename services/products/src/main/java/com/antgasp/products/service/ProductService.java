package com.antgasp.products.service;

import com.antgasp.products.entity.Product;
import com.antgasp.products.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
  private final ProductRepository repo;
  public ProductService(ProductRepository repo) { this.repo = repo; }

  public List<Product> list(String city, String q) {
    if (city != null && !city.isBlank()) return repo.findByCityIgnoreCaseContaining(city);
    if (q != null && !q.isBlank()) return repo.findByTitleIgnoreCaseContaining(q);
    return repo.findAll();
  }
}
