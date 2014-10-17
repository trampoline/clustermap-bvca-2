// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1153,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$1155,(function (p1__10547__10548__auto__){var G__52800 = p1__10547__10548__auto__;if(G__52800)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__52800.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__52800.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52800);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52800);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52801_SHARP_){return (cljs.core.val(p1__52801_SHARP_) > (1));
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
var vec__52803 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52803,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52803,(1),null);var p = vec__52803;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1145,cljs.core.constant$keyword$1170,cljs.core.constant$keyword$1168,k,cljs.core.constant$keyword$1169,m], null));
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
var ufv___52809 = schema.utils.use_fn_validation;var output_schema52804_52810 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema52805_52811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker52806_52812 = schema.core.checker(input_schema52805_52811);var output_checker52807_52813 = schema.core.checker(output_schema52804_52810);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___52809,output_schema52804_52810,input_schema52805_52811,input_checker52806_52812,output_checker52807_52813){
return (function unwrap_schema_form_key(G__52808){var validate__10517__auto__ = ufv___52809.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52808], null);var temp__4126__auto___52815 = (input_checker52806_52812.cljs$core$IFn$_invoke$arity$1 ? input_checker52806_52812.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52814) : input_checker52806_52812.call(null,args__10518__auto___52814));if(cljs.core.truth_(temp__4126__auto___52815))
{var error__10519__auto___52816 = temp__4126__auto___52815;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52816], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52805_52811,cljs.core.constant$keyword$1147,args__10518__auto___52814,cljs.core.constant$keyword$1145,error__10519__auto___52816], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__52808;while(true){
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
{var temp__4126__auto___52817 = (output_checker52807_52813.cljs$core$IFn$_invoke$arity$1 ? output_checker52807_52813.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52807_52813.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52817))
{var error__10519__auto___52818 = temp__4126__auto___52817;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52818], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52804_52810,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52818], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52809,output_schema52804_52810,input_schema52805_52811,input_checker52806_52812,output_checker52807_52813))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema52804_52810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52805_52811], null)));
var ufv___52824 = schema.utils.use_fn_validation;var output_schema52819_52825 = schema.core.Any;var input_schema52820_52826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52821_52827 = schema.core.checker(input_schema52820_52826);var output_checker52822_52828 = schema.core.checker(output_schema52819_52825);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___52824,output_schema52819_52825,input_schema52820_52826,input_checker52821_52827,output_checker52822_52828){
return (function explicit_schema_key_map(G__52823){var validate__10517__auto__ = ufv___52824.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52823], null);var temp__4126__auto___52830 = (input_checker52821_52827.cljs$core$IFn$_invoke$arity$1 ? input_checker52821_52827.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52829) : input_checker52821_52827.call(null,args__10518__auto___52829));if(cljs.core.truth_(temp__4126__auto___52830))
{var error__10519__auto___52831 = temp__4126__auto___52830;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52831], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52820_52826,cljs.core.constant$keyword$1147,args__10518__auto___52829,cljs.core.constant$keyword$1145,error__10519__auto___52831], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52823;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52832 = (output_checker52822_52828.cljs$core$IFn$_invoke$arity$1 ? output_checker52822_52828.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52822_52828.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52832))
{var error__10519__auto___52833 = temp__4126__auto___52832;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52833], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52819_52825,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52833], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52824,output_schema52819_52825,input_schema52820_52826,input_checker52821_52827,output_checker52822_52828))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema52819_52825,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52820_52826], null)));
var ufv___52839 = schema.utils.use_fn_validation;var output_schema52834_52840 = schema.core.Any;var input_schema52835_52841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52836_52842 = schema.core.checker(input_schema52835_52841);var output_checker52837_52843 = schema.core.checker(output_schema52834_52840);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___52839,output_schema52834_52840,input_schema52835_52841,input_checker52836_52842,output_checker52837_52843){
return (function split_schema_keys(G__52838){var validate__10517__auto__ = ufv___52839.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52838], null);var temp__4126__auto___52845 = (input_checker52836_52842.cljs$core$IFn$_invoke$arity$1 ? input_checker52836_52842.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52844) : input_checker52836_52842.call(null,args__10518__auto___52844));if(cljs.core.truth_(temp__4126__auto___52845))
{var error__10519__auto___52846 = temp__4126__auto___52845;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52846], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52835_52841,cljs.core.constant$keyword$1147,args__10518__auto___52844,cljs.core.constant$keyword$1145,error__10519__auto___52846], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52838;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52847 = (output_checker52837_52843.cljs$core$IFn$_invoke$arity$1 ? output_checker52837_52843.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52837_52843.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52847))
{var error__10519__auto___52848 = temp__4126__auto___52847;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52848], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52834_52840,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52848], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52839,output_schema52834_52840,input_schema52835_52841,input_checker52836_52842,output_checker52837_52843))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema52834_52840,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52835_52841], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52852){var vec__52853 = p__52852;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52853,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52853,(1),null);var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__52854 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52854,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52854,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__52855){
var key_project = cljs.core.first(arglist__52855);
arglist__52855 = cljs.core.next(arglist__52855);
var key_combine = cljs.core.first(arglist__52855);
arglist__52855 = cljs.core.next(arglist__52855);
var val_combine = cljs.core.first(arglist__52855);
var maps = cljs.core.rest(arglist__52855);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___52863 = schema.utils.use_fn_validation;var output_schema52857_52864 = plumbing.fnk.schema.InputSchema;var input_schema52858_52865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker52859_52866 = schema.core.checker(input_schema52858_52865);var output_checker52860_52867 = schema.core.checker(output_schema52857_52864);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867){
return (function union_input_schemata(G__52861,G__52862){var validate__10517__auto__ = ufv___52863.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52861,G__52862], null);var temp__4126__auto___52869 = (input_checker52859_52866.cljs$core$IFn$_invoke$arity$1 ? input_checker52859_52866.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52868) : input_checker52859_52866.call(null,args__10518__auto___52868));if(cljs.core.truth_(temp__4126__auto___52869))
{var error__10519__auto___52870 = temp__4126__auto___52869;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52870], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52858_52865,cljs.core.constant$keyword$1147,args__10518__auto___52868,cljs.core.constant$keyword$1145,error__10519__auto___52870], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__52861;var i2 = G__52862;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10517__auto__,ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867){
return (function (p1__52856_SHARP_){if(schema.core.specific_key_QMARK_(p1__52856_SHARP_))
{return schema.core.explicit_schema_key(p1__52856_SHARP_);
} else
{return cljs.core.constant$keyword$1172;
}
});})(validate__10517__auto__,ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867))
,((function (validate__10517__auto__,ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867){
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
});})(validate__10517__auto__,ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867))
,((function (validate__10517__auto__,ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10517__auto__,ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52871 = (output_checker52860_52867.cljs$core$IFn$_invoke$arity$1 ? output_checker52860_52867.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52860_52867.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52871))
{var error__10519__auto___52872 = temp__4126__auto___52871;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52872], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52857_52864,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52872], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52863,output_schema52857_52864,input_schema52858_52865,input_checker52859_52866,output_checker52860_52867))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema52857_52864,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52858_52865], null)));
var ufv___52878 = schema.utils.use_fn_validation;var output_schema52873_52879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema52874_52880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker52875_52881 = schema.core.checker(input_schema52874_52880);var output_checker52876_52882 = schema.core.checker(output_schema52873_52879);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___52878,output_schema52873_52879,input_schema52874_52880,input_checker52875_52881,output_checker52876_52882){
return (function required_toplevel_keys(G__52877){var validate__10517__auto__ = ufv___52878.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52877], null);var temp__4126__auto___52884 = (input_checker52875_52881.cljs$core$IFn$_invoke$arity$1 ? input_checker52875_52881.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52883) : input_checker52875_52881.call(null,args__10518__auto___52883));if(cljs.core.truth_(temp__4126__auto___52884))
{var error__10519__auto___52885 = temp__4126__auto___52884;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52885], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52874_52880,cljs.core.constant$keyword$1147,args__10518__auto___52883,cljs.core.constant$keyword$1145,error__10519__auto___52885], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__52877;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10517__auto__,ufv___52878,output_schema52873_52879,input_schema52874_52880,input_checker52875_52881,output_checker52876_52882){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___52878,output_schema52873_52879,input_schema52874_52880,input_checker52875_52881,output_checker52876_52882))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52886 = (output_checker52876_52882.cljs$core$IFn$_invoke$arity$1 ? output_checker52876_52882.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52876_52882.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52886))
{var error__10519__auto___52887 = temp__4126__auto___52886;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52887], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52873_52879,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52887], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52878,output_schema52873_52879,input_schema52874_52880,input_checker52875_52881,output_checker52876_52882))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema52873_52879,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52874_52880], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__52896(s__52897){return (new cljs.core.LazySeq(null,(function (){var s__52897__$1 = s__52897;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52897__$1);if(temp__4126__auto__)
{var s__52897__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52897__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52897__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52899 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52898 = (0);while(true){
if((i__52898 < size__4282__auto__))
{var vec__52902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52898);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52902,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52902,(1),null);cljs.core.chunk_append(b__52899,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__52904 = (i__52898 + (1));
i__52898 = G__52904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52899),iter__52896(cljs.core.chunk_rest(s__52897__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52899),null);
}
} else
{var vec__52903 = cljs.core.first(s__52897__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52903,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52903,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__52896(cljs.core.rest(s__52897__$2)));
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__52913(s__52914){return (new cljs.core.LazySeq(null,(function (){var s__52914__$1 = s__52914;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52914__$1);if(temp__4126__auto__)
{var s__52914__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52914__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52914__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52916 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52915 = (0);while(true){
if((i__52915 < size__4282__auto__))
{var vec__52919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52915);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52919,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52919,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__52916,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__52921 = (i__52915 + (1));
i__52915 = G__52921;
continue;
}
} else
{{
var G__52922 = (i__52915 + (1));
i__52915 = G__52922;
continue;
}
}
} else
{{
var G__52923 = (i__52915 + (1));
i__52915 = G__52923;
continue;
}
}
} else
{{
var G__52924 = (i__52915 + (1));
i__52915 = G__52924;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52916),iter__52913(cljs.core.chunk_rest(s__52914__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52916),null);
}
} else
{var vec__52920 = cljs.core.first(s__52914__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52920,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52920,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__52913(cljs.core.rest(s__52914__$2)));
} else
{{
var G__52925 = cljs.core.rest(s__52914__$2);
s__52914__$1 = G__52925;
continue;
}
}
} else
{{
var G__52926 = cljs.core.rest(s__52914__$2);
s__52914__$1 = G__52926;
continue;
}
}
} else
{{
var G__52927 = cljs.core.rest(s__52914__$2);
s__52914__$1 = G__52927;
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
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1145,cljs.core.constant$keyword$1174,cljs.core.constant$keyword$1173,fails], null));
} else
{return null;
}
});
var ufv___52950 = schema.utils.use_fn_validation;var output_schema52928_52951 = schema.core.Any;var input_schema52929_52952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker52930_52953 = schema.core.checker(input_schema52929_52952);var output_checker52931_52954 = schema.core.checker(output_schema52928_52951);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___52950,output_schema52928_52951,input_schema52929_52952,input_checker52930_52953,output_checker52931_52954){
return (function compose_schemata(G__52932,G__52933){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___52955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52932,G__52933], null);var temp__4126__auto___52956 = (input_checker52930_52953.cljs$core$IFn$_invoke$arity$1 ? input_checker52930_52953.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52955) : input_checker52930_52953.call(null,args__10518__auto___52955));if(cljs.core.truth_(temp__4126__auto___52956))
{var error__10519__auto___52957 = temp__4126__auto___52956;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52957], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52929_52952,cljs.core.constant$keyword$1147,args__10518__auto___52955,cljs.core.constant$keyword$1145,error__10519__auto___52957], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__52944 = G__52932;var vec__52946 = G__52944;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52946,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52946,(1),null);var G__52945 = G__52933;var vec__52947 = G__52945;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52947,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52947,(1),null);var G__52944__$1 = G__52944;var G__52945__$1 = G__52945;while(true){
var vec__52948 = G__52944__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52948,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52948,(1),null);var vec__52949 = G__52945__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___52958 = (output_checker52931_52954.cljs$core$IFn$_invoke$arity$1 ? output_checker52931_52954.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52931_52954.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52958))
{var error__10519__auto___52959 = temp__4126__auto___52958;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52959], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52928_52951,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52959], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52950,output_schema52928_52951,input_schema52929_52952,input_checker52930_52953,output_checker52931_52954))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema52928_52951,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52929_52952], null)));
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
var ufv___53038 = schema.utils.use_fn_validation;var output_schema52960_53039 = schema.core.Any;var input_schema52961_53040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker52962_53041 = schema.core.checker(input_schema52961_53040);var output_checker52963_53042 = schema.core.checker(output_schema52960_53039);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042){
return (function split_schema(G__52964,G__52965){var validate__10517__auto__ = ufv___53038.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___53043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52964,G__52965], null);var temp__4126__auto___53044 = (input_checker52962_53041.cljs$core$IFn$_invoke$arity$1 ? input_checker52962_53041.cljs$core$IFn$_invoke$arity$1(args__10518__auto___53043) : input_checker52962_53041.call(null,args__10518__auto___53043));if(cljs.core.truth_(temp__4126__auto___53044))
{var error__10519__auto___53045 = temp__4126__auto___53044;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53045], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52961_53040,cljs.core.constant$keyword$1147,args__10518__auto___53043,cljs.core.constant$keyword$1145,error__10519__auto___53045], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52964;var ks = G__52965;while(true){
var ks__$1 = cljs.core.set(ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042){
return (function iter__53002(s__53003){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042){
return (function (){var s__53003__$1 = s__53003;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53003__$1);if(temp__4126__auto__)
{var s__53003__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53003__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53003__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53005 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53004 = (0);while(true){
if((i__53004 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53004);cljs.core.chunk_append(b__53005,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__53004,in_QMARK_,c__4281__auto__,size__4282__auto__,b__53005,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042){
return (function iter__53022(s__53023){return (new cljs.core.LazySeq(null,((function (i__53004,in_QMARK_,c__4281__auto__,size__4282__auto__,b__53005,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042){
return (function (){var s__53023__$1 = s__53023;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53023__$1);if(temp__4126__auto____$1)
{var s__53023__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53023__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__53023__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__53025 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__53024 = (0);while(true){
if((i__53024 < size__4282__auto____$1))
{var vec__53028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__53024);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53028,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53028,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53046 = (i__53024 + (1));
i__53024 = G__53046;
continue;
}
} else
{{
var G__53047 = (i__53024 + (1));
i__53024 = G__53047;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53025),iter__53022(cljs.core.chunk_rest(s__53023__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53025),null);
}
} else
{var vec__53029 = cljs.core.first(s__53023__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53029,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53029,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53022(cljs.core.rest(s__53023__$2)));
} else
{{
var G__53048 = cljs.core.rest(s__53023__$2);
s__53023__$1 = G__53048;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__53004,in_QMARK_,c__4281__auto__,size__4282__auto__,b__53005,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042))
,null,null));
});})(i__53004,in_QMARK_,c__4281__auto__,size__4282__auto__,b__53005,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042))
;return iter__4283__auto__(s);
})()));
{
var G__53049 = (i__53004 + (1));
i__53004 = G__53049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53005),iter__53002(cljs.core.chunk_rest(s__53003__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53005),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__53003__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042){
return (function iter__53030(s__53031){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042){
return (function (){var s__53031__$1 = s__53031;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53031__$1);if(temp__4126__auto____$1)
{var s__53031__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53031__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53031__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53033 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53032 = (0);while(true){
if((i__53032 < size__4282__auto__))
{var vec__53036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53032);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53036,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53036,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53050 = (i__53032 + (1));
i__53032 = G__53050;
continue;
}
} else
{{
var G__53051 = (i__53032 + (1));
i__53032 = G__53051;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53033),iter__53030(cljs.core.chunk_rest(s__53031__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53033),null);
}
} else
{var vec__53037 = cljs.core.first(s__53031__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53037,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53037,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53030(cljs.core.rest(s__53031__$2)));
} else
{{
var G__53052 = cljs.core.rest(s__53031__$2);
s__53031__$1 = G__53052;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042))
,null,null));
});})(in_QMARK_,s__53003__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042))
;return iter__4283__auto__(s);
})()),iter__53002(cljs.core.rest(s__53003__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042))
;return iter__4283__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___53053 = (output_checker52963_53042.cljs$core$IFn$_invoke$arity$1 ? output_checker52963_53042.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52963_53042.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___53053))
{var error__10519__auto___53054 = temp__4126__auto___53053;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53054], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52960_53039,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___53054], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___53038,output_schema52960_53039,input_schema52961_53040,input_checker52962_53041,output_checker52963_53042))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema52960_53039,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52961_53040], null)));
var ufv___53085 = schema.utils.use_fn_validation;var output_schema53055_53086 = plumbing.fnk.schema.GraphIOSchemata;var input_schema53056_53087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker53057_53088 = schema.core.checker(input_schema53056_53087);var output_checker53058_53089 = schema.core.checker(output_schema53055_53086);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___53085,output_schema53055_53086,input_schema53056_53087,input_checker53057_53088,output_checker53058_53089){
return (function sequence_schemata(G__53059,G__53060){var validate__10517__auto__ = ufv___53085.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___53090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53059,G__53060], null);var temp__4126__auto___53091 = (input_checker53057_53088.cljs$core$IFn$_invoke$arity$1 ? input_checker53057_53088.cljs$core$IFn$_invoke$arity$1(args__10518__auto___53090) : input_checker53057_53088.call(null,args__10518__auto___53090));if(cljs.core.truth_(temp__4126__auto___53091))
{var error__10519__auto___53092 = temp__4126__auto___53091;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53092], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema53056_53087,cljs.core.constant$keyword$1147,args__10518__auto___53090,cljs.core.constant$keyword$1145,error__10519__auto___53092], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__53076 = G__53059;var vec__53078 = G__53076;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53078,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53078,(1),null);var G__53077 = G__53060;var vec__53079 = G__53077;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53079,(0),null);var vec__53080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53079,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53080,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53080,(1),null);var G__53076__$1 = G__53076;var G__53077__$1 = G__53077;while(true){
var vec__53081 = G__53076__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53081,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53081,(1),null);var vec__53082 = G__53077__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53082,(0),null);var vec__53083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53082,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53083,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53083,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__53084 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___53093 = (output_checker53058_53089.cljs$core$IFn$_invoke$arity$1 ? output_checker53058_53089.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker53058_53089.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___53093))
{var error__10519__auto___53094 = temp__4126__auto___53093;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53094], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema53055_53086,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___53094], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___53085,output_schema53055_53086,input_schema53056_53087,input_checker53057_53088,output_checker53058_53089))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema53055_53086,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53056_53087], null)));
