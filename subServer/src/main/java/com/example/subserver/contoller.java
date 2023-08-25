package com.example.subserver;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class contoller {

    @GetMapping("/main")
    public String main () {
        return "main";
    }

//    @PostMapping("/main")
//    public ResponseEntity<String> test() {
//        System.out.println(requestBody);
//        Integer id = (Integer) requestBody.get("id");
//        String username = (String) requestBody.get("username");
//        String password = (String) requestBody.get("password");
//        String name = (String) requestBody.get("name");
//
//        System.out.println("id: " + id);
//        System.out.println("username: " + username);
//        System.out.println("password: " + password);
//        System.out.println("name: " + name);
//
//        return ResponseEntity.ok("ddd");
//    }
}

