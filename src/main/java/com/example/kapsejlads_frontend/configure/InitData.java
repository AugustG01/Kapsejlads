package com.example.kapsejlads_frontend.configure;

import com.example.kapsejlads_frontend.model.Båd;
import com.example.kapsejlads_frontend.model.BådStørrelse;
import com.example.kapsejlads_frontend.repository.BådRepository;
import com.example.kapsejlads_frontend.repository.DeltagerRepository;
import com.example.kapsejlads_frontend.repository.KapsejladsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
@Component
public class InitData implements CommandLineRunner {

    @Autowired
    BådRepository bådRepository;

    @Autowired
    DeltagerRepository deltagerRepository;

    @Autowired
    KapsejladsRepository kapsejladsRepository;

    @Override
    public void run(String... args) throws Exception {
        Båd båd = new Båd();
        båd.setBådId(2);
        båd.setBådStørrelse(BådStørrelse.LILLE);
        bådRepository.save(båd);

        båd.setBådId(3);
        båd.setBådStørrelse(BådStørrelse.MEDIUM);
        bådRepository.save(båd);
/*
        Delivery delivery = new Delivery();
        delivery.setDeliveryDate(LocalDate.now());
        delivery.setWarehouse("W1");
        delivery.setDestination("Havnevej 2 4000 Roskilde");
        deliveryRepository.save(delivery);

        ProductOrder po = new ProductOrder();
        po.setProduct(product);
        po.setDelivery(delivery);
        po.setQuantity(10);
        productOrderRepository.save(po);

        product = new Product();
        product.setName("Banan");
        product.setPrice(5.5);
        product.setWeight(150);
        productRepository.save(product);

        po = new ProductOrder();
        po.setProduct(product);
        po.setDelivery(delivery);
        po.setQuantity(10);
        productOrderRepository.save(po);
*/

    }
}
