package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println(" Setup: Calculator instance created.");
    }

    @After
    public void tearDown() {
        System.out.println(" Teardown: Calculator instance discarded.\n");
    }

    @Test
    public void testAddition() {
        int result = calculator.add(10, 5);
        assertEquals("Addition failed", 15, result);
        System.out.println(" testAddition passed.");
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(9, 4);
        assertEquals("Subtraction failed", 5, result);
        System.out.println(" testSubtraction passed.");
    }

    @Test
    public void testMultiplication() {
        int result = calculator.multiply(3, 7);
        assertEquals("Multiplication failed", 21, result);
        System.out.println("testMultiplication passed.");
    }
}
