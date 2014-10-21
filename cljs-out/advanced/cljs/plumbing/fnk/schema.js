// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$1314,(function (p1__12751__12752__auto__){var G__50225 = p1__12751__12752__auto__;if(G__50225)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__50225.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__50225.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__50225);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__50225);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50226_SHARP_){return (cljs.core.val(p1__50226_SHARP_) > (1));
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
var vec__50228 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(1),null);var p = vec__50228;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1305,cljs.core.constant$keyword$1327,cljs.core.constant$keyword$1216,k,cljs.core.constant$keyword$1326,m], null));
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
var ufv___50234 = schema.utils.use_fn_validation;var output_schema50229_50235 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema50230_50236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker50231_50237 = schema.core.checker(input_schema50230_50236);var output_checker50232_50238 = schema.core.checker(output_schema50229_50235);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___50234,output_schema50229_50235,input_schema50230_50236,input_checker50231_50237,output_checker50232_50238){
return (function unwrap_schema_form_key(G__50233){var validate__12721__auto__ = ufv___50234.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___50239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50233], null);var temp__4126__auto___50240 = (input_checker50231_50237.cljs$core$IFn$_invoke$arity$1 ? input_checker50231_50237.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50239) : input_checker50231_50237.call(null,args__12722__auto___50239));if(cljs.core.truth_(temp__4126__auto___50240))
{var error__12723__auto___50241 = temp__4126__auto___50240;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50241], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50230_50236,cljs.core.constant$keyword$1245,args__12722__auto___50239,cljs.core.constant$keyword$1305,error__12723__auto___50241], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var k = G__50233;while(true){
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
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___50242 = (output_checker50232_50238.cljs$core$IFn$_invoke$arity$1 ? output_checker50232_50238.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50232_50238.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50242))
{var error__12723__auto___50243 = temp__4126__auto___50242;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50243], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50229_50235,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50243], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50234,output_schema50229_50235,input_schema50230_50236,input_checker50231_50237,output_checker50232_50238))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema50229_50235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50230_50236], null)));
var ufv___50249 = schema.utils.use_fn_validation;var output_schema50244_50250 = schema.core.Any;var input_schema50245_50251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker50246_50252 = schema.core.checker(input_schema50245_50251);var output_checker50247_50253 = schema.core.checker(output_schema50244_50250);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___50249,output_schema50244_50250,input_schema50245_50251,input_checker50246_50252,output_checker50247_50253){
return (function explicit_schema_key_map(G__50248){var validate__12721__auto__ = ufv___50249.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___50254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50248], null);var temp__4126__auto___50255 = (input_checker50246_50252.cljs$core$IFn$_invoke$arity$1 ? input_checker50246_50252.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50254) : input_checker50246_50252.call(null,args__12722__auto___50254));if(cljs.core.truth_(temp__4126__auto___50255))
{var error__12723__auto___50256 = temp__4126__auto___50255;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50256], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50245_50251,cljs.core.constant$keyword$1245,args__12722__auto___50254,cljs.core.constant$keyword$1305,error__12723__auto___50256], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__50248;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___50257 = (output_checker50247_50253.cljs$core$IFn$_invoke$arity$1 ? output_checker50247_50253.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50247_50253.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50257))
{var error__12723__auto___50258 = temp__4126__auto___50257;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50258], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50244_50250,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50258], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50249,output_schema50244_50250,input_schema50245_50251,input_checker50246_50252,output_checker50247_50253))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema50244_50250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50245_50251], null)));
var ufv___50264 = schema.utils.use_fn_validation;var output_schema50259_50265 = schema.core.Any;var input_schema50260_50266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker50261_50267 = schema.core.checker(input_schema50260_50266);var output_checker50262_50268 = schema.core.checker(output_schema50259_50265);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___50264,output_schema50259_50265,input_schema50260_50266,input_checker50261_50267,output_checker50262_50268){
return (function split_schema_keys(G__50263){var validate__12721__auto__ = ufv___50264.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___50269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50263], null);var temp__4126__auto___50270 = (input_checker50261_50267.cljs$core$IFn$_invoke$arity$1 ? input_checker50261_50267.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50269) : input_checker50261_50267.call(null,args__12722__auto___50269));if(cljs.core.truth_(temp__4126__auto___50270))
{var error__12723__auto___50271 = temp__4126__auto___50270;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50271], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50260_50266,cljs.core.constant$keyword$1245,args__12722__auto___50269,cljs.core.constant$keyword$1305,error__12723__auto___50271], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__50263;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___50272 = (output_checker50262_50268.cljs$core$IFn$_invoke$arity$1 ? output_checker50262_50268.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50262_50268.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50272))
{var error__12723__auto___50273 = temp__4126__auto___50272;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50273], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50259_50265,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50273], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50264,output_schema50259_50265,input_schema50260_50266,input_checker50261_50267,output_checker50262_50268))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema50259_50265,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50260_50266], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__50277){var vec__50278 = p__50277;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50278,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50278,(1),null);var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__50279 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50279,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50279,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__50280){
var key_project = cljs.core.first(arglist__50280);
arglist__50280 = cljs.core.next(arglist__50280);
var key_combine = cljs.core.first(arglist__50280);
arglist__50280 = cljs.core.next(arglist__50280);
var val_combine = cljs.core.first(arglist__50280);
var maps = cljs.core.rest(arglist__50280);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___50288 = schema.utils.use_fn_validation;var output_schema50282_50289 = plumbing.fnk.schema.InputSchema;var input_schema50283_50290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker50284_50291 = schema.core.checker(input_schema50283_50290);var output_checker50285_50292 = schema.core.checker(output_schema50282_50289);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292){
return (function union_input_schemata(G__50286,G__50287){var validate__12721__auto__ = ufv___50288.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___50293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50286,G__50287], null);var temp__4126__auto___50294 = (input_checker50284_50291.cljs$core$IFn$_invoke$arity$1 ? input_checker50284_50291.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50293) : input_checker50284_50291.call(null,args__12722__auto___50293));if(cljs.core.truth_(temp__4126__auto___50294))
{var error__12723__auto___50295 = temp__4126__auto___50294;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50295], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50283_50290,cljs.core.constant$keyword$1245,args__12722__auto___50293,cljs.core.constant$keyword$1305,error__12723__auto___50295], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var i1 = G__50286;var i2 = G__50287;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12721__auto__,ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292){
return (function (p1__50281_SHARP_){if(schema.core.specific_key_QMARK_(p1__50281_SHARP_))
{return schema.core.explicit_schema_key(p1__50281_SHARP_);
} else
{return cljs.core.constant$keyword$1329;
}
});})(validate__12721__auto__,ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292))
,((function (validate__12721__auto__,ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292){
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
});})(validate__12721__auto__,ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292))
,((function (validate__12721__auto__,ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12721__auto__,ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___50296 = (output_checker50285_50292.cljs$core$IFn$_invoke$arity$1 ? output_checker50285_50292.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50285_50292.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50296))
{var error__12723__auto___50297 = temp__4126__auto___50296;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50297], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50282_50289,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50297], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50288,output_schema50282_50289,input_schema50283_50290,input_checker50284_50291,output_checker50285_50292))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema50282_50289,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50283_50290], null)));
var ufv___50303 = schema.utils.use_fn_validation;var output_schema50298_50304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema50299_50305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker50300_50306 = schema.core.checker(input_schema50299_50305);var output_checker50301_50307 = schema.core.checker(output_schema50298_50304);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___50303,output_schema50298_50304,input_schema50299_50305,input_checker50300_50306,output_checker50301_50307){
return (function required_toplevel_keys(G__50302){var validate__12721__auto__ = ufv___50303.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___50308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50302], null);var temp__4126__auto___50309 = (input_checker50300_50306.cljs$core$IFn$_invoke$arity$1 ? input_checker50300_50306.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50308) : input_checker50300_50306.call(null,args__12722__auto___50308));if(cljs.core.truth_(temp__4126__auto___50309))
{var error__12723__auto___50310 = temp__4126__auto___50309;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50310], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50299_50305,cljs.core.constant$keyword$1245,args__12722__auto___50308,cljs.core.constant$keyword$1305,error__12723__auto___50310], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var input_schema = G__50302;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12721__auto__,ufv___50303,output_schema50298_50304,input_schema50299_50305,input_checker50300_50306,output_checker50301_50307){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__12721__auto__,ufv___50303,output_schema50298_50304,input_schema50299_50305,input_checker50300_50306,output_checker50301_50307))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___50311 = (output_checker50301_50307.cljs$core$IFn$_invoke$arity$1 ? output_checker50301_50307.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50301_50307.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50311))
{var error__12723__auto___50312 = temp__4126__auto___50311;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50312], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50298_50304,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50312], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50303,output_schema50298_50304,input_schema50299_50305,input_checker50300_50306,output_checker50301_50307))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema50298_50304,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50299_50305], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__50321(s__50322){return (new cljs.core.LazySeq(null,(function (){var s__50322__$1 = s__50322;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50322__$1);if(temp__4126__auto__)
{var s__50322__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50322__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__50322__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__50324 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__50323 = (0);while(true){
if((i__50323 < size__4282__auto__))
{var vec__50327 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__50323);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50327,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50327,(1),null);cljs.core.chunk_append(b__50324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__50329 = (i__50323 + (1));
i__50323 = G__50329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50324),iter__50321(cljs.core.chunk_rest(s__50322__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50324),null);
}
} else
{var vec__50328 = cljs.core.first(s__50322__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50328,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50328,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__50321(cljs.core.rest(s__50322__$2)));
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__50338(s__50339){return (new cljs.core.LazySeq(null,(function (){var s__50339__$1 = s__50339;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50339__$1);if(temp__4126__auto__)
{var s__50339__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50339__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__50339__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__50341 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__50340 = (0);while(true){
if((i__50340 < size__4282__auto__))
{var vec__50344 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__50340);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__50341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__50346 = (i__50340 + (1));
i__50340 = G__50346;
continue;
}
} else
{{
var G__50347 = (i__50340 + (1));
i__50340 = G__50347;
continue;
}
}
} else
{{
var G__50348 = (i__50340 + (1));
i__50340 = G__50348;
continue;
}
}
} else
{{
var G__50349 = (i__50340 + (1));
i__50340 = G__50349;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50341),iter__50338(cljs.core.chunk_rest(s__50339__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50341),null);
}
} else
{var vec__50345 = cljs.core.first(s__50339__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50345,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50345,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__50338(cljs.core.rest(s__50339__$2)));
} else
{{
var G__50350 = cljs.core.rest(s__50339__$2);
s__50339__$1 = G__50350;
continue;
}
}
} else
{{
var G__50351 = cljs.core.rest(s__50339__$2);
s__50339__$1 = G__50351;
continue;
}
}
} else
{{
var G__50352 = cljs.core.rest(s__50339__$2);
s__50339__$1 = G__50352;
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
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1305,cljs.core.constant$keyword$1331,cljs.core.constant$keyword$1330,fails], null));
} else
{return null;
}
});
var ufv___50375 = schema.utils.use_fn_validation;var output_schema50353_50376 = schema.core.Any;var input_schema50354_50377 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker50355_50378 = schema.core.checker(input_schema50354_50377);var output_checker50356_50379 = schema.core.checker(output_schema50353_50376);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___50375,output_schema50353_50376,input_schema50354_50377,input_checker50355_50378,output_checker50356_50379){
return (function compose_schemata(G__50357,G__50358){var validate__12721__auto__ = true;if(validate__12721__auto__)
{var args__12722__auto___50380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50357,G__50358], null);var temp__4126__auto___50381 = (input_checker50355_50378.cljs$core$IFn$_invoke$arity$1 ? input_checker50355_50378.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50380) : input_checker50355_50378.call(null,args__12722__auto___50380));if(cljs.core.truth_(temp__4126__auto___50381))
{var error__12723__auto___50382 = temp__4126__auto___50381;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50382], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50354_50377,cljs.core.constant$keyword$1245,args__12722__auto___50380,cljs.core.constant$keyword$1305,error__12723__auto___50382], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__50369 = G__50357;var vec__50371 = G__50369;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50371,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50371,(1),null);var G__50370 = G__50358;var vec__50372 = G__50370;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50372,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50372,(1),null);var G__50369__$1 = G__50369;var G__50370__$1 = G__50370;while(true){
var vec__50373 = G__50369__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50373,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50373,(1),null);var vec__50374 = G__50370__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50374,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50374,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__12721__auto__)
{var temp__4126__auto___50383 = (output_checker50356_50379.cljs$core$IFn$_invoke$arity$1 ? output_checker50356_50379.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50356_50379.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50383))
{var error__12723__auto___50384 = temp__4126__auto___50383;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50384], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50353_50376,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50384], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50375,output_schema50353_50376,input_schema50354_50377,input_checker50355_50378,output_checker50356_50379))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema50353_50376,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50354_50377], null)));
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
var ufv___50463 = schema.utils.use_fn_validation;var output_schema50385_50464 = schema.core.Any;var input_schema50386_50465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker50387_50466 = schema.core.checker(input_schema50386_50465);var output_checker50388_50467 = schema.core.checker(output_schema50385_50464);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467){
return (function split_schema(G__50389,G__50390){var validate__12721__auto__ = ufv___50463.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___50468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50389,G__50390], null);var temp__4126__auto___50469 = (input_checker50387_50466.cljs$core$IFn$_invoke$arity$1 ? input_checker50387_50466.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50468) : input_checker50387_50466.call(null,args__12722__auto___50468));if(cljs.core.truth_(temp__4126__auto___50469))
{var error__12723__auto___50470 = temp__4126__auto___50469;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50470], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50386_50465,cljs.core.constant$keyword$1245,args__12722__auto___50468,cljs.core.constant$keyword$1305,error__12723__auto___50470], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__50389;var ks = G__50390;while(true){
var ks__$1 = cljs.core.set(ks);var iter__4283__auto__ = ((function (ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467){
return (function iter__50427(s__50428){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467){
return (function (){var s__50428__$1 = s__50428;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50428__$1);if(temp__4126__auto__)
{var s__50428__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50428__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__50428__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__50430 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__50429 = (0);while(true){
if((i__50429 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__50429);cljs.core.chunk_append(b__50430,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__50429,in_QMARK_,c__4281__auto__,size__4282__auto__,b__50430,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467){
return (function iter__50447(s__50448){return (new cljs.core.LazySeq(null,((function (i__50429,in_QMARK_,c__4281__auto__,size__4282__auto__,b__50430,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467){
return (function (){var s__50448__$1 = s__50448;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__50448__$1);if(temp__4126__auto____$1)
{var s__50448__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__50448__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__50448__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__50450 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__50449 = (0);while(true){
if((i__50449 < size__4282__auto____$1))
{var vec__50453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__50449);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50453,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50453,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__50450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__50471 = (i__50449 + (1));
i__50449 = G__50471;
continue;
}
} else
{{
var G__50472 = (i__50449 + (1));
i__50449 = G__50472;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50450),iter__50447(cljs.core.chunk_rest(s__50448__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50450),null);
}
} else
{var vec__50454 = cljs.core.first(s__50448__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50454,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50454,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__50447(cljs.core.rest(s__50448__$2)));
} else
{{
var G__50473 = cljs.core.rest(s__50448__$2);
s__50448__$1 = G__50473;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__50429,in_QMARK_,c__4281__auto__,size__4282__auto__,b__50430,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467))
,null,null));
});})(i__50429,in_QMARK_,c__4281__auto__,size__4282__auto__,b__50430,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467))
;return iter__4283__auto__(s);
})()));
{
var G__50474 = (i__50429 + (1));
i__50429 = G__50474;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50430),iter__50427(cljs.core.chunk_rest(s__50428__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50430),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__50428__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467){
return (function iter__50455(s__50456){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467){
return (function (){var s__50456__$1 = s__50456;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__50456__$1);if(temp__4126__auto____$1)
{var s__50456__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__50456__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__50456__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__50458 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__50457 = (0);while(true){
if((i__50457 < size__4282__auto__))
{var vec__50461 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__50457);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50461,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50461,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__50458,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__50475 = (i__50457 + (1));
i__50457 = G__50475;
continue;
}
} else
{{
var G__50476 = (i__50457 + (1));
i__50457 = G__50476;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50458),iter__50455(cljs.core.chunk_rest(s__50456__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50458),null);
}
} else
{var vec__50462 = cljs.core.first(s__50456__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50462,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50462,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__50455(cljs.core.rest(s__50456__$2)));
} else
{{
var G__50477 = cljs.core.rest(s__50456__$2);
s__50456__$1 = G__50477;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467))
,null,null));
});})(in_QMARK_,s__50428__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467))
;return iter__4283__auto__(s);
})()),iter__50427(cljs.core.rest(s__50428__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467))
,null,null));
});})(ks__$1,validate__12721__auto__,ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467))
;return iter__4283__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___50478 = (output_checker50388_50467.cljs$core$IFn$_invoke$arity$1 ? output_checker50388_50467.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50388_50467.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50478))
{var error__12723__auto___50479 = temp__4126__auto___50478;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50479], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50385_50464,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50479], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50463,output_schema50385_50464,input_schema50386_50465,input_checker50387_50466,output_checker50388_50467))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema50385_50464,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50386_50465], null)));
var ufv___50510 = schema.utils.use_fn_validation;var output_schema50480_50511 = plumbing.fnk.schema.GraphIOSchemata;var input_schema50481_50512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker50482_50513 = schema.core.checker(input_schema50481_50512);var output_checker50483_50514 = schema.core.checker(output_schema50480_50511);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___50510,output_schema50480_50511,input_schema50481_50512,input_checker50482_50513,output_checker50483_50514){
return (function sequence_schemata(G__50484,G__50485){var validate__12721__auto__ = ufv___50510.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___50515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50484,G__50485], null);var temp__4126__auto___50516 = (input_checker50482_50513.cljs$core$IFn$_invoke$arity$1 ? input_checker50482_50513.cljs$core$IFn$_invoke$arity$1(args__12722__auto___50515) : input_checker50482_50513.call(null,args__12722__auto___50515));if(cljs.core.truth_(temp__4126__auto___50516))
{var error__12723__auto___50517 = temp__4126__auto___50516;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50517], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,input_schema50481_50512,cljs.core.constant$keyword$1245,args__12722__auto___50515,cljs.core.constant$keyword$1305,error__12723__auto___50517], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__50501 = G__50484;var vec__50503 = G__50501;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50503,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50503,(1),null);var G__50502 = G__50485;var vec__50504 = G__50502;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50504,(0),null);var vec__50505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50504,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(1),null);var G__50501__$1 = G__50501;var G__50502__$1 = G__50502;while(true){
var vec__50506 = G__50501__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50506,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50506,(1),null);var vec__50507 = G__50502__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507,(0),null);var vec__50508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__50509 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50509,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50509,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___50518 = (output_checker50483_50514.cljs$core$IFn$_invoke$arity$1 ? output_checker50483_50514.cljs$core$IFn$_invoke$arity$1(o__12724__auto__) : output_checker50483_50514.call(null,o__12724__auto__));if(cljs.core.truth_(temp__4126__auto___50518))
{var error__12723__auto___50519 = temp__4126__auto___50518;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12723__auto___50519], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1306,output_schema50480_50511,cljs.core.constant$keyword$1245,o__12724__auto__,cljs.core.constant$keyword$1305,error__12723__auto___50519], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___50510,output_schema50480_50511,input_schema50481_50512,input_checker50482_50513,output_checker50483_50514))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema50480_50511,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50481_50512], null)));
