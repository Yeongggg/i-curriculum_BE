package goorming.iCurriculum;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

    @GetMapping("/")
    public String index() {
        System.out.println("Hello world!");
        return "Hello world!";
    }

}