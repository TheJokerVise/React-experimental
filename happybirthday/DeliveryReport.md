# Software Delivery Report

## 1. Project Overview

This project is a file transfer system composed of two **C# console client application** and some new improvements in **EP001** server. The system allows users to send files from a local file system to a server. 
The two console client application are:

- LegacyExamTestClient
- ChunkExamTestClient

In the "Legacy" version files are upload in the usual way for EP001.
In the "Chunk" version are divided into chunks on the client side and reassembled on the server side.

### Main Features Chunk version

- File chunking and streaming from client to server
- Custom middleware in EP001 for chunk reception and handle
- File reconstruction and storage on server
- File metadata saved to a database
- Physical file saved to server file system

## 2. Objectives of the Delivery

This delivery includes a minimum viable implementation of the complete file transfer pipeline. The goal is to demonstrate:

- A working prototype of the file chunking and reassembly mechanism
- Successful persistence of uploaded files to both the file system and the database
- A stable and testable integration between client and server
- A stable, testable and legacy version of the similar C# console application to compare two approches

## 3. Software Components

### 3.1 Client - ChunkExamTestClient - Console Application (C#)

- Reads files from the local file system
- Splits files into chunks
- Sends chunks via HTTP to the server
- Handles basic error to simulate a retry policy
- Tracking logs to measure upload preformance times

### 3.2 Client - LegacyExamTestClient - Console Application (C#)

- Reads files from the local file system
- Sends chunks via HTTP to the server
- Tracking logs to measure upload preformance times

### 3.3 Server - EP001 - ASP.NET Core Web Application

- Exposes endpoints to receive file chunks ("start" and "end" action)
- Uses custom middleware to recognize a specific request to process incoming chunks ("upload and handle chunk")
- Reconstructs files from chunks
- Saves files to:
  - Server file system
  - Database with metadata (file name, size, checksum, upload date, etc.)
