package com.antgasp.users.controller;
import com.antgasp.users.dto.UserDto; import com.antgasp.users.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/users")
public class UserController {
  private final UserService service;
  public UserController(UserService s){ this.service = s; }

  @GetMapping("/me")
  public UserDto me(@RequestParam(defaultValue="demo@antgasp.local") String email){
    return service.me(email);
  }
}
