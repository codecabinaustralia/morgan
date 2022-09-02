<template>
    <div class="py-16 flex w-full bg-vgreen">
        <div class="container mx-auto h-full flex items-center px-20">
            <div class="w-1/2">
                <h1 class="text-white header-bold text-5xl">
                    Search through Australia's best businesses forsale
                </h1>
                
                <div class="w-full text-sm text-white mt-6">Select an industry</div>
                <div class="w-full flex space-x-4 w-full h-12 items-center mt-2">
                    <div class="flex-shrink">
                        <select name="" id="" class="px-4 w-40 hover:border-white hover:bg-vgreen hover:text-white h-12 cursor-pointer border-2 border-transparent flex items-center justify-center text-vgreen bg-white rounded-lg">
                            <option>Advertising</option>
                            <option>Auto</option>
                            <option>Business</option>
                            <option>Catering</option>
                            <option>Childcare</option>
                            <option>Dental</option>
                            <option>Environmental</option>
                            <option>Health & Fitness</option>
                        </select>
                    </div>
                        <div class="flex-shrink">
                        <select name="" id="" class="px-4 w-56 hover:border-white hover:bg-vgreen hover:text-white h-12 cursor-pointer border-2 border-transparent flex items-center justify-center text-vgreen bg-white rounded-lg">
                            <option>at any price</option>
                            <option>Between 10k & 50K</option>
                            <option>Between 50k & 100K</option>
                            <option>Between 100k & 250K</option>
                            <option>Between 250k & 500K</option>
                            <option>Between 500k & 1M</option>
                            <option>Between 1M & 10M</option>
                            <option>10M +</option>

                        </select>
                    </div>
                </div>
            </div>

            <div class="w-1/2 text-center group">
                <h2 class="text-white header-bold text-xl cursor-pointer">Looking for something that's not here?</h2>
                <h3 class="text-white header-medium group-hover:text-yellow-500 cursor-pointer">Book a 1-on-1 and we'll do some investigation for you</h3>
            </div>

        </div>
    </div>
</template>

<script>
export default {
}
</script>