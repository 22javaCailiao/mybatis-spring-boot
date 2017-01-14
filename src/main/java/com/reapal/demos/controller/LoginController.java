package com.reapal.demos.controller;

import com.reapal.demos.model.User;
import com.reapal.demos.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

/**
 * Created by jack-cooper on 2017/1/14.
 */
@Controller
public class LoginController extends BaseController{

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public ModelAndView login() {
        // 1、收集参数、验证参数
        // 2、绑定参数到命令对象
        // 3、将命令对象传入业务对象进行业务处理
        // 4、选择下一个页面
        ModelAndView mv = new ModelAndView();
        // 添加模型数据 可以是任意的POJO对象
        mv.addObject("message", "welcome login repal.com");
        // 设置逻辑视图名，视图解析器会根据该名字解析到具体的视图页面
        mv.setViewName("login");
        return mv;
    }

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public ModelAndView signIn(User user, RedirectAttributes redirectAttributes) {
        ModelAndView mv = new ModelAndView();
        userService.deleteById(1l);
        User user1 = userService.queryById(2l);
        userService.update(user1);
        List<User> users = userService.queryListByWhere(user);
        if(users.size() == 1){
            mv.addObject("message", "login success");
            mv.setViewName("index");
        }else{
            redirectAttributes.addFlashAttribute("message", "login error");
            mv.setViewName("redirect:/login");
        }
        return mv;
    }

}
