// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1325,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$1327,(function (p1__13098__13099__auto__){var G__69467 = p1__13098__13099__auto__;if(G__69467)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__69467.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__69467.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__69467);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__69467);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69468_SHARP_){return (cljs.core.val(p1__69468_SHARP_) > (1));
}),cljs.core.frequencies(things)));if(cljs.core.empty_QMARK_(repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_(m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}
var vec__69470 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69470,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69470,(1),null);var p = vec__69470;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1318,cljs.core.constant$keyword$1340,cljs.core.constant$keyword$1243,k,cljs.core.constant$keyword$1339,m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

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
var ufv___69480 = schema.utils.use_fn_validation;var output_schema69471_69481 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema69472_69482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker69473_69483 = schema.core.checker(input_schema69472_69482);var output_checker69474_69484 = schema.core.checker(output_schema69471_69481);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___69480,output_schema69471_69481,input_schema69472_69482,input_checker69473_69483,output_checker69474_69484){
return (function unwrap_schema_form_key(G__69475){var validate__13068__auto__ = ufv___69480.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___69485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69475], null);var temp__4126__auto___69486 = (function (){var G__69478 = args__13069__auto___69485;return (input_checker69473_69483.cljs$core$IFn$_invoke$arity$1 ? input_checker69473_69483.cljs$core$IFn$_invoke$arity$1(G__69478) : input_checker69473_69483.call(null,G__69478));
})();if(cljs.core.truth_(temp__4126__auto___69486))
{var error__13070__auto___69487 = temp__4126__auto___69486;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69487], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69472_69482,cljs.core.constant$keyword$1275,args__13069__auto___69485,cljs.core.constant$keyword$1318,error__13070__auto___69487], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var k = G__69475;while(true){
if(schema.core.specific_key_QMARK_(k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else
{if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___69488 = (function (){var G__69479 = o__13071__auto__;return (output_checker69474_69484.cljs$core$IFn$_invoke$arity$1 ? output_checker69474_69484.cljs$core$IFn$_invoke$arity$1(G__69479) : output_checker69474_69484.call(null,G__69479));
})();if(cljs.core.truth_(temp__4126__auto___69488))
{var error__13070__auto___69489 = temp__4126__auto___69488;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69489], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69471_69481,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69489], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69480,output_schema69471_69481,input_schema69472_69482,input_checker69473_69483,output_checker69474_69484))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema69471_69481,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69472_69482], null)));
var ufv___69499 = schema.utils.use_fn_validation;var output_schema69490_69500 = schema.core.Any;var input_schema69491_69501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker69492_69502 = schema.core.checker(input_schema69491_69501);var output_checker69493_69503 = schema.core.checker(output_schema69490_69500);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___69499,output_schema69490_69500,input_schema69491_69501,input_checker69492_69502,output_checker69493_69503){
return (function explicit_schema_key_map(G__69494){var validate__13068__auto__ = ufv___69499.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___69504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69494], null);var temp__4126__auto___69505 = (function (){var G__69497 = args__13069__auto___69504;return (input_checker69492_69502.cljs$core$IFn$_invoke$arity$1 ? input_checker69492_69502.cljs$core$IFn$_invoke$arity$1(G__69497) : input_checker69492_69502.call(null,G__69497));
})();if(cljs.core.truth_(temp__4126__auto___69505))
{var error__13070__auto___69506 = temp__4126__auto___69505;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69506], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69491_69501,cljs.core.constant$keyword$1275,args__13069__auto___69504,cljs.core.constant$keyword$1318,error__13070__auto___69506], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__69494;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___69507 = (function (){var G__69498 = o__13071__auto__;return (output_checker69493_69503.cljs$core$IFn$_invoke$arity$1 ? output_checker69493_69503.cljs$core$IFn$_invoke$arity$1(G__69498) : output_checker69493_69503.call(null,G__69498));
})();if(cljs.core.truth_(temp__4126__auto___69507))
{var error__13070__auto___69508 = temp__4126__auto___69507;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69508], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69490_69500,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69508], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69499,output_schema69490_69500,input_schema69491_69501,input_checker69492_69502,output_checker69493_69503))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema69490_69500,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69491_69501], null)));
var ufv___69518 = schema.utils.use_fn_validation;var output_schema69509_69519 = schema.core.Any;var input_schema69510_69520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker69511_69521 = schema.core.checker(input_schema69510_69520);var output_checker69512_69522 = schema.core.checker(output_schema69509_69519);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___69518,output_schema69509_69519,input_schema69510_69520,input_checker69511_69521,output_checker69512_69522){
return (function split_schema_keys(G__69513){var validate__13068__auto__ = ufv___69518.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___69523 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69513], null);var temp__4126__auto___69524 = (function (){var G__69516 = args__13069__auto___69523;return (input_checker69511_69521.cljs$core$IFn$_invoke$arity$1 ? input_checker69511_69521.cljs$core$IFn$_invoke$arity$1(G__69516) : input_checker69511_69521.call(null,G__69516));
})();if(cljs.core.truth_(temp__4126__auto___69524))
{var error__13070__auto___69525 = temp__4126__auto___69524;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69525], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69510_69520,cljs.core.constant$keyword$1275,args__13069__auto___69523,cljs.core.constant$keyword$1318,error__13070__auto___69525], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__69513;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___69526 = (function (){var G__69517 = o__13071__auto__;return (output_checker69512_69522.cljs$core$IFn$_invoke$arity$1 ? output_checker69512_69522.cljs$core$IFn$_invoke$arity$1(G__69517) : output_checker69512_69522.call(null,G__69517));
})();if(cljs.core.truth_(temp__4126__auto___69526))
{var error__13070__auto___69527 = temp__4126__auto___69526;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69527], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69509_69519,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69527], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69518,output_schema69509_69519,input_schema69510_69520,input_checker69511_69521,output_checker69512_69522))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema69509_69519,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69510_69520], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__69536){var vec__69537 = p__69536;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69537,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69537,(1),null);var pk = (function (){var G__69538 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__69538) : key_project.call(null,G__69538));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__69539 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69539,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69539,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69540 = ok;var G__69541 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__69540,G__69541) : key_combine.call(null,G__69540,G__69541));
})(),(function (){var G__69542 = ov;var G__69543 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__69542,G__69543) : val_combine.call(null,G__69542,G__69543));
})()], null));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__69544){
var key_project = cljs.core.first(arglist__69544);
arglist__69544 = cljs.core.next(arglist__69544);
var key_combine = cljs.core.first(arglist__69544);
arglist__69544 = cljs.core.next(arglist__69544);
var val_combine = cljs.core.first(arglist__69544);
var maps = cljs.core.rest(arglist__69544);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___69558 = schema.utils.use_fn_validation;var output_schema69546_69559 = plumbing.fnk.schema.InputSchema;var input_schema69547_69560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker69548_69561 = schema.core.checker(input_schema69547_69560);var output_checker69549_69562 = schema.core.checker(output_schema69546_69559);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562){
return (function union_input_schemata(G__69550,G__69551){var validate__13068__auto__ = ufv___69558.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___69563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69550,G__69551], null);var temp__4126__auto___69564 = (function (){var G__69556 = args__13069__auto___69563;return (input_checker69548_69561.cljs$core$IFn$_invoke$arity$1 ? input_checker69548_69561.cljs$core$IFn$_invoke$arity$1(G__69556) : input_checker69548_69561.call(null,G__69556));
})();if(cljs.core.truth_(temp__4126__auto___69564))
{var error__13070__auto___69565 = temp__4126__auto___69564;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69565], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69547_69560,cljs.core.constant$keyword$1275,args__13069__auto___69563,cljs.core.constant$keyword$1318,error__13070__auto___69565], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var i1 = G__69550;var i2 = G__69551;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__13068__auto__,ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562){
return (function (p1__69545_SHARP_){if(schema.core.specific_key_QMARK_(p1__69545_SHARP_))
{return schema.core.explicit_schema_key(p1__69545_SHARP_);
} else
{return cljs.core.constant$keyword$1342;
}
});})(validate__13068__auto__,ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562))
,((function (validate__13068__auto__,ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562){
return (function (k1,k2){if(schema.core.required_key_QMARK_(k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_(k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_(k1))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0))))));
}
return k1;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__13068__auto__,ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562))
,((function (validate__13068__auto__,ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__13068__auto__,ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___69566 = (function (){var G__69557 = o__13071__auto__;return (output_checker69549_69562.cljs$core$IFn$_invoke$arity$1 ? output_checker69549_69562.cljs$core$IFn$_invoke$arity$1(G__69557) : output_checker69549_69562.call(null,G__69557));
})();if(cljs.core.truth_(temp__4126__auto___69566))
{var error__13070__auto___69567 = temp__4126__auto___69566;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69567], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69546_69559,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69567], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69558,output_schema69546_69559,input_schema69547_69560,input_checker69548_69561,output_checker69549_69562))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema69546_69559,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69547_69560], null)));
var ufv___69577 = schema.utils.use_fn_validation;var output_schema69568_69578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema69569_69579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker69570_69580 = schema.core.checker(input_schema69569_69579);var output_checker69571_69581 = schema.core.checker(output_schema69568_69578);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___69577,output_schema69568_69578,input_schema69569_69579,input_checker69570_69580,output_checker69571_69581){
return (function required_toplevel_keys(G__69572){var validate__13068__auto__ = ufv___69577.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___69582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69572], null);var temp__4126__auto___69583 = (function (){var G__69575 = args__13069__auto___69582;return (input_checker69570_69580.cljs$core$IFn$_invoke$arity$1 ? input_checker69570_69580.cljs$core$IFn$_invoke$arity$1(G__69575) : input_checker69570_69580.call(null,G__69575));
})();if(cljs.core.truth_(temp__4126__auto___69583))
{var error__13070__auto___69584 = temp__4126__auto___69583;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69584], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69569_69579,cljs.core.constant$keyword$1275,args__13069__auto___69582,cljs.core.constant$keyword$1318,error__13070__auto___69584], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var input_schema = G__69572;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__13068__auto__,ufv___69577,output_schema69568_69578,input_schema69569_69579,input_checker69570_69580,output_checker69571_69581){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__13068__auto__,ufv___69577,output_schema69568_69578,input_schema69569_69579,input_checker69570_69580,output_checker69571_69581))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___69585 = (function (){var G__69576 = o__13071__auto__;return (output_checker69571_69581.cljs$core$IFn$_invoke$arity$1 ? output_checker69571_69581.cljs$core$IFn$_invoke$arity$1(G__69576) : output_checker69571_69581.call(null,G__69576));
})();if(cljs.core.truth_(temp__4126__auto___69585))
{var error__13070__auto___69586 = temp__4126__auto___69585;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69586], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69568_69578,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69586], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69577,output_schema69568_69578,input_schema69569_69579,input_checker69570_69580,output_checker69571_69581))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema69568_69578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69569_69579], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__69601(s__69602){return (new cljs.core.LazySeq(null,(function (){var s__69602__$1 = s__69602;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69602__$1);if(temp__4126__auto__)
{var s__69602__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69602__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69602__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69604 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69603 = (0);while(true){
if((i__69603 < size__4374__auto__))
{var vec__69609 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69603);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69609,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69609,(1),null);cljs.core.chunk_append(b__69604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__69611 = (i__69603 + (1));
i__69603 = G__69611;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69604),iter__69601(cljs.core.chunk_rest(s__69602__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69604),null);
}
} else
{var vec__69610 = cljs.core.first(s__69602__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69610,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69610,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__69601(cljs.core.rest(s__69602__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(expr);
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
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_(input_schema)))
{return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_(output_schema)))
{return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__69630(s__69631){return (new cljs.core.LazySeq(null,(function (){var s__69631__$1 = s__69631;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69631__$1);if(temp__4126__auto__)
{var s__69631__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69631__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69631__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69633 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69632 = (0);while(true){
if((i__69632 < size__4374__auto__))
{var vec__69638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69632);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69638,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69638,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__69633,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__69640 = (i__69632 + (1));
i__69632 = G__69640;
continue;
}
} else
{{
var G__69641 = (i__69632 + (1));
i__69632 = G__69641;
continue;
}
}
} else
{{
var G__69642 = (i__69632 + (1));
i__69632 = G__69642;
continue;
}
}
} else
{{
var G__69643 = (i__69632 + (1));
i__69632 = G__69643;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69633),iter__69630(cljs.core.chunk_rest(s__69631__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69633),null);
}
} else
{var vec__69639 = cljs.core.first(s__69631__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69639,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69639,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__69630(cljs.core.rest(s__69631__$2)));
} else
{{
var G__69644 = cljs.core.rest(s__69631__$2);
s__69631__$1 = G__69644;
continue;
}
}
} else
{{
var G__69645 = cljs.core.rest(s__69631__$2);
s__69631__$1 = G__69645;
continue;
}
}
} else
{{
var G__69646 = cljs.core.rest(s__69631__$2);
s__69631__$1 = G__69646;
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
});return iter__4375__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1318,cljs.core.constant$keyword$1344,cljs.core.constant$keyword$1343,fails], null));
} else
{return null;
}
});
var ufv___69673 = schema.utils.use_fn_validation;var output_schema69647_69674 = schema.core.Any;var input_schema69648_69675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker69649_69676 = schema.core.checker(input_schema69648_69675);var output_checker69650_69677 = schema.core.checker(output_schema69647_69674);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___69673,output_schema69647_69674,input_schema69648_69675,input_checker69649_69676,output_checker69650_69677){
return (function compose_schemata(G__69651,G__69652){var validate__13068__auto__ = true;if(validate__13068__auto__)
{var args__13069__auto___69678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69651,G__69652], null);var temp__4126__auto___69679 = (function (){var G__69663 = args__13069__auto___69678;return (input_checker69649_69676.cljs$core$IFn$_invoke$arity$1 ? input_checker69649_69676.cljs$core$IFn$_invoke$arity$1(G__69663) : input_checker69649_69676.call(null,G__69663));
})();if(cljs.core.truth_(temp__4126__auto___69679))
{var error__13070__auto___69680 = temp__4126__auto___69679;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69680], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69648_69675,cljs.core.constant$keyword$1275,args__13069__auto___69678,cljs.core.constant$keyword$1318,error__13070__auto___69680], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__69666 = G__69651;var vec__69668 = G__69666;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69668,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69668,(1),null);var G__69667 = G__69652;var vec__69669 = G__69667;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69669,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69669,(1),null);var G__69666__$1 = G__69666;var G__69667__$1 = G__69667;while(true){
var vec__69670 = G__69666__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69670,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69670,(1),null);var vec__69671 = G__69667__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69671,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69671,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13068__auto__)
{var temp__4126__auto___69681 = (function (){var G__69672 = o__13071__auto__;return (output_checker69650_69677.cljs$core$IFn$_invoke$arity$1 ? output_checker69650_69677.cljs$core$IFn$_invoke$arity$1(G__69672) : output_checker69650_69677.call(null,G__69672));
})();if(cljs.core.truth_(temp__4126__auto___69681))
{var error__13070__auto___69682 = temp__4126__auto___69681;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69682], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69647_69674,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69682], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69673,output_schema69647_69674,input_schema69648_69675,input_checker69649_69676,output_checker69650_69677))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema69647_69674,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69648_69675], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_(m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k)))
{return schema.core.optional_key(k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___69785 = schema.utils.use_fn_validation;var output_schema69683_69786 = schema.core.Any;var input_schema69684_69787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker69685_69788 = schema.core.checker(input_schema69684_69787);var output_checker69686_69789 = schema.core.checker(output_schema69683_69786);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789){
return (function split_schema(G__69687,G__69688){var validate__13068__auto__ = ufv___69785.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___69790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69687,G__69688], null);var temp__4126__auto___69791 = (function (){var G__69737 = args__13069__auto___69790;return (input_checker69685_69788.cljs$core$IFn$_invoke$arity$1 ? input_checker69685_69788.cljs$core$IFn$_invoke$arity$1(G__69737) : input_checker69685_69788.call(null,G__69737));
})();if(cljs.core.truth_(temp__4126__auto___69791))
{var error__13070__auto___69792 = temp__4126__auto___69791;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69792], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69684_69787,cljs.core.constant$keyword$1275,args__13069__auto___69790,cljs.core.constant$keyword$1318,error__13070__auto___69792], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__69687;var ks = G__69688;while(true){
var ks__$1 = cljs.core.set(ks);var iter__4375__auto__ = ((function (ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789){
return (function iter__69738(s__69739){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789){
return (function (){var s__69739__$1 = s__69739;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69739__$1);if(temp__4126__auto__)
{var s__69739__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69739__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69739__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69741 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69740 = (0);while(true){
if((i__69740 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69740);cljs.core.chunk_append(b__69741,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__69740,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69741,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789){
return (function iter__69764(s__69765){return (new cljs.core.LazySeq(null,((function (i__69740,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69741,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789){
return (function (){var s__69765__$1 = s__69765;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__69765__$1);if(temp__4126__auto____$1)
{var s__69765__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__69765__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first(s__69765__$2);var size__4374__auto____$1 = cljs.core.count(c__4373__auto____$1);var b__69767 = cljs.core.chunk_buffer(size__4374__auto____$1);if((function (){var i__69766 = (0);while(true){
if((i__69766 < size__4374__auto____$1))
{var vec__69772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto____$1,i__69766);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69772,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69772,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__69767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__69793 = (i__69766 + (1));
i__69766 = G__69793;
continue;
}
} else
{{
var G__69794 = (i__69766 + (1));
i__69766 = G__69794;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69767),iter__69764(cljs.core.chunk_rest(s__69765__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69767),null);
}
} else
{var vec__69773 = cljs.core.first(s__69765__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69773,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69773,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__69764(cljs.core.rest(s__69765__$2)));
} else
{{
var G__69795 = cljs.core.rest(s__69765__$2);
s__69765__$1 = G__69795;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__69740,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69741,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789))
,null,null));
});})(i__69740,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69741,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789))
;return iter__4375__auto__(s);
})()));
{
var G__69796 = (i__69740 + (1));
i__69740 = G__69796;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69741),iter__69738(cljs.core.chunk_rest(s__69739__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69741),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__69739__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789){
return (function iter__69774(s__69775){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789){
return (function (){var s__69775__$1 = s__69775;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__69775__$1);if(temp__4126__auto____$1)
{var s__69775__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__69775__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69775__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69777 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69776 = (0);while(true){
if((i__69776 < size__4374__auto__))
{var vec__69782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69776);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69782,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69782,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__69777,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__69797 = (i__69776 + (1));
i__69776 = G__69797;
continue;
}
} else
{{
var G__69798 = (i__69776 + (1));
i__69776 = G__69798;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69777),iter__69774(cljs.core.chunk_rest(s__69775__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69777),null);
}
} else
{var vec__69783 = cljs.core.first(s__69775__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69783,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69783,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__69774(cljs.core.rest(s__69775__$2)));
} else
{{
var G__69799 = cljs.core.rest(s__69775__$2);
s__69775__$1 = G__69799;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789))
,null,null));
});})(in_QMARK_,s__69739__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789))
;return iter__4375__auto__(s);
})()),iter__69738(cljs.core.rest(s__69739__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789))
,null,null));
});})(ks__$1,validate__13068__auto__,ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789))
;return iter__4375__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___69800 = (function (){var G__69784 = o__13071__auto__;return (output_checker69686_69789.cljs$core$IFn$_invoke$arity$1 ? output_checker69686_69789.cljs$core$IFn$_invoke$arity$1(G__69784) : output_checker69686_69789.call(null,G__69784));
})();if(cljs.core.truth_(temp__4126__auto___69800))
{var error__13070__auto___69801 = temp__4126__auto___69800;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69801], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69683_69786,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69801], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69785,output_schema69683_69786,input_schema69684_69787,input_checker69685_69788,output_checker69686_69789))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema69683_69786,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69684_69787], null)));
var ufv___69836 = schema.utils.use_fn_validation;var output_schema69802_69837 = plumbing.fnk.schema.GraphIOSchemata;var input_schema69803_69838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker69804_69839 = schema.core.checker(input_schema69803_69838);var output_checker69805_69840 = schema.core.checker(output_schema69802_69837);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___69836,output_schema69802_69837,input_schema69803_69838,input_checker69804_69839,output_checker69805_69840){
return (function sequence_schemata(G__69806,G__69807){var validate__13068__auto__ = ufv___69836.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___69841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69806,G__69807], null);var temp__4126__auto___69842 = (function (){var G__69822 = args__13069__auto___69841;return (input_checker69804_69839.cljs$core$IFn$_invoke$arity$1 ? input_checker69804_69839.cljs$core$IFn$_invoke$arity$1(G__69822) : input_checker69804_69839.call(null,G__69822));
})();if(cljs.core.truth_(temp__4126__auto___69842))
{var error__13070__auto___69843 = temp__4126__auto___69842;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69843], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,input_schema69803_69838,cljs.core.constant$keyword$1275,args__13069__auto___69841,cljs.core.constant$keyword$1318,error__13070__auto___69843], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__69826 = G__69806;var vec__69828 = G__69826;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69828,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69828,(1),null);var G__69827 = G__69807;var vec__69829 = G__69827;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69829,(0),null);var vec__69830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69829,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69830,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69830,(1),null);var G__69826__$1 = G__69826;var G__69827__$1 = G__69827;while(true){
var vec__69831 = G__69826__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69831,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69831,(1),null);var vec__69832 = G__69827__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69832,(0),null);var vec__69833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69832,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69833,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69833,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}
var vec__69834 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69834,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69834,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___69844 = (function (){var G__69835 = o__13071__auto__;return (output_checker69805_69840.cljs$core$IFn$_invoke$arity$1 ? output_checker69805_69840.cljs$core$IFn$_invoke$arity$1(G__69835) : output_checker69805_69840.call(null,G__69835));
})();if(cljs.core.truth_(temp__4126__auto___69844))
{var error__13070__auto___69845 = temp__4126__auto___69844;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13070__auto___69845], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1319,output_schema69802_69837,cljs.core.constant$keyword$1275,o__13071__auto__,cljs.core.constant$keyword$1318,error__13070__auto___69845], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___69836,output_schema69802_69837,input_schema69803_69838,input_checker69804_69839,output_checker69805_69840))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema69802_69837,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69803_69838], null)));
