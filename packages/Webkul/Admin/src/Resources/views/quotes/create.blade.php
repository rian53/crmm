@php
    $quote = app('\Webkul\Quote\Repositories\QuoteRepository')->getModel();

    if (isset($lead)) {
        $quote->fill([
            'person_id'       => $lead->person_id,
            'user_id'         => $lead->user_id,
            'billing_address' => $lead->person->organization ? $lead->person->organization->address : null
        ]);
    }else if(isset($remarketing)){
        $person = [
                'name'            => $remarketing->person,
                'emails'          => $remarketing->emails,
                'contact_numbers' => $remarketing->phone_number,
            ];

        $quote->shipping_address = json_encode([
            'address'  => $remarketing->address ?? '',
            'city'     => $remarketing->city ?? '',
            'state'    => '',
            'country'  => '',
            'postcode' => $remarketing->zipcode ?? '',
        ]);

        $quote->shipping_address = json_decode($quote->shipping_address, true);

        $product = app('\Webkul\Product\Repositories\ProductRepository')->find($remarketing->product_id);
        $items = [
            [
                'product_id'      => $product->id ?? null,
                'name'            => $product->name ?? '',
                'quantity'        => $remarketing->quantity ?? 1,
                'price'           => $product->price ?? 0.00,
                'total'           => ($remarketing->quantity ?? 1) * ($product->price ?? 0.00),
                'discount_amount' => 0,
                'tax_amount'      => 0,
                'final_total'     => ($remarketing->quantity ?? 1) * ($product->price ?? 0.00),
                'isRemarketing'   => true,

            ]
        ];

        $isRemarketing = true;
        $remarketingId = $remarketing->remarketing_id;
        $quote->items = $items;
    }
@endphp

