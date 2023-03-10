package com.eshopping.springboot.service;
import java.util.List;

import com.eshopping.springboot.model.Product;

public interface ProductService {
	Product addProduct(Product product);
    List<Product> getAllProducts();
	Product getProductByProductId(long productId);
	Product updateProduct(Product product, long productId);
	void deleteProduct(long productId);
}