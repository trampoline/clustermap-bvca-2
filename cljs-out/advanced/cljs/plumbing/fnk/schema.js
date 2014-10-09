// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$995,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$997,(function (p1__10547__10548__auto__){var G__52385 = p1__10547__10548__auto__;if(G__52385)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__52385.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__52385.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52385);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52385);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52386_SHARP_){return (cljs.core.val(p1__52386_SHARP_) > (1));
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
var vec__52388 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52388,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52388,(1),null);var p = vec__52388;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$987,cljs.core.constant$keyword$1012,cljs.core.constant$keyword$1010,k,cljs.core.constant$keyword$1011,m], null));
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
var ufv___52394 = schema.utils.use_fn_validation;var output_schema52389_52395 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema52390_52396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker52391_52397 = schema.core.checker(input_schema52390_52396);var output_checker52392_52398 = schema.core.checker(output_schema52389_52395);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___52394,output_schema52389_52395,input_schema52390_52396,input_checker52391_52397,output_checker52392_52398){
return (function unwrap_schema_form_key(G__52393){var validate__10517__auto__ = ufv___52394.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52393], null);var temp__4126__auto___52400 = (input_checker52391_52397.cljs$core$IFn$_invoke$arity$1 ? input_checker52391_52397.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52399) : input_checker52391_52397.call(null,args__10518__auto___52399));if(cljs.core.truth_(temp__4126__auto___52400))
{var error__10519__auto___52401 = temp__4126__auto___52400;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52401], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52390_52396,cljs.core.constant$keyword$989,args__10518__auto___52399,cljs.core.constant$keyword$987,error__10519__auto___52401], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__52393;while(true){
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
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52402 = (output_checker52392_52398.cljs$core$IFn$_invoke$arity$1 ? output_checker52392_52398.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52392_52398.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52402))
{var error__10519__auto___52403 = temp__4126__auto___52402;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52403], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52389_52395,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52403], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52394,output_schema52389_52395,input_schema52390_52396,input_checker52391_52397,output_checker52392_52398))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema52389_52395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52390_52396], null)));
var ufv___52409 = schema.utils.use_fn_validation;var output_schema52404_52410 = schema.core.Any;var input_schema52405_52411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52406_52412 = schema.core.checker(input_schema52405_52411);var output_checker52407_52413 = schema.core.checker(output_schema52404_52410);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___52409,output_schema52404_52410,input_schema52405_52411,input_checker52406_52412,output_checker52407_52413){
return (function explicit_schema_key_map(G__52408){var validate__10517__auto__ = ufv___52409.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52408], null);var temp__4126__auto___52415 = (input_checker52406_52412.cljs$core$IFn$_invoke$arity$1 ? input_checker52406_52412.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52414) : input_checker52406_52412.call(null,args__10518__auto___52414));if(cljs.core.truth_(temp__4126__auto___52415))
{var error__10519__auto___52416 = temp__4126__auto___52415;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52416], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52405_52411,cljs.core.constant$keyword$989,args__10518__auto___52414,cljs.core.constant$keyword$987,error__10519__auto___52416], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52408;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52417 = (output_checker52407_52413.cljs$core$IFn$_invoke$arity$1 ? output_checker52407_52413.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52407_52413.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52417))
{var error__10519__auto___52418 = temp__4126__auto___52417;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52418], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52404_52410,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52418], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52409,output_schema52404_52410,input_schema52405_52411,input_checker52406_52412,output_checker52407_52413))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema52404_52410,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52405_52411], null)));
var ufv___52424 = schema.utils.use_fn_validation;var output_schema52419_52425 = schema.core.Any;var input_schema52420_52426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52421_52427 = schema.core.checker(input_schema52420_52426);var output_checker52422_52428 = schema.core.checker(output_schema52419_52425);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___52424,output_schema52419_52425,input_schema52420_52426,input_checker52421_52427,output_checker52422_52428){
return (function split_schema_keys(G__52423){var validate__10517__auto__ = ufv___52424.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52423], null);var temp__4126__auto___52430 = (input_checker52421_52427.cljs$core$IFn$_invoke$arity$1 ? input_checker52421_52427.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52429) : input_checker52421_52427.call(null,args__10518__auto___52429));if(cljs.core.truth_(temp__4126__auto___52430))
{var error__10519__auto___52431 = temp__4126__auto___52430;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52431], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52420_52426,cljs.core.constant$keyword$989,args__10518__auto___52429,cljs.core.constant$keyword$987,error__10519__auto___52431], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52423;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52432 = (output_checker52422_52428.cljs$core$IFn$_invoke$arity$1 ? output_checker52422_52428.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52422_52428.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52432))
{var error__10519__auto___52433 = temp__4126__auto___52432;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52433], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52419_52425,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52433], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52424,output_schema52419_52425,input_schema52420_52426,input_checker52421_52427,output_checker52422_52428))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema52419_52425,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52420_52426], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52437){var vec__52438 = p__52437;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52438,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52438,(1),null);var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__52439 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52439,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52439,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__52440){
var key_project = cljs.core.first(arglist__52440);
arglist__52440 = cljs.core.next(arglist__52440);
var key_combine = cljs.core.first(arglist__52440);
arglist__52440 = cljs.core.next(arglist__52440);
var val_combine = cljs.core.first(arglist__52440);
var maps = cljs.core.rest(arglist__52440);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___52448 = schema.utils.use_fn_validation;var output_schema52442_52449 = plumbing.fnk.schema.InputSchema;var input_schema52443_52450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker52444_52451 = schema.core.checker(input_schema52443_52450);var output_checker52445_52452 = schema.core.checker(output_schema52442_52449);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452){
return (function union_input_schemata(G__52446,G__52447){var validate__10517__auto__ = ufv___52448.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52446,G__52447], null);var temp__4126__auto___52454 = (input_checker52444_52451.cljs$core$IFn$_invoke$arity$1 ? input_checker52444_52451.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52453) : input_checker52444_52451.call(null,args__10518__auto___52453));if(cljs.core.truth_(temp__4126__auto___52454))
{var error__10519__auto___52455 = temp__4126__auto___52454;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52455], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52443_52450,cljs.core.constant$keyword$989,args__10518__auto___52453,cljs.core.constant$keyword$987,error__10519__auto___52455], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__52446;var i2 = G__52447;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10517__auto__,ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452){
return (function (p1__52441_SHARP_){if(schema.core.specific_key_QMARK_(p1__52441_SHARP_))
{return schema.core.explicit_schema_key(p1__52441_SHARP_);
} else
{return cljs.core.constant$keyword$1014;
}
});})(validate__10517__auto__,ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452))
,((function (validate__10517__auto__,ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452){
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
});})(validate__10517__auto__,ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452))
,((function (validate__10517__auto__,ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10517__auto__,ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52456 = (output_checker52445_52452.cljs$core$IFn$_invoke$arity$1 ? output_checker52445_52452.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52445_52452.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52456))
{var error__10519__auto___52457 = temp__4126__auto___52456;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52457], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52442_52449,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52457], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52448,output_schema52442_52449,input_schema52443_52450,input_checker52444_52451,output_checker52445_52452))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema52442_52449,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52443_52450], null)));
var ufv___52463 = schema.utils.use_fn_validation;var output_schema52458_52464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema52459_52465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker52460_52466 = schema.core.checker(input_schema52459_52465);var output_checker52461_52467 = schema.core.checker(output_schema52458_52464);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___52463,output_schema52458_52464,input_schema52459_52465,input_checker52460_52466,output_checker52461_52467){
return (function required_toplevel_keys(G__52462){var validate__10517__auto__ = ufv___52463.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52462], null);var temp__4126__auto___52469 = (input_checker52460_52466.cljs$core$IFn$_invoke$arity$1 ? input_checker52460_52466.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52468) : input_checker52460_52466.call(null,args__10518__auto___52468));if(cljs.core.truth_(temp__4126__auto___52469))
{var error__10519__auto___52470 = temp__4126__auto___52469;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52470], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52459_52465,cljs.core.constant$keyword$989,args__10518__auto___52468,cljs.core.constant$keyword$987,error__10519__auto___52470], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__52462;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10517__auto__,ufv___52463,output_schema52458_52464,input_schema52459_52465,input_checker52460_52466,output_checker52461_52467){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___52463,output_schema52458_52464,input_schema52459_52465,input_checker52460_52466,output_checker52461_52467))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52471 = (output_checker52461_52467.cljs$core$IFn$_invoke$arity$1 ? output_checker52461_52467.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52461_52467.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52471))
{var error__10519__auto___52472 = temp__4126__auto___52471;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52472], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52458_52464,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52472], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52463,output_schema52458_52464,input_schema52459_52465,input_checker52460_52466,output_checker52461_52467))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema52458_52464,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52459_52465], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__52481(s__52482){return (new cljs.core.LazySeq(null,(function (){var s__52482__$1 = s__52482;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52482__$1);if(temp__4126__auto__)
{var s__52482__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52482__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52482__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52484 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52483 = (0);while(true){
if((i__52483 < size__4282__auto__))
{var vec__52487 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52483);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52487,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52487,(1),null);cljs.core.chunk_append(b__52484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__52489 = (i__52483 + (1));
i__52483 = G__52489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52484),iter__52481(cljs.core.chunk_rest(s__52482__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52484),null);
}
} else
{var vec__52488 = cljs.core.first(s__52482__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52488,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52488,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__52481(cljs.core.rest(s__52482__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__52498(s__52499){return (new cljs.core.LazySeq(null,(function (){var s__52499__$1 = s__52499;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52499__$1);if(temp__4126__auto__)
{var s__52499__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52499__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52499__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52501 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52500 = (0);while(true){
if((i__52500 < size__4282__auto__))
{var vec__52504 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52500);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52504,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52504,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__52501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__52506 = (i__52500 + (1));
i__52500 = G__52506;
continue;
}
} else
{{
var G__52507 = (i__52500 + (1));
i__52500 = G__52507;
continue;
}
}
} else
{{
var G__52508 = (i__52500 + (1));
i__52500 = G__52508;
continue;
}
}
} else
{{
var G__52509 = (i__52500 + (1));
i__52500 = G__52509;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52501),iter__52498(cljs.core.chunk_rest(s__52499__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52501),null);
}
} else
{var vec__52505 = cljs.core.first(s__52499__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52505,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52505,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__52498(cljs.core.rest(s__52499__$2)));
} else
{{
var G__52510 = cljs.core.rest(s__52499__$2);
s__52499__$1 = G__52510;
continue;
}
}
} else
{{
var G__52511 = cljs.core.rest(s__52499__$2);
s__52499__$1 = G__52511;
continue;
}
}
} else
{{
var G__52512 = cljs.core.rest(s__52499__$2);
s__52499__$1 = G__52512;
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
});return iter__4283__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$987,cljs.core.constant$keyword$1016,cljs.core.constant$keyword$1015,fails], null));
} else
{return null;
}
});
var ufv___52535 = schema.utils.use_fn_validation;var output_schema52513_52536 = schema.core.Any;var input_schema52514_52537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker52515_52538 = schema.core.checker(input_schema52514_52537);var output_checker52516_52539 = schema.core.checker(output_schema52513_52536);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___52535,output_schema52513_52536,input_schema52514_52537,input_checker52515_52538,output_checker52516_52539){
return (function compose_schemata(G__52517,G__52518){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___52540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52517,G__52518], null);var temp__4126__auto___52541 = (input_checker52515_52538.cljs$core$IFn$_invoke$arity$1 ? input_checker52515_52538.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52540) : input_checker52515_52538.call(null,args__10518__auto___52540));if(cljs.core.truth_(temp__4126__auto___52541))
{var error__10519__auto___52542 = temp__4126__auto___52541;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52542], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52514_52537,cljs.core.constant$keyword$989,args__10518__auto___52540,cljs.core.constant$keyword$987,error__10519__auto___52542], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__52529 = G__52517;var vec__52531 = G__52529;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52531,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52531,(1),null);var G__52530 = G__52518;var vec__52532 = G__52530;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52532,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52532,(1),null);var G__52529__$1 = G__52529;var G__52530__$1 = G__52530;while(true){
var vec__52533 = G__52529__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52533,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52533,(1),null);var vec__52534 = G__52530__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52534,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52534,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___52543 = (output_checker52516_52539.cljs$core$IFn$_invoke$arity$1 ? output_checker52516_52539.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52516_52539.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52543))
{var error__10519__auto___52544 = temp__4126__auto___52543;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52544], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52513_52536,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52544], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52535,output_schema52513_52536,input_schema52514_52537,input_checker52515_52538,output_checker52516_52539))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema52513_52536,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52514_52537], null)));
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
var ufv___52623 = schema.utils.use_fn_validation;var output_schema52545_52624 = schema.core.Any;var input_schema52546_52625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker52547_52626 = schema.core.checker(input_schema52546_52625);var output_checker52548_52627 = schema.core.checker(output_schema52545_52624);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627){
return (function split_schema(G__52549,G__52550){var validate__10517__auto__ = ufv___52623.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52549,G__52550], null);var temp__4126__auto___52629 = (input_checker52547_52626.cljs$core$IFn$_invoke$arity$1 ? input_checker52547_52626.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52628) : input_checker52547_52626.call(null,args__10518__auto___52628));if(cljs.core.truth_(temp__4126__auto___52629))
{var error__10519__auto___52630 = temp__4126__auto___52629;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52630], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52546_52625,cljs.core.constant$keyword$989,args__10518__auto___52628,cljs.core.constant$keyword$987,error__10519__auto___52630], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52549;var ks = G__52550;while(true){
var ks__$1 = cljs.core.set(ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627){
return (function iter__52587(s__52588){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627){
return (function (){var s__52588__$1 = s__52588;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52588__$1);if(temp__4126__auto__)
{var s__52588__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52588__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52588__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52590 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52589 = (0);while(true){
if((i__52589 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52589);cljs.core.chunk_append(b__52590,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__52589,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52590,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627){
return (function iter__52607(s__52608){return (new cljs.core.LazySeq(null,((function (i__52589,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52590,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627){
return (function (){var s__52608__$1 = s__52608;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__52608__$1);if(temp__4126__auto____$1)
{var s__52608__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__52608__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__52608__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__52610 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__52609 = (0);while(true){
if((i__52609 < size__4282__auto____$1))
{var vec__52613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__52609);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52613,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52613,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__52610,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__52631 = (i__52609 + (1));
i__52609 = G__52631;
continue;
}
} else
{{
var G__52632 = (i__52609 + (1));
i__52609 = G__52632;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52610),iter__52607(cljs.core.chunk_rest(s__52608__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52610),null);
}
} else
{var vec__52614 = cljs.core.first(s__52608__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__52607(cljs.core.rest(s__52608__$2)));
} else
{{
var G__52633 = cljs.core.rest(s__52608__$2);
s__52608__$1 = G__52633;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__52589,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52590,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627))
,null,null));
});})(i__52589,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52590,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627))
;return iter__4283__auto__(s);
})()));
{
var G__52634 = (i__52589 + (1));
i__52589 = G__52634;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52590),iter__52587(cljs.core.chunk_rest(s__52588__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52590),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__52588__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627){
return (function iter__52615(s__52616){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627){
return (function (){var s__52616__$1 = s__52616;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__52616__$1);if(temp__4126__auto____$1)
{var s__52616__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__52616__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52616__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52618 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52617 = (0);while(true){
if((i__52617 < size__4282__auto__))
{var vec__52621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52617);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__52618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__52635 = (i__52617 + (1));
i__52617 = G__52635;
continue;
}
} else
{{
var G__52636 = (i__52617 + (1));
i__52617 = G__52636;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52618),iter__52615(cljs.core.chunk_rest(s__52616__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52618),null);
}
} else
{var vec__52622 = cljs.core.first(s__52616__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52622,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52622,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__52615(cljs.core.rest(s__52616__$2)));
} else
{{
var G__52637 = cljs.core.rest(s__52616__$2);
s__52616__$1 = G__52637;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627))
,null,null));
});})(in_QMARK_,s__52588__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627))
;return iter__4283__auto__(s);
})()),iter__52587(cljs.core.rest(s__52588__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627))
;return iter__4283__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52638 = (output_checker52548_52627.cljs$core$IFn$_invoke$arity$1 ? output_checker52548_52627.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52548_52627.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52638))
{var error__10519__auto___52639 = temp__4126__auto___52638;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52639], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52545_52624,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52639], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52623,output_schema52545_52624,input_schema52546_52625,input_checker52547_52626,output_checker52548_52627))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema52545_52624,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52546_52625], null)));
var ufv___52670 = schema.utils.use_fn_validation;var output_schema52640_52671 = plumbing.fnk.schema.GraphIOSchemata;var input_schema52641_52672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker52642_52673 = schema.core.checker(input_schema52641_52672);var output_checker52643_52674 = schema.core.checker(output_schema52640_52671);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___52670,output_schema52640_52671,input_schema52641_52672,input_checker52642_52673,output_checker52643_52674){
return (function sequence_schemata(G__52644,G__52645){var validate__10517__auto__ = ufv___52670.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52644,G__52645], null);var temp__4126__auto___52676 = (input_checker52642_52673.cljs$core$IFn$_invoke$arity$1 ? input_checker52642_52673.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52675) : input_checker52642_52673.call(null,args__10518__auto___52675));if(cljs.core.truth_(temp__4126__auto___52676))
{var error__10519__auto___52677 = temp__4126__auto___52676;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52677], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,input_schema52641_52672,cljs.core.constant$keyword$989,args__10518__auto___52675,cljs.core.constant$keyword$987,error__10519__auto___52677], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__52661 = G__52644;var vec__52663 = G__52661;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52663,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52663,(1),null);var G__52662 = G__52645;var vec__52664 = G__52662;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52664,(0),null);var vec__52665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52664,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52665,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52665,(1),null);var G__52661__$1 = G__52661;var G__52662__$1 = G__52662;while(true){
var vec__52666 = G__52661__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52666,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52666,(1),null);var vec__52667 = G__52662__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52667,(0),null);var vec__52668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52667,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52668,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52668,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__52669 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52669,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52669,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52678 = (output_checker52643_52674.cljs$core$IFn$_invoke$arity$1 ? output_checker52643_52674.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52643_52674.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52678))
{var error__10519__auto___52679 = temp__4126__auto___52678;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52679], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$988,output_schema52640_52671,cljs.core.constant$keyword$989,o__10520__auto__,cljs.core.constant$keyword$987,error__10519__auto___52679], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52670,output_schema52640_52671,input_schema52641_52672,input_checker52642_52673,output_checker52643_52674))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema52640_52671,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52641_52672], null)));