<x-admin::layouts>
    <x-slot:title>
        @lang('admin::app.quotes.create.title')
    </x-slot>

    {!! view_render_event('admin.contacts.quotes.create.form_controls.before') !!}

    <x-admin::form :action="route('admin.quotes.store')">
        <input
            type="hidden"
            name="remarketing_id"
            class="control"
            :value="{{ isset($remarketingId) ? $remarketingId : null }}"
            readonly
        >

        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                <div class="flex flex-col gap-2">
                    <div class="flex cursor-pointer items-center">
                        <x-admin::breadcrumbs
                            name="quotes.create"
                        />
                    </div>

                    <div class="text-xl font-bold dark:text-white">
                        @lang('admin::app.quotes.create.title')
                    </div>
                </div>

                <div class="flex items-center gap-x-2.5">
                    <!-- Save button for person -->
                    <div class="flex items-center gap-x-2.5">
                        {!! view_render_event('admin.contacts.quotes.create.save_button.before') !!}

                        <button
                            type="submit"
                            class="primary-button"
                        >
                            @lang('admin::app.quotes.create.save-btn')
                        </button>

                        {!! view_render_event('admin.contacts.quotes.create.save_button.after') !!}
                    </div>
                </div>
            </div>

            <v-quote :errors="errors"></v-quote>
        </div>
    </x-admin::form>

    {!! view_render_event('admin.contacts.quotes.create.form_controls.after') !!}

    @pushOnce('scripts')
        <script
            type="text/x-template"
            id="v-quote-template"
        >

            <div class="box-shadow flex flex-col gap-4 rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 max-xl:flex-wrap">
                <div class="flex gap-2 border-b border-gray-200 dark:border-gray-800">
                    {!! view_render_event('admin.contacts.quotes.create.tabs.before') !!}

                    <template
                        v-for="tab in tabs"
                        :key="tab.id"
                    >
                        <a
                            :href="'#' + tab.id"
                            :class="[
                                'inline-block px-3 py-2.5 border-b-2  text-sm font-medium ',
                                activeTab === tab.id
                                ? 'text-brandColor border-brandColor dark:brandColor dark:brandColor'
                                : 'text-gray-600 dark:text-gray-300  border-transparent hover:text-gray-800 hover:border-gray-400 dark:hover:border-gray-400  dark:hover:text-white'
                            ]"
                            @click="scrollToSection(tab.id)"
                            :text="tab.label"
                        ></a>
                    </template>

                    {!! view_render_event('admin.contacts.quotes.create.tabs.after') !!}
                </div>

                <div class="flex flex-col gap-1" style="padding: 25px;">
                    {!! view_render_event('admin.contacts.quotes.create.quote_information.before') !!}
                    <!-- Contact Person -->
                    <div
                        class="flex gap-4"
                        id="contact-person"
                    >
                        <div class="w-full" style="width: 50rem;">

                            <div class="w-full mb-4">
                                <p class="text-base font-semibold dark:text-white">
                                    @lang('admin::app.leads.create.contact-person')
                                </p>

                                <p class="text-gray-600 dark:text-white">
                                    @lang('admin::app.leads.create.contact-info')
                                </p>
                            </div>

                            <!-- Contact Person Component -->
                            @if(!empty($person))
                                @include('admin::quotes.common.contact', ['person' => $person])
                            @else
                                @include('admin::quotes.common.contact')
                            @endif
                        </div>

                        {!! view_render_event('admin.contacts.quotes.create.address_information.before') !!}
                        <!-- Address information -->
                        <div
                           class="grid w-full gap-4" id="address-info"
                        >
                            <div class="flex flex-col gap-1">
                                <p class="text-base font-semibold text-gray-800 dark:text-white">
                                    @lang('admin::app.quotes.create.address-info')
                                </p>

                                <p class="text-sm text-gray-600 dark:text-white">@lang('admin::app.quotes.create.address-info-info')</p>
                            </div>

                            <div class="w-1/2">
                                {!! view_render_event('admin.contacts.quotes.create.address_information.attributes.before') !!}

                                <x-admin::attributes
                                    :custom-attributes="app('Webkul\Attribute\Repositories\AttributeRepository')->findWhere([
                                            'entity_type' => 'quotes',
                                            ['code', 'IN', ['shipping_address']],
                                        ])"
                                    :entity="$quote"
                                />

                                {!! view_render_event('admin.contacts.quotes.create.address_information.attributes.after') !!}
                            </div>
                        </div>

                        {!! view_render_event('admin.contacts.quotes.create.address_information.after') !!}
                    </div>
                    <!-- Quote information -->
                    <div
                        id="quote-info"
                        class="flex flex-col gap-4"
                    >
                        <div class="flex flex-col gap-1">
                            <p class="text-base font-semibold text-gray-800 dark:text-white">
                                @lang('admin::app.quotes.create.quote-info')
                            </p>

                            <p class="text-sm text-gray-600 dark:text-white">
                                @lang('admin::app.quotes.create.quote-info-info')
                            </p>
                        </div>

                        {!! view_render_event('admin.contacts.quotes.create.attribute.form_controls.before') !!}

                        <div class="w-1/2">
                            <div class="flex gap-4">

                                <x-admin::attributes
                                    :custom-attributes="app('Webkul\Attribute\Repositories\AttributeRepository')->findWhere([
                                        'entity_type' => 'quotes',
                                        ['code', 'IN', ['user_id']],
                                    ])->sortBy(function ($attribute) {
                                            return $attribute->code == 'created_at' ? 2 : 1;
                                    })"
                                    :custom-validations="[
                                    ]"
                                    :entity="$quote"
                                />
                                <div class="w-1/2">
                                    <x-admin::form.control-group>
                                        <x-admin::form.control-group.label for="created_at">
                                            @lang('admin::app.quotes.create.created-at')
                                        </x-admin::form.control-group.label>

                                        <x-admin::form.control-group.control
                                            type="date"
                                            id="created_at"
                                            name="created_at"
                                            :value="old('created_at') ?? $quote->created_at"
                                            rules="required|date_format:Y-m-d|:{{ \Carbon\Carbon::yesterday()->format('Y-m-d') }}"
                                        />
                                    </x-admin::form.control-group>
                                </div>
                            </div>


                                <x-admin::attributes
                                    :custom-attributes="app('Webkul\Attribute\Repositories\AttributeRepository')->findWhere([
                                            'entity_type' => 'quotes',
                                            ['code', 'IN', ['description']],
                                        ])"
                                    :custom-validations="[
                                        'expired_at' => [
                                            'required',
                                            'date_format:yyyy-MM-dd',
                                            'after:' .  \Carbon\Carbon::yesterday()->format('Y-m-d')
                                        ],
                                    ]"
                                />

                                {!! view_render_event('admin.contacts.quotes.create.attribute.form_controls.after') !!}
                                <div class="mb-4 mb-2.5 w-full">
                                    <x-admin::form.control-group>
                                        <x-admin::form.control-group.label class="required">
                                            @lang('admin::app.quotes.create.payment-methods')
                                        </x-admin::form.control-group.label>

                                        <select name="payment_method_id" class="border custom-select rounded border border-gray-200 px-2.5 py-2 text-sm font-normal text-gray-800 transition-all hover:border-gray-400 focus:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-400">
                                            <option value=""> @lang('admin::app.quotes.create.payment-methods-info')  </option>
                                            @foreach($paymentMethods as $id => $name)
                                                <option value="{{ $id }}">{{ $name }}</option>
                                            @endforeach
                                        </select>

                                        <x-admin::form.control-group.error control-name="payment_method_id" />
                                    </x-admin::form.control-group>
                                </div>


                        </div>
                        {!! view_render_event('admin.contacts.quotes.create.quote_information.after') !!}
                    </div>

                    {!! view_render_event('admin.contacts.quotes.create.quote_items.before') !!}

                    <!-- Quote Item Information -->
                    <div
                        id="quote-items"
                        class="flex flex-col gap-4"
                    >
                        <div class="flex flex-col gap-1">
                            <p class="text-base font-semibold text-gray-800 dark:text-white">
                                @lang('admin::app.quotes.create.quote-items')
                            </p>

                            <p class="text-sm text-gray-600 dark:text-white">
                                @lang('admin::app.quotes.create.quote-item-info')
                            </p>
                        </div>

                        <!-- Quote Item List Vue Component -->
                        <v-quote-item-list :errors="errors" :products="{{ json_encode($quote->items ?? []) }}"></v-quote-item-list>
                    </div>

                    {!! view_render_event('admin.contacts.quotes.create.quote_items.after') !!}
                </div>
            </div>
        </script>

        <script
            type="text/x-template"
            id="v-quote-item-list-template"
        >
            <div>
                {!! view_render_event('admin.contacts.quotes.create.table.after') !!}

                <!-- Table -->
                <x-admin::table>
                    <!-- Table Head -->
                    <x-admin::table.thead>
                        <x-admin::table.thead.tr>
                            <x-admin::table.th >
                                @lang('admin::app.quotes.create.product-name')
                            </x-admin::table.th>

                            <x-admin::table.th class="text-center">
                                @lang('admin::app.quotes.create.quantity')
                            </x-admin::table.th>

                            <x-admin::table.th class="text-center">
                                @lang('admin::app.quotes.create.price')
                            </x-admin::table.th>

                            <x-admin::table.th class="text-center">
                                @lang('admin::app.quotes.create.amount')
                            </x-admin::table.th>

                            <x-admin::table.th class="text-center">
                                @lang('admin::app.quotes.create.discount')
                            </x-admin::table.th>

                            <x-admin::table.th class="text-center">
                                @lang('admin::app.quotes.create.tax')
                            </x-admin::table.th>

                            <x-admin::table.th class="text-center">
                                @lang('admin::app.quotes.create.total')
                            </x-admin::table.th>

                            <x-admin::table.th
                                v-if="products.length > 1"
                                class="!px-2 ltr:text-right rtl:text-left"
                            >
                                @lang('admin::app.quotes.create.action')
                            </x-admin::table.th>
                        </x-admin::table.thead.tr>
                    </x-admin::table.thead>

                    <!-- Table Body -->
                    <x-admin::table.tbody>
                        <!-- Quote Item Vue component -->
                        <template
                            v-for='(product, index) in products'
                            :key="index"
                        >
                            <v-quote-item
                                :product="product"
                                :index="index"
                                :errors="errors"
                                @onRemoveProduct="removeProduct($event)"
                            ></v-quote-item>
                        </template>
                    </x-admin::table.tbody>
                </x-admin::table>

                {!! view_render_event('admin.contacts.quotes.create.table.before') !!}
            </div>

            <!-- Add New Qoute Item -->
            <span
                class="self-start text-md cursor-pointer font-semibold text-brandColor hover:underline dark:text-brandColor"
                @click="addProduct"
            >
                @lang('admin::app.quotes.create.add-item')
            </span>

            <div class="flex items-start gap-10 max-lg:gap-5">
                <div class="flex-auto">
                    <div class="flex justify-end">
                        <div class="grid w-[348px] gap-4 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-950 dark:text-white">
                            <div class="flex w-full justify-between gap-x-5">
                                @lang('admin::app.quotes.create.sub-total', ['symbol' => core()->currencySymbol(config('app.currency'))])

                                <input
                                    type="hidden"
                                    name="sub_total"
                                    class="control"
                                    :value="subTotal"
                                    readonly
                                >

                                <p>@{{ subTotal }}</p>
                            </div>

                            <div class="flex w-full justify-between gap-x-5">
                                @lang('admin::app.quotes.create.total-discount', ['symbol' => core()->currencySymbol(config('app.currency'))])

                                <input
                                    type="hidden"
                                    name="discount_amount"
                                    :value="discountAmount"
                                >

                                <p>@{{ discountAmount }}</p>
                            </div>

                            <div class="flex w-full justify-between gap-x-5">
                                @lang('admin::app.quotes.create.total-tax', ['symbol' => core()->currencySymbol(config('app.currency'))])

                                <input
                                    type="hidden"
                                    name="tax_amount"
                                    :value="taxAmount"
                                >

                                <p>@{{ taxAmount }}</p>
                            </div>

                            <div class="flex w-full justify-between gap-x-5">
                                @lang('admin::app.quotes.create.total-adjustment', ['symbol' => core()->currencySymbol(config('app.currency'))])

                                <x-admin::form.control-group.control
                                    type="inline"
                                    ::name="`adjustment_amount`"
                                    ::value="adjustmentAmount"
                                    rules="required|decimal:4"
                                    ::errors="errors"
                                    :label="trans('admin::app.quotes.create.adjustment-amount')"
                                    :placeholder="trans('admin::app.quotes.create.adjustment-amount')"
                                    @on-change="(event) => adjustmentAmount = event.value"
                                />
                            </div>

                            <div class="flex w-full justify-between gap-x-5">
                                @lang('admin::app.quotes.create.grand-total', ['symbol' => core()->currencySymbol(config('app.currency'))])

                                <input
                                    type="hidden"
                                    name="grand_total"
                                    :value="grandTotal"
                                >

                                <p>@{{ grandTotal }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </script>

        <script
            type="text/x-template"
            id="v-quote-item-template"
        >
            <x-admin::table.thead.tr>
                <!-- Quote Product Name -->
                <x-admin::table.td>
                    <x-admin::form.control-group class="!mb-0">
                        <x-admin::lookup
                            ::src="src"
                            ::name="`${inputName}[product_id]`"
                            ::params="params"
                            ::value="{ id: product.product_id, name: product.name }"
                            @on-selected="(product) => addProduct(product)"
                            :placeholder="trans('admin::app.quotes.edit.search-products')"
                        />
                    </x-admin::form.control-group>
                </x-admin::table.td>

                <!-- Quantity -->
                <x-admin::table.td class="!px-2 ltr:text-right rtl:text-left">
                    <x-admin::form.control-group class="!mb-0">
                        <x-admin::form.control-group.control
                            type="inline"
                            ::name="`${inputName}[quantity]`"
                            ::value="product.quantity"
                            rules="required|decimal:4"
                            ::errors="errors"
                            :label="trans('admin::app.quotes.create.quantity')"
                            :placeholder="trans('admin::app.quotes.create.quantity')"
                            @on-change="(event) => product.quantity = event.value"
                            position="center"
                        />
                    </x-admin::form.control-group>
                </x-admin::table.td>

                <!-- Price -->
                <x-admin::table.td class="!px-2 ltr:text-right rtl:text-left">
                    <x-admin::form.control-group class="!mb-0">
                        <x-admin::form.control-group.control
                            type="inline"
                            ::name="`${inputName}[price]`"
                            ::value="product.price"
                            rules="required|decimal:4"
                            ::errors="errors"
                            :label="trans('admin::app.quotes.create.price')"
                            :placeholder="trans('admin::app.quotes.create.price')"
                            @on-change="(event) => product.price = event.value"
                            position="center"
                            ::value-label="$admin.formatPrice(product.price)"
                        />
                    </x-admin::form.control-group>
                </x-admin::table.td>

                <!-- Total -->
                <x-admin::table.td class="!px-2 ltr:text-right rtl:text-left">
                    <x-admin::form.control-group class="!mb-0">
                        <x-admin::form.control-group.control
                            type="inline"
                            ::name="`${inputName}[total]`"
                            ::value="product.price * product.quantity"
                            rules="required|decimal:4"
                            ::errors="errors"
                            :label="trans('admin::app.quotes.create.total')"
                            :placeholder="trans('admin::app.quotes.create.total')"
                            :allowEdit="false"
                            position="center"
                            ::value-label="$admin.formatPrice(product.price * product.quantity)"
                        />
                    </x-admin::form.control-group>
                </x-admin::table.td>

                <!-- Discount Amount -->
                <x-admin::table.td class="!px-2 ltr:text-right rtl:text-left">
                    <x-admin::form.control-group class="!mb-0">
                        <x-admin::form.control-group.control
                            type="inline"
                            ::name="`${inputName}[discount_amount]`"
                            ::value="product.discount_amount"
                            rules="required|decimal:4"
                            ::errors="errors"
                            :label="trans('admin::app.quotes.create.discount-amount')"
                            :placeholder="trans('admin::app.quotes.create.discount-amount')"
                            @on-change="(event) => product.discount_amount = event.value"
                            position="center"
                            ::value-label="$admin.formatPrice(product.discount_amount)"
                        />
                    </x-admin::form.control-group>
                </x-admin::table.td>

                <!-- Tax Amount -->
                <x-admin::table.td class="!px-2 ltr:text-right rtl:text-left">
                    <x-admin::form.control-group class="!mb-0">
                        <x-admin::form.control-group.control
                            type="inline"
                            ::name="`${inputName}[tax_amount]`"
                            ::value="product.tax_amount"
                            rules="required|decimal:4"
                            ::errors="errors"
                            :label="trans('admin::app.quotes.create.tax-amount')"
                            :placeholder="trans('admin::app.quotes.create.tax-amount')"
                            @on-change="(event) => product.tax_amount = event.value"
                            position="center"
                            ::value-label="$admin.formatPrice(product.tax_amount)"
                        />
                    </x-admin::form.control-group>
                </x-admin::table.td>

                <!-- Total with Discount -->
                <x-admin::table.td class="!px-2 ltr:text-right rtl:text-left">
                    <x-admin::form.control-group class="!mb-0">
                        <x-admin::form.control-group.control
                            type="inline"
                            ::name="`${inputName}[final_total]`"
                            ::errors="errors"
                            ::value="parseFloat(product.price * product.quantity) + parseFloat(product.tax_amount) - parseFloat(product.discount_amount)"
                            :allowEdit="false"
                            position="center"
                            ::value-label="$admin.formatPrice(parseFloat(product.price * product.quantity) + parseFloat(product.tax_amount) - parseFloat(product.discount_amount))"
                        />
                    </x-admin::form.control-group>
                </x-admin::table.td>

                <!-- Action -->
                <x-admin::table.td
                    v-if="$parent.products.length > 1"
                    class="!px-2 ltr:text-right rtl:text-left"
                >
                    <x-admin::form.control-group class="!mb-0">
                        <i
                            @click="removeProduct"
                            class="icon-delete cursor-pointer text-2xl"
                        ></i>
                    </x-admin::form.control-group>
                </x-admin::table.td>
            </x-admin::table.thead.tr>
        </script>

        <script type="module">
            app.component('v-quote', {
                template: '#v-quote-template',

                props: ['errors'],

                data() {
                    return {
                        activeTab: 'quote-info',

                        tabs: [
                            { id: 'quote-info', label: '@lang('admin::app.quotes.create.quote-info')' },
                            { id: 'address-info', label: '@lang('admin::app.quotes.create.address-info')' },
                            { id: 'quote-items', label: '@lang('admin::app.quotes.create.quote-items')' }
                        ],
                    };
                },

                methods: {
                    /**
                     * Scroll to the section.
                     *
                     * @param {String} tabId
                     *
                     * @returns {void}
                     */
                    scrollToSection(tabId) {
                        const section = document.getElementById(tabId);

                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    },
                },
            });

            app.component('v-quote-item-list', {
                template: '#v-quote-item-list-template',

                props: ['errors'],

                data() {
                    return {
                        adjustmentAmount: 0,

                        products: @json($quote->items) && @json($quote->items).length > 0 ? @json($quote->items) : [{
                            'id': null,
                            'product_id': null,
                            'name': '',
                            'quantity': 1,
                            'price': 0,
                            'discount_amount': 0,
                            'tax_amount': 0,
                        }],

                        selectedPaymentMethod: null, // Armazena o método de pagamento selecionado
                        paymentMethods: [],
                    };
                },

                mounted() {
                    // Carrega os métodos de pagamento ao montar o componente
                    this.loadPaymentMethods();
                },

                computed: {
                    /**
                     * Calculate the sub total of the products.
                     *
                     * @returns {Number}
                     */
                    subTotal() {
                        let total = 0;

                        this.products.forEach(product => {
                            total += parseFloat(product.price * product.quantity);
                        });

                        return total;
                    },

                    /**
                     * Calculate the total discount amount of the products.
                     *
                     * @returns {Number}
                     */
                    discountAmount() {
                        let total = 0;

                        this.products.forEach(product => total += parseFloat(product.discount_amount));

                        return total;
                    },

                    /**
                     * Calculate the total tax amount of the products.
                     *
                     * @returns {Number}
                     */
                    taxAmount() {
                        let total = 0;

                        this.products.forEach(product => total += parseFloat(product.tax_amount));

                        return total;
                    },

                    /**
                     * Calculate the grand total of the products.
                     *
                     * @returns {Number}
                     */
                    grandTotal() {
                        let total = 0;

                        this.products.forEach(product => {
                            total += parseFloat(product.price * product.quantity) + parseFloat(product.tax_amount) - parseFloat(product.discount_amount) + parseFloat(this.adjustmentAmount);
                        });

                        return total;
                    },
                },

                methods: {
                    // Carrega os métodos de pagamento da API
                    loadPaymentMethods() {
                        axios.get('payment-method') // Faz a requisição para a rota configurada
                            .then(response => {
                                this.paymentMethods = response.data; // Armazena os métodos de pagamento na variável
                            })
                            .catch(error => {
                                console.error("Erro ao carregar métodos de pagamento:", error);
                            });
                    },


                    selectPaymentMethod(method) {

                        this.selectedPaymentMethod = method;
                    },
                    /**
                     * Add a new product.
                     *
                     * @returns {void}
                     */
                    addProduct() {
                        this.products.push({
                            id: null,
                            product_id: null,
                            name: '',
                            quantity: 1,
                            total: 0,
                            price: 0,
                            discount_amount: 0,
                            tax_amount: 0,
                        });
                    },

                    /**
                     * Remove the product.
                     *
                     * @param {Object} product
                     */
                    removeProduct(product) {
                        this.$emitter.emit('open-confirm-modal', {
                            agree: () => {
                                if (this.products.length === 1) {
                                    this.products = [{
                                        id: null,
                                        product_id: null,
                                        name: '',
                                        quantity: null,
                                        total: 0,
                                        price: null,
                                        discount_amount: null,
                                        tax_amount: null,
                                    }];
                                } else {
                                    const index = this.products.indexOf(product);

                                    if (index !== -1) {
                                        this.products.splice(index, 1);
                                    }
                                }
                            },
                        });
                    },
                },
            });

            app.component('v-quote-item', {
                template: '#v-quote-item-template',

                props: ['index', 'product', 'errors'],

                data() {
                    return {
                        state: this.product['product_id'] ? 'old' : '',

                        products: [],
                        paymentMethods: [],

                    }
                },

                mounted() {
                    this.loadPaymentMethods();
                },

                computed: {
                    /**
                     * Get the input name.
                     *
                     * @returns {String}
                     */
                    inputName() {
                        if (this.product.id) {
                            return "items[" + this.product.id + "]";
                        }

                        return "items[item_" + this.index + "]";
                    },

                    /**
                     * Get the source URL.
                     *
                     * @returns {String}
                     */
                    src() {
                        return "{{ route('admin.products.search') }}";
                    },

                    params() {
                        return {
                            params: {
                                query: this.product.name,
                            },
                        };
                    },
                },

                methods: {
                    loadPaymentMethods() {
                        axios.get('payment-method')
                            .then(response => {
                                this.paymentMethods = response.data;
                            })
                            .catch(error => {
                                console.error("Erro ao carregar métodos de pagamento:", error);
                            });
                    },

                    /**
                     * Add the product.
                     *
                     * @param {Object} result
                     *
                     * @return {void}
                     */
                    addProduct(result) {
                        this.product.product_id = result.id;
                        this.product.name = result.name;
                        this.product.price = result.price;
                        this.product.quantity = result.quantity ?? 1;
                        this.product.discount_amount = 0;
                        this.product.tax_amount = 0;
                    },

                    /**
                     * Remove the product.
                     *
                     * @return {void}
                     */
                    removeProduct() {
                        this.$emit('onRemoveProduct', this.product);
                    },
                },
            });
         </script>
    @endPushOnce

    @pushOnce('styles')
        <style>
            html {
                scroll-behavior: smooth;
            }
        </style>
    @endPushOnce
</x-admin::layouts>
