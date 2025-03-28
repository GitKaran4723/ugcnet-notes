# 🖥️ Basic Concepts of Computer

A **computer** is an electronic device that accepts data (input), processes it as per instructions (process), and gives the result (output). It can also store the result for future use.

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
It is the brain of the computer. It performs all the operations.

#### The CPU consists of:
- **Arithmetic Logic Unit (ALU)**: Performs arithmetic and logic operations.
- **Control Unit (CU)**: Directs the operation of the processor.
- **Registers**: Small memory units for quick data access.

#### MathJax Example (ALU Calculation):

Let a CPU perform the following operation:

\\[
\text{Result} = (A + B) \times C
\\]

Where:
- \\( A = 5 \\)
- \\( B = 3 \\)
- \\( C = 2 \\)

\\[
\text{Result} = (5 + 3) \times 2 = 16
\\]

---

## 🧠 Memory Hierarchy

Memory is categorized as:

| Type       | Speed     | Size    | Volatile |
|------------|-----------|---------|----------|
| Register   | Very Fast | Very Small | Yes     |
| Cache      | Fast      | Small     | Yes     |
| RAM        | Moderate  | Medium    | Yes     |
| Hard Disk  | Slow      | Large     | No      |

### MathJax Memory Access Equation:

Memory access time:

\\[
\text{Effective Access Time (EAT)} = h \times t_c + (1 - h) \times t_m
\\]

Where:
- \\( h \\): hit ratio
- \\( t_c \\): cache access time
- \\( t_m \\): main memory access time

---

## 💽 Types of Software

### 1. System Software
- Operating Systems (e.g., Windows, Linux)
- Compilers
- Device Drivers

### 2. Application Software
- MS Word, Excel
- Photoshop
- Browsers

---

## 🕹️ Basic Input-Output Cycle

The fundamental operation cycle of the computer is:

1. **Fetch**: The control unit fetches instruction from memory.
2. **Decode**: Instruction is decoded to identify the operation.
3. **Execute**: ALU performs the required action.
4. **Store**: The result is stored back in memory/register.

---

## 🧮 Binary Basics

All computer operations are done in **binary** (base-2).

Examples:
- Decimal 5 = \\( (101)_2 \\)
- Decimal 10 = \\( (1010)_2 \\)

Bitwise operations like AND, OR, NOT are done using binary digits (0 and 1).

---

## ✅ Summary

- A computer is an electronic programmable machine.
- It has input, output, processing, memory, and storage.
- Operations are done in binary and follow the fetch-decode-execute cycle.
- CPU is the core processing component.
- Math and logic are at the heart of computation, represented in binary and often governed by precise formulas like EAT.

