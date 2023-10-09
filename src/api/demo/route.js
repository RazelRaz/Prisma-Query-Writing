import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res){

    
    const prisma = new PrismaClient();

    //insert one

    // await prisma.brands.create({
    //     data:{brandName:'Orange', brandImg:'orange1234.png'}
    // })

    //insert many
    // await prisma.brands.createMany({
    //     data:[
    //         {brandName:'Orange', brandImg:'orange1234.png'},
    //         {brandName:'apple', brandImg:'apple.png'},
    //         {brandName:'candy', brandImg:'candy.png'},
    //         {brandName:'cola', brandImg:'cola.png'},
    //         {brandName:'lemon', brandImg:'lemon.png'}
    //     ]
    // })

    //Find Many
    // const list = await prisma.brands.findMany();

    //update query (one)
    // await prisma.brands.update({
    //     where:{id:18},
    //     data:{brandName:'pink', brandImg:'pink.png'}
    // })


    //Delete query
    await prisma.brands.delete({
        where:{id:18}
    })



    return NextResponse.json({status:'Success'})
}