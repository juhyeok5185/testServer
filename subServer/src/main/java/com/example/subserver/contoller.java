package com.example.subserver;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Controller
public class contoller {

    @GetMapping("/main")
    public String main () {
        return "main";
    }

    @GetMapping("/apiTest")
    public ResponseEntity<String> apiTest(dto dto) {

        System.out.println(dto);

        return ResponseEntity.ok("ddd");
    }

//    @PostMapping("/apiTest")
//    public ResponseEntity<String> apiTest(
//            @RequestParam("name") String name,
//            @RequestParam("username") String username,
//            @RequestParam("password") String password,
//            @RequestParam("id") String id,
//            @RequestParam("files") MultipartFile[] files) {
//
//        // 받아온 데이터와 파일을 처리
//        System.out.println("Name: " + name);
//        System.out.println("Username: " + username);
//        System.out.println("Password: " + password);
//        System.out.println("ID: " + id);
//
//        for (MultipartFile file : files) {
//            if (!file.isEmpty()) {
//                String originalFilename = file.getOriginalFilename();
//                System.out.println("Original Filename: " + originalFilename);
//            }
//        }
//
//        return ResponseEntity.ok("File uploaded successfully.");
//    }
}

