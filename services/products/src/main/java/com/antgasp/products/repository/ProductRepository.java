package com.antgasp.products.repository;

import com.antgasp.products.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
  List<Product> findByCityIgnoreCaseContaining(String city);
  List<Product> findByTitleIgnoreCaseContaining(String q);
}
