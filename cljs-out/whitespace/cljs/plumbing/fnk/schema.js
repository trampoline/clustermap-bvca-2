// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13449__13450__auto__){var G__23611 = p1__13449__13450__auto__;if(G__23611)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__23611.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__23611.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23611);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23611);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__23612_SHARP_){return (cljs.core.val.call(null,p1__23612_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__23614 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__23614,(0),null);var v = cljs.core.nth.call(null,vec__23614,(1),null);var p = vec__23614;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___23620 = schema.utils.use_fn_validation;var output_schema23615_23621 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema23616_23622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker23617_23623 = schema.core.checker.call(null,input_schema23616_23622);var output_checker23618_23624 = schema.core.checker.call(null,output_schema23615_23621);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___23620,output_schema23615_23621,input_schema23616_23622,input_checker23617_23623,output_checker23618_23624){
return (function unwrap_schema_form_key(G__23619){var validate__13419__auto__ = ufv___23620.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___23625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23619], null);var temp__4126__auto___23626 = input_checker23617_23623.call(null,args__13420__auto___23625);if(cljs.core.truth_(temp__4126__auto___23626))
{var error__13421__auto___23627 = temp__4126__auto___23626;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13421__auto___23627)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23616_23622,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23625,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23627], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var k = G__23619;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___23628 = output_checker23618_23624.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23628))
{var error__13421__auto___23629 = temp__4126__auto___23628;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13421__auto___23629)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23615_23621,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23629], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23620,output_schema23615_23621,input_schema23616_23622,input_checker23617_23623,output_checker23618_23624))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema23615_23621,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23616_23622], null)));
var ufv___23635 = schema.utils.use_fn_validation;var output_schema23630_23636 = schema.core.Any;var input_schema23631_23637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker23632_23638 = schema.core.checker.call(null,input_schema23631_23637);var output_checker23633_23639 = schema.core.checker.call(null,output_schema23630_23636);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___23635,output_schema23630_23636,input_schema23631_23637,input_checker23632_23638,output_checker23633_23639){
return (function explicit_schema_key_map(G__23634){var validate__13419__auto__ = ufv___23635.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___23640 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23634], null);var temp__4126__auto___23641 = input_checker23632_23638.call(null,args__13420__auto___23640);if(cljs.core.truth_(temp__4126__auto___23641))
{var error__13421__auto___23642 = temp__4126__auto___23641;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13421__auto___23642)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23631_23637,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23640,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23642], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__23634;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___23643 = output_checker23633_23639.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23643))
{var error__13421__auto___23644 = temp__4126__auto___23643;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13421__auto___23644)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23630_23636,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23644], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23635,output_schema23630_23636,input_schema23631_23637,input_checker23632_23638,output_checker23633_23639))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema23630_23636,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23631_23637], null)));
var ufv___23650 = schema.utils.use_fn_validation;var output_schema23645_23651 = schema.core.Any;var input_schema23646_23652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker23647_23653 = schema.core.checker.call(null,input_schema23646_23652);var output_checker23648_23654 = schema.core.checker.call(null,output_schema23645_23651);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___23650,output_schema23645_23651,input_schema23646_23652,input_checker23647_23653,output_checker23648_23654){
return (function split_schema_keys(G__23649){var validate__13419__auto__ = ufv___23650.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___23655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23649], null);var temp__4126__auto___23656 = input_checker23647_23653.call(null,args__13420__auto___23655);if(cljs.core.truth_(temp__4126__auto___23656))
{var error__13421__auto___23657 = temp__4126__auto___23656;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13421__auto___23657)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23646_23652,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23655,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23657], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__23649;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___23658 = output_checker23648_23654.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23658))
{var error__13421__auto___23659 = temp__4126__auto___23658;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13421__auto___23659)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23645_23651,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23659], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23650,output_schema23645_23651,input_schema23646_23652,input_checker23647_23653,output_checker23648_23654))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema23645_23651,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23646_23652], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__23663){var vec__23664 = p__23663;var k = cljs.core.nth.call(null,vec__23664,(0),null);var v = cljs.core.nth.call(null,vec__23664,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__23665 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__23665,(0),null);var ov = cljs.core.nth.call(null,vec__23665,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__23666){
var key_project = cljs.core.first(arglist__23666);
arglist__23666 = cljs.core.next(arglist__23666);
var key_combine = cljs.core.first(arglist__23666);
arglist__23666 = cljs.core.next(arglist__23666);
var val_combine = cljs.core.first(arglist__23666);
var maps = cljs.core.rest(arglist__23666);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___23674 = schema.utils.use_fn_validation;var output_schema23668_23675 = plumbing.fnk.schema.InputSchema;var input_schema23669_23676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker23670_23677 = schema.core.checker.call(null,input_schema23669_23676);var output_checker23671_23678 = schema.core.checker.call(null,output_schema23668_23675);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678){
return (function union_input_schemata(G__23672,G__23673){var validate__13419__auto__ = ufv___23674.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___23679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23672,G__23673], null);var temp__4126__auto___23680 = input_checker23670_23677.call(null,args__13420__auto___23679);if(cljs.core.truth_(temp__4126__auto___23680))
{var error__13421__auto___23681 = temp__4126__auto___23680;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13421__auto___23681)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23669_23676,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23679,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23681], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var i1 = G__23672;var i2 = G__23673;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13419__auto__,ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678){
return (function (p1__23667_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__23667_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__23667_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13419__auto__,ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678))
,((function (validate__13419__auto__,ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__13419__auto__,ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678))
,((function (validate__13419__auto__,ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13419__auto__,ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___23682 = output_checker23671_23678.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23682))
{var error__13421__auto___23683 = temp__4126__auto___23682;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13421__auto___23683)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23668_23675,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23683], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23674,output_schema23668_23675,input_schema23669_23676,input_checker23670_23677,output_checker23671_23678))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema23668_23675,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23669_23676], null)));
var ufv___23689 = schema.utils.use_fn_validation;var output_schema23684_23690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema23685_23691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker23686_23692 = schema.core.checker.call(null,input_schema23685_23691);var output_checker23687_23693 = schema.core.checker.call(null,output_schema23684_23690);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23689,output_schema23684_23690,input_schema23685_23691,input_checker23686_23692,output_checker23687_23693){
return (function required_toplevel_keys(G__23688){var validate__13419__auto__ = ufv___23689.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___23694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23688], null);var temp__4126__auto___23695 = input_checker23686_23692.call(null,args__13420__auto___23694);if(cljs.core.truth_(temp__4126__auto___23695))
{var error__13421__auto___23696 = temp__4126__auto___23695;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13421__auto___23696)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23685_23691,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23694,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23696], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var input_schema = G__23688;while(true){
return cljs.core.keep.call(null,((function (validate__13419__auto__,ufv___23689,output_schema23684_23690,input_schema23685_23691,input_checker23686_23692,output_checker23687_23693){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13419__auto__,ufv___23689,output_schema23684_23690,input_schema23685_23691,input_checker23686_23692,output_checker23687_23693))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___23697 = output_checker23687_23693.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23697))
{var error__13421__auto___23698 = temp__4126__auto___23697;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13421__auto___23698)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23684_23690,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23698], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23689,output_schema23684_23690,input_schema23685_23691,input_checker23686_23692,output_checker23687_23693))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema23684_23690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23685_23691], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__23707(s__23708){return (new cljs.core.LazySeq(null,(function (){var s__23708__$1 = s__23708;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23708__$1);if(temp__4126__auto__)
{var s__23708__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23708__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23708__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23710 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23709 = (0);while(true){
if((i__23709 < size__4374__auto__))
{var vec__23713 = cljs.core._nth.call(null,c__4373__auto__,i__23709);var k = cljs.core.nth.call(null,vec__23713,(0),null);var v = cljs.core.nth.call(null,vec__23713,(1),null);cljs.core.chunk_append.call(null,b__23710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__23715 = (i__23709 + (1));
i__23709 = G__23715;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23710),iter__23707.call(null,cljs.core.chunk_rest.call(null,s__23708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23710),null);
}
} else
{var vec__23714 = cljs.core.first.call(null,s__23708__$2);var k = cljs.core.nth.call(null,vec__23714,(0),null);var v = cljs.core.nth.call(null,vec__23714,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__23707.call(null,cljs.core.rest.call(null,s__23708__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__23724(s__23725){return (new cljs.core.LazySeq(null,(function (){var s__23725__$1 = s__23725;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23725__$1);if(temp__4126__auto__)
{var s__23725__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23725__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23725__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23727 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23726 = (0);while(true){
if((i__23726 < size__4374__auto__))
{var vec__23730 = cljs.core._nth.call(null,c__4373__auto__,i__23726);var k = cljs.core.nth.call(null,vec__23730,(0),null);var v = cljs.core.nth.call(null,vec__23730,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__23727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__23732 = (i__23726 + (1));
i__23726 = G__23732;
continue;
}
} else
{{
var G__23733 = (i__23726 + (1));
i__23726 = G__23733;
continue;
}
}
} else
{{
var G__23734 = (i__23726 + (1));
i__23726 = G__23734;
continue;
}
}
} else
{{
var G__23735 = (i__23726 + (1));
i__23726 = G__23735;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23727),iter__23724.call(null,cljs.core.chunk_rest.call(null,s__23725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23727),null);
}
} else
{var vec__23731 = cljs.core.first.call(null,s__23725__$2);var k = cljs.core.nth.call(null,vec__23731,(0),null);var v = cljs.core.nth.call(null,vec__23731,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23724.call(null,cljs.core.rest.call(null,s__23725__$2)));
} else
{{
var G__23736 = cljs.core.rest.call(null,s__23725__$2);
s__23725__$1 = G__23736;
continue;
}
}
} else
{{
var G__23737 = cljs.core.rest.call(null,s__23725__$2);
s__23725__$1 = G__23737;
continue;
}
}
} else
{{
var G__23738 = cljs.core.rest.call(null,s__23725__$2);
s__23725__$1 = G__23738;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___23761 = schema.utils.use_fn_validation;var output_schema23739_23762 = schema.core.Any;var input_schema23740_23763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23741_23764 = schema.core.checker.call(null,input_schema23740_23763);var output_checker23742_23765 = schema.core.checker.call(null,output_schema23739_23762);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23761,output_schema23739_23762,input_schema23740_23763,input_checker23741_23764,output_checker23742_23765){
return (function compose_schemata(G__23743,G__23744){var validate__13419__auto__ = true;if(validate__13419__auto__)
{var args__13420__auto___23766 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23743,G__23744], null);var temp__4126__auto___23767 = input_checker23741_23764.call(null,args__13420__auto___23766);if(cljs.core.truth_(temp__4126__auto___23767))
{var error__13421__auto___23768 = temp__4126__auto___23767;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13421__auto___23768)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23740_23763,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23766,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23768], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__23755 = G__23743;var vec__23757 = G__23755;var i2 = cljs.core.nth.call(null,vec__23757,(0),null);var o2 = cljs.core.nth.call(null,vec__23757,(1),null);var G__23756 = G__23744;var vec__23758 = G__23756;var i1 = cljs.core.nth.call(null,vec__23758,(0),null);var o1 = cljs.core.nth.call(null,vec__23758,(1),null);var G__23755__$1 = G__23755;var G__23756__$1 = G__23756;while(true){
var vec__23759 = G__23755__$1;var i2__$1 = cljs.core.nth.call(null,vec__23759,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23759,(1),null);var vec__23760 = G__23756__$1;var i1__$1 = cljs.core.nth.call(null,vec__23760,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23760,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13419__auto__)
{var temp__4126__auto___23769 = output_checker23742_23765.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23769))
{var error__13421__auto___23770 = temp__4126__auto___23769;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13421__auto___23770)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23739_23762,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23770], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23761,output_schema23739_23762,input_schema23740_23763,input_checker23741_23764,output_checker23742_23765))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23739_23762,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23740_23763], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___23849 = schema.utils.use_fn_validation;var output_schema23771_23850 = schema.core.Any;var input_schema23772_23851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker23773_23852 = schema.core.checker.call(null,input_schema23772_23851);var output_checker23774_23853 = schema.core.checker.call(null,output_schema23771_23850);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853){
return (function split_schema(G__23775,G__23776){var validate__13419__auto__ = ufv___23849.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___23854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23775,G__23776], null);var temp__4126__auto___23855 = input_checker23773_23852.call(null,args__13420__auto___23854);if(cljs.core.truth_(temp__4126__auto___23855))
{var error__13421__auto___23856 = temp__4126__auto___23855;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13421__auto___23856)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23772_23851,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23854,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23856], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__23775;var ks = G__23776;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4375__auto__ = ((function (ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853){
return (function iter__23813(s__23814){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853){
return (function (){var s__23814__$1 = s__23814;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23814__$1);if(temp__4126__auto__)
{var s__23814__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23814__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23814__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23816 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23815 = (0);while(true){
if((i__23815 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4373__auto__,i__23815);cljs.core.chunk_append.call(null,b__23816,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__23815,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23816,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853){
return (function iter__23833(s__23834){return (new cljs.core.LazySeq(null,((function (i__23815,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23816,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853){
return (function (){var s__23834__$1 = s__23834;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23834__$1);if(temp__4126__auto____$1)
{var s__23834__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23834__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first.call(null,s__23834__$2);var size__4374__auto____$1 = cljs.core.count.call(null,c__4373__auto____$1);var b__23836 = cljs.core.chunk_buffer.call(null,size__4374__auto____$1);if((function (){var i__23835 = (0);while(true){
if((i__23835 < size__4374__auto____$1))
{var vec__23839 = cljs.core._nth.call(null,c__4373__auto____$1,i__23835);var k = cljs.core.nth.call(null,vec__23839,(0),null);var v = cljs.core.nth.call(null,vec__23839,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23836,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23857 = (i__23835 + (1));
i__23835 = G__23857;
continue;
}
} else
{{
var G__23858 = (i__23835 + (1));
i__23835 = G__23858;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23836),iter__23833.call(null,cljs.core.chunk_rest.call(null,s__23834__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23836),null);
}
} else
{var vec__23840 = cljs.core.first.call(null,s__23834__$2);var k = cljs.core.nth.call(null,vec__23840,(0),null);var v = cljs.core.nth.call(null,vec__23840,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23833.call(null,cljs.core.rest.call(null,s__23834__$2)));
} else
{{
var G__23859 = cljs.core.rest.call(null,s__23834__$2);
s__23834__$1 = G__23859;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__23815,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23816,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853))
,null,null));
});})(i__23815,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23816,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853))
;return iter__4375__auto__.call(null,s);
})()));
{
var G__23860 = (i__23815 + (1));
i__23815 = G__23860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23816),iter__23813.call(null,cljs.core.chunk_rest.call(null,s__23814__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23816),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__23814__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853){
return (function iter__23841(s__23842){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853){
return (function (){var s__23842__$1 = s__23842;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23842__$1);if(temp__4126__auto____$1)
{var s__23842__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23842__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23842__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23844 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23843 = (0);while(true){
if((i__23843 < size__4374__auto__))
{var vec__23847 = cljs.core._nth.call(null,c__4373__auto__,i__23843);var k = cljs.core.nth.call(null,vec__23847,(0),null);var v = cljs.core.nth.call(null,vec__23847,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23861 = (i__23843 + (1));
i__23843 = G__23861;
continue;
}
} else
{{
var G__23862 = (i__23843 + (1));
i__23843 = G__23862;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23844),iter__23841.call(null,cljs.core.chunk_rest.call(null,s__23842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23844),null);
}
} else
{var vec__23848 = cljs.core.first.call(null,s__23842__$2);var k = cljs.core.nth.call(null,vec__23848,(0),null);var v = cljs.core.nth.call(null,vec__23848,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23841.call(null,cljs.core.rest.call(null,s__23842__$2)));
} else
{{
var G__23863 = cljs.core.rest.call(null,s__23842__$2);
s__23842__$1 = G__23863;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853))
,null,null));
});})(in_QMARK_,s__23814__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853))
;return iter__4375__auto__.call(null,s);
})()),iter__23813.call(null,cljs.core.rest.call(null,s__23814__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853))
,null,null));
});})(ks__$1,validate__13419__auto__,ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853))
;return iter__4375__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___23864 = output_checker23774_23853.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23864))
{var error__13421__auto___23865 = temp__4126__auto___23864;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13421__auto___23865)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23771_23850,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23865], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23849,output_schema23771_23850,input_schema23772_23851,input_checker23773_23852,output_checker23774_23853))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23771_23850,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23772_23851], null)));
var ufv___23896 = schema.utils.use_fn_validation;var output_schema23866_23897 = plumbing.fnk.schema.GraphIOSchemata;var input_schema23867_23898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23868_23899 = schema.core.checker.call(null,input_schema23867_23898);var output_checker23869_23900 = schema.core.checker.call(null,output_schema23866_23897);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23896,output_schema23866_23897,input_schema23867_23898,input_checker23868_23899,output_checker23869_23900){
return (function sequence_schemata(G__23870,G__23871){var validate__13419__auto__ = ufv___23896.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___23901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23870,G__23871], null);var temp__4126__auto___23902 = input_checker23868_23899.call(null,args__13420__auto___23901);if(cljs.core.truth_(temp__4126__auto___23902))
{var error__13421__auto___23903 = temp__4126__auto___23902;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13421__auto___23903)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23867_23898,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___23901,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23903], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__23887 = G__23870;var vec__23889 = G__23887;var i1 = cljs.core.nth.call(null,vec__23889,(0),null);var o1 = cljs.core.nth.call(null,vec__23889,(1),null);var G__23888 = G__23871;var vec__23890 = G__23888;var k = cljs.core.nth.call(null,vec__23890,(0),null);var vec__23891 = cljs.core.nth.call(null,vec__23890,(1),null);var i2 = cljs.core.nth.call(null,vec__23891,(0),null);var o2 = cljs.core.nth.call(null,vec__23891,(1),null);var G__23887__$1 = G__23887;var G__23888__$1 = G__23888;while(true){
var vec__23892 = G__23887__$1;var i1__$1 = cljs.core.nth.call(null,vec__23892,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23892,(1),null);var vec__23893 = G__23888__$1;var k__$1 = cljs.core.nth.call(null,vec__23893,(0),null);var vec__23894 = cljs.core.nth.call(null,vec__23893,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__23894,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23894,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__23895 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__23895,(0),null);var unused = cljs.core.nth.call(null,vec__23895,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___23904 = output_checker23869_23900.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___23904))
{var error__13421__auto___23905 = temp__4126__auto___23904;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13421__auto___23905)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23866_23897,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___23905], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___23896,output_schema23866_23897,input_schema23867_23898,input_checker23868_23899,output_checker23869_23900))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23866_23897,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23867_23898], null)));
