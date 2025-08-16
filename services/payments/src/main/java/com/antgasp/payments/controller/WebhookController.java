package com.antgasp.payments.controller;
import org.springframework.web.bind.annotation.*; import java.util.Map;

@RestController @RequestMapping("/webhooks")
public class WebhookController {
  @PostMapping("/stripe") public Map<String,Object> stripe(@RequestBody Map<String,Object> body){
    return Map.of("ok", true, "provider", "stripe", "received", body);
  }
  @PostMapping("/paypal") public Map<String,Object> paypal(@RequestBody Map<String,Object> body){
    return Map.of("ok", true, "provider", "paypal", "received", body);
  }
}
