package com.example.subserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class contoller {

    @GetMapping("/main")
    public String main () {
        return "main";
    }

}

