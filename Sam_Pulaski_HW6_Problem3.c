#include <stdio.h>
#include <stdlib.h>


void calc_sum_even_odd_indicies(float array[], int size, float *sum_odd, float *sum_even) {
   //calculate the sum of even-index elements and the sum of the odd-index elements
   //store even sum in sum_even and odd sum in sum_odd
   *sum_odd = 0;
   *sum_even = 0;

//This loop is ineficient in the cache because it is not accessing memory in a linear fashion
//This means the CPU will have a harder time accessing the data in memory, its bad for spatial locality
//    for (int i = 0; i < size; i+=2) {
//        *sum_even += array[i];
//    }
//    for (int i = 1; i < size; i+=2) {
//        *sum_odd += array[i];
//    }
// }

//The more efficient loop that accesses memory in a linear fashion is the following
    for (int i = 0; i < size; i++) {
         if (i % 2 == 0) {
              *sum_even += array[i];
         } else {
              *sum_odd += array[i];
         }
    }
    }

    //This goes through the array in order and checks as it goes rather than doing the array twice and skipping each valie


void calc_tensor_sum(int size1, int size2, int size3,float tensor[size1][size2][size3], float *sum) {
   //calculate sum of all the elements in a 3d tensor

   //This is done in row first order, which is again bad for cache spatial locality
   //This means the CPU will have a harder time accessing the data in memory
   *sum = 0;
//    for (int i = 0; i < size1; i++) {
//        for (int j = 0; j < size2; j++) {
//            for (int k = 0; k < size3; k++) {
//               *sum += tensor[k][i][j];


//            }
//        }
//    }

//This is a more efficient way to do it, as it accesses the data in a linear fashion
    for (int i = 0; i < size1; i++) {
        for (int j = 0; j < size2; j++) {
            for (int k = 0; k < size3; k++) {
               *sum += tensor[i][j][k];
            }
        }
    }
}


void calc_array_even_odd(float array[], int size, float *dest_even, float *dest_odd) {
   //let the input array of size (size) be a function f[n]
   //where the index - midpoint is n
   //eg.  f[n] =   1  3  5  7  9
   //       n  =  -2 -1  0  1  2
   // for an even number of elements, there is no middle number
   //eg.  f[n] =   1  3  5  7  9  11
   //       n  =  -3 -2 -1  1  2  3


   // the even part of the function is f_even[n]= (f[n]+f[-n])/2
   // the odd part of the function is f_odd[n]= (f[n]-f[-n])/2
   // where f[n] = f_even + f_odd
   // assuming *dest_even and *dest_odd are initialized as pointers to arrays of zeros
   // decompose an input f[n] into its even and odd components and store
   // in their respective destinations
   // hint: change the loop structure/order of things done in the loop


   int left_bound =0;
   int right_bound=size-1;
   int mid = size/2;


   //This for loop for the problem
   for(int i = 0; i<size; i++) {
       *(dest_even+left_bound) +=array[i] / 2;
       *(dest_odd+left_bound) +=array[i] / 2;
       *(dest_even+right_bound) +=array[i] / 2;
       *(dest_odd+right_bound) -=array[i] / 2;
       left_bound++;
       right_bound--;

   }

}

//We removed the while loop because it was inefficient in the cache 

int main() {
   float my_arr[] = {1,2,3,4,5, 6};
   int my_arr_size = sizeof(my_arr) / sizeof(my_arr[0]);


   printf("-------test calc_sum_even_odd_indicies()-------\n");
   float even_sum, odd_sum;
   calc_sum_even_odd_indicies(my_arr, my_arr_size, &even_sum, &odd_sum);
   printf("The sum of even elements is: %f\n", even_sum);
   printf("The sum of odd elements is: %f\n", odd_sum);




   //initialize even and odd array pointers
   // type *out = calloc(num_el, sizeof(type))
   // is the same as
   // type *out = malloc(num_el * sizeof(type))
   // except calloc initializes out array values as all 0s
   printf("-------test calc_array_even_odd()-------\n");
   float *my_arr_even = (float *)calloc(my_arr_size, sizeof(my_arr[0]));
   float *my_arr_odd = (float *)calloc(my_arr_size, sizeof(my_arr[0]));


   calc_array_even_odd(my_arr, my_arr_size, my_arr_even, my_arr_odd);


   printf("\nelements of f_even and f_odd:\n");
   for(int i = 0; i < my_arr_size; i++) {
       printf("even %f,", my_arr_even[i]);
       printf(" odd %f \n", my_arr_odd[i]);
   }


   printf("-------test calc_tensor_sum()-------\n");
   int s1=3, s2=3, s3=3;
   float my_tensor[3][3][3] = { {{ 1, 2, 3 },{ 4, 5, 6 },{ 7, 8, 9 } },
                                 {{ -2, 7, 1 },{ 1, 1, 1 },{ 0, -10, -1 }},
                                 {{ 0, 1, 0 },{ 8, 9, 10 },{ 3, 2, 1 }} };


   float ten_sum;
   calc_tensor_sum(s1, s2, s3, my_tensor, &ten_sum);
   printf("The sum of the elements is: %f\n", ten_sum);


}
