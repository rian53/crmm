<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function boot()
    {
        // DB::listen(function ($query) {
        //     Log::info("SQL: " . $query->sql);
        //     Log::info("Bindings: " . json_encode($query->bindings));
        //     Log::info("Time: " . $query->time . "ms");
        // });
    }
}
