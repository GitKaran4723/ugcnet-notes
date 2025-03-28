# 🖥️ Basic Concepts of Computer

A **computer** is an electronic device that accepts data (**input**), processes it as per instructions (**process**), and gives the result (**output**). It can also store the result for future use.

---

## 🔧 Components of a Computer System

A typical computer system consists of:

### 1. Input Unit
Devices that help to enter data into the computer.

**Examples**:
- Keyboard
- Mouse
- Scanner
- Microphone

### 2. Output Unit
Devices that present processed data to the user.

**Examples**:
- Monitor
- Printer
- Speakers

### 3. Central Processing Unit (CPU)
The **CPU** is the brain of the computer. It performs all operations.

#### CPU Includes:
- **Arithmetic Logic Unit (ALU)**: Performs arithmetic and logic operations.
- **Control Unit (CU)**: Directs operations.
- **Registers**: Small memory units for quick access.

---

### 🧠 Example Calculation (ALU-style):

Let the CPU compute the following:

$$
\text{Result} = (A + B) \times C
$$

Given:

$$
A = 5,\quad B = 3,\quad C = 2
$$

Then:

$$
\text{Result} = (5 + 3) \times 2 = 16
$$

---

## 🧠 Memory Hierarchy

| Memory Type | Speed     | Size    | Volatile |
|-------------|-----------|---------|----------|
| Register    | Very Fast | Very Small | Yes    |
| Cache       | Fast      | Small      | Yes    |
| RAM         | Moderate  | Medium     | Yes    |
| Hard Disk   | Slow      | Large      | No     |

### Effective Access Time:

$$
\text{EAT} = h \cdot t_c + (1 - h) \cdot t_m
$$

Where:  
- $h$: cache hit ratio  
- $t_c$: cache access time  
- $t_m$: main memory access time

---

## 💽 Types of Software

### 1. System Software
- Operating Systems (e.g., Windows, Linux)
- Compilers
- Device Drivers

### 2. Application Software
- Word Processors
- Browsers
- Media Players

---

## 🕹️ Instruction Cycle

1. **Fetch**: Get instruction from memory  
2. **Decode**: Identify operation  
3. **Execute**: Perform via ALU  
4. **Store**: Save result

---

## 🧮 Binary Basics

All operations inside a computer are done in binary (base-2).

Examples:

- Decimal 5 = $$ (101)_2 $$
- Decimal 10 = $$ (1010)_2 $$

---

## ✅ Summary

- Computers follow the IPO model: Input → Process → Output
- CPU is composed of ALU, CU, and Registers
- Memory is structured in a hierarchy
- Math equations and logic are essential to computing

