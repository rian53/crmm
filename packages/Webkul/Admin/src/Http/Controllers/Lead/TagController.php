<?php

namespace Webkul\Admin\Http\Controllers\Lead;

use Illuminate\Support\Facades\Event;
use Webkul\Admin\Http\Controllers\Controller;
use Webkul\Lead\Repositories\LeadRepository;

class TagController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(protected LeadRepository $leadRepository) {}

    /**
     * Store a newly created resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function attach($id)
    {
        Event::dispatch('leads.tag.create.before', $id);

        $lead = $this->leadRepository->find($id);

        if (! $lead->tags->contains(request()->input('tag_id'))) {
            $lead->tags()->attach(request()->input('tag_id'));
        }

        Event::dispatch('leads.tag.create.after', $lead);

        return response()->json([
            'message' => trans('admin::app.leads.view.tags.create-success'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $leadId
     * @return \Illuminate\Http\Response
     */
    public function detach($leadId)
    {
        Event::dispatch('leads.tag.delete.before', $leadId);
    
        // Encontrar o lead
        $lead = $this->leadRepository->find($leadId);
    
        // Obter o person_id associado ao lead
        $personId = $lead->person_id;
    
        // Remover a tag da relação com o lead
        $lead->tags()->detach(request()->input('tag_id'));
    
        // Verificar se há um person associado e remover a tag de person_tags
        if ($personId) {
            $person = $lead->person; // Obter o objeto Person
    
            if ($person) {
                $person->tags()->detach(request()->input('tag_id'));
            }
        }
    
        Event::dispatch('leads.tag.delete.after', $lead);
    
        return response()->json([
            'message' => trans('admin::app.leads.view.tags.destroy-success'),
        ]);
    }
    
}
