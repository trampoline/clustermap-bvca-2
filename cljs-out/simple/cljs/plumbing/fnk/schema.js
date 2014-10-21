// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13098__13099__auto__){var G__39208 = p1__13098__13099__auto__;if(G__39208)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__39208.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__39208.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__39208);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__39208);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__39209_SHARP_){return (cljs.core.val.call(null,p1__39209_SHARP_) > (1));
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
var vec__39211 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__39211,(0),null);var v = cljs.core.nth.call(null,vec__39211,(1),null);var p = vec__39211;if(cljs.core.truth_(p))
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
var ufv___39217 = schema.utils.use_fn_validation;var output_schema39212_39218 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema39213_39219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker39214_39220 = schema.core.checker.call(null,input_schema39213_39219);var output_checker39215_39221 = schema.core.checker.call(null,output_schema39212_39218);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___39217,output_schema39212_39218,input_schema39213_39219,input_checker39214_39220,output_checker39215_39221){
return (function unwrap_schema_form_key(G__39216){var validate__13068__auto__ = ufv___39217.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___39222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39216], null);var temp__4126__auto___39223 = input_checker39214_39220.call(null,args__13069__auto___39222);if(cljs.core.truth_(temp__4126__auto___39223))
{var error__13070__auto___39224 = temp__4126__auto___39223;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13070__auto___39224)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39213_39219,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39222,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39224], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var k = G__39216;while(true){
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
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___39225 = output_checker39215_39221.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39225))
{var error__13070__auto___39226 = temp__4126__auto___39225;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13070__auto___39226)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39212_39218,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39226], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39217,output_schema39212_39218,input_schema39213_39219,input_checker39214_39220,output_checker39215_39221))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema39212_39218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39213_39219], null)));
var ufv___39232 = schema.utils.use_fn_validation;var output_schema39227_39233 = schema.core.Any;var input_schema39228_39234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker39229_39235 = schema.core.checker.call(null,input_schema39228_39234);var output_checker39230_39236 = schema.core.checker.call(null,output_schema39227_39233);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___39232,output_schema39227_39233,input_schema39228_39234,input_checker39229_39235,output_checker39230_39236){
return (function explicit_schema_key_map(G__39231){var validate__13068__auto__ = ufv___39232.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___39237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39231], null);var temp__4126__auto___39238 = input_checker39229_39235.call(null,args__13069__auto___39237);if(cljs.core.truth_(temp__4126__auto___39238))
{var error__13070__auto___39239 = temp__4126__auto___39238;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13070__auto___39239)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39228_39234,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39237,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39239], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__39231;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___39240 = output_checker39230_39236.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39240))
{var error__13070__auto___39241 = temp__4126__auto___39240;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13070__auto___39241)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39227_39233,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39241], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39232,output_schema39227_39233,input_schema39228_39234,input_checker39229_39235,output_checker39230_39236))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema39227_39233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39228_39234], null)));
var ufv___39247 = schema.utils.use_fn_validation;var output_schema39242_39248 = schema.core.Any;var input_schema39243_39249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker39244_39250 = schema.core.checker.call(null,input_schema39243_39249);var output_checker39245_39251 = schema.core.checker.call(null,output_schema39242_39248);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___39247,output_schema39242_39248,input_schema39243_39249,input_checker39244_39250,output_checker39245_39251){
return (function split_schema_keys(G__39246){var validate__13068__auto__ = ufv___39247.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___39252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39246], null);var temp__4126__auto___39253 = input_checker39244_39250.call(null,args__13069__auto___39252);if(cljs.core.truth_(temp__4126__auto___39253))
{var error__13070__auto___39254 = temp__4126__auto___39253;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13070__auto___39254)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39243_39249,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39252,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39254], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__39246;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___39255 = output_checker39245_39251.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39255))
{var error__13070__auto___39256 = temp__4126__auto___39255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13070__auto___39256)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39242_39248,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39256], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39247,output_schema39242_39248,input_schema39243_39249,input_checker39244_39250,output_checker39245_39251))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema39242_39248,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39243_39249], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__39260){var vec__39261 = p__39260;var k = cljs.core.nth.call(null,vec__39261,(0),null);var v = cljs.core.nth.call(null,vec__39261,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__39262 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__39262,(0),null);var ov = cljs.core.nth.call(null,vec__39262,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__39263){
var key_project = cljs.core.first(arglist__39263);
arglist__39263 = cljs.core.next(arglist__39263);
var key_combine = cljs.core.first(arglist__39263);
arglist__39263 = cljs.core.next(arglist__39263);
var val_combine = cljs.core.first(arglist__39263);
var maps = cljs.core.rest(arglist__39263);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___39271 = schema.utils.use_fn_validation;var output_schema39265_39272 = plumbing.fnk.schema.InputSchema;var input_schema39266_39273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker39267_39274 = schema.core.checker.call(null,input_schema39266_39273);var output_checker39268_39275 = schema.core.checker.call(null,output_schema39265_39272);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275){
return (function union_input_schemata(G__39269,G__39270){var validate__13068__auto__ = ufv___39271.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___39276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39269,G__39270], null);var temp__4126__auto___39277 = input_checker39267_39274.call(null,args__13069__auto___39276);if(cljs.core.truth_(temp__4126__auto___39277))
{var error__13070__auto___39278 = temp__4126__auto___39277;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13070__auto___39278)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39266_39273,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39276,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39278], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var i1 = G__39269;var i2 = G__39270;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13068__auto__,ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275){
return (function (p1__39264_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__39264_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__39264_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13068__auto__,ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275))
,((function (validate__13068__auto__,ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275){
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
});})(validate__13068__auto__,ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275))
,((function (validate__13068__auto__,ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13068__auto__,ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___39279 = output_checker39268_39275.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39279))
{var error__13070__auto___39280 = temp__4126__auto___39279;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13070__auto___39280)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39265_39272,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39280], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39271,output_schema39265_39272,input_schema39266_39273,input_checker39267_39274,output_checker39268_39275))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema39265_39272,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39266_39273], null)));
var ufv___39286 = schema.utils.use_fn_validation;var output_schema39281_39287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema39282_39288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker39283_39289 = schema.core.checker.call(null,input_schema39282_39288);var output_checker39284_39290 = schema.core.checker.call(null,output_schema39281_39287);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___39286,output_schema39281_39287,input_schema39282_39288,input_checker39283_39289,output_checker39284_39290){
return (function required_toplevel_keys(G__39285){var validate__13068__auto__ = ufv___39286.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___39291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39285], null);var temp__4126__auto___39292 = input_checker39283_39289.call(null,args__13069__auto___39291);if(cljs.core.truth_(temp__4126__auto___39292))
{var error__13070__auto___39293 = temp__4126__auto___39292;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13070__auto___39293)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39282_39288,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39291,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39293], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var input_schema = G__39285;while(true){
return cljs.core.keep.call(null,((function (validate__13068__auto__,ufv___39286,output_schema39281_39287,input_schema39282_39288,input_checker39283_39289,output_checker39284_39290){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13068__auto__,ufv___39286,output_schema39281_39287,input_schema39282_39288,input_checker39283_39289,output_checker39284_39290))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___39294 = output_checker39284_39290.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39294))
{var error__13070__auto___39295 = temp__4126__auto___39294;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13070__auto___39295)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39281_39287,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39295], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39286,output_schema39281_39287,input_schema39282_39288,input_checker39283_39289,output_checker39284_39290))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema39281_39287,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39282_39288], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__39304(s__39305){return (new cljs.core.LazySeq(null,(function (){var s__39305__$1 = s__39305;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39305__$1);if(temp__4126__auto__)
{var s__39305__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39305__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39305__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39307 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39306 = (0);while(true){
if((i__39306 < size__4374__auto__))
{var vec__39310 = cljs.core._nth.call(null,c__4373__auto__,i__39306);var k = cljs.core.nth.call(null,vec__39310,(0),null);var v = cljs.core.nth.call(null,vec__39310,(1),null);cljs.core.chunk_append.call(null,b__39307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__39312 = (i__39306 + (1));
i__39306 = G__39312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39307),iter__39304.call(null,cljs.core.chunk_rest.call(null,s__39305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39307),null);
}
} else
{var vec__39311 = cljs.core.first.call(null,s__39305__$2);var k = cljs.core.nth.call(null,vec__39311,(0),null);var v = cljs.core.nth.call(null,vec__39311,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__39304.call(null,cljs.core.rest.call(null,s__39305__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__39321(s__39322){return (new cljs.core.LazySeq(null,(function (){var s__39322__$1 = s__39322;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39322__$1);if(temp__4126__auto__)
{var s__39322__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39322__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39322__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39324 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39323 = (0);while(true){
if((i__39323 < size__4374__auto__))
{var vec__39327 = cljs.core._nth.call(null,c__4373__auto__,i__39323);var k = cljs.core.nth.call(null,vec__39327,(0),null);var v = cljs.core.nth.call(null,vec__39327,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__39324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__39329 = (i__39323 + (1));
i__39323 = G__39329;
continue;
}
} else
{{
var G__39330 = (i__39323 + (1));
i__39323 = G__39330;
continue;
}
}
} else
{{
var G__39331 = (i__39323 + (1));
i__39323 = G__39331;
continue;
}
}
} else
{{
var G__39332 = (i__39323 + (1));
i__39323 = G__39332;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39324),iter__39321.call(null,cljs.core.chunk_rest.call(null,s__39322__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39324),null);
}
} else
{var vec__39328 = cljs.core.first.call(null,s__39322__$2);var k = cljs.core.nth.call(null,vec__39328,(0),null);var v = cljs.core.nth.call(null,vec__39328,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__39321.call(null,cljs.core.rest.call(null,s__39322__$2)));
} else
{{
var G__39333 = cljs.core.rest.call(null,s__39322__$2);
s__39322__$1 = G__39333;
continue;
}
}
} else
{{
var G__39334 = cljs.core.rest.call(null,s__39322__$2);
s__39322__$1 = G__39334;
continue;
}
}
} else
{{
var G__39335 = cljs.core.rest.call(null,s__39322__$2);
s__39322__$1 = G__39335;
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
var ufv___39358 = schema.utils.use_fn_validation;var output_schema39336_39359 = schema.core.Any;var input_schema39337_39360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker39338_39361 = schema.core.checker.call(null,input_schema39337_39360);var output_checker39339_39362 = schema.core.checker.call(null,output_schema39336_39359);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___39358,output_schema39336_39359,input_schema39337_39360,input_checker39338_39361,output_checker39339_39362){
return (function compose_schemata(G__39340,G__39341){var validate__13068__auto__ = true;if(validate__13068__auto__)
{var args__13069__auto___39363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39340,G__39341], null);var temp__4126__auto___39364 = input_checker39338_39361.call(null,args__13069__auto___39363);if(cljs.core.truth_(temp__4126__auto___39364))
{var error__13070__auto___39365 = temp__4126__auto___39364;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13070__auto___39365)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39337_39360,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39363,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39365], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__39352 = G__39340;var vec__39354 = G__39352;var i2 = cljs.core.nth.call(null,vec__39354,(0),null);var o2 = cljs.core.nth.call(null,vec__39354,(1),null);var G__39353 = G__39341;var vec__39355 = G__39353;var i1 = cljs.core.nth.call(null,vec__39355,(0),null);var o1 = cljs.core.nth.call(null,vec__39355,(1),null);var G__39352__$1 = G__39352;var G__39353__$1 = G__39353;while(true){
var vec__39356 = G__39352__$1;var i2__$1 = cljs.core.nth.call(null,vec__39356,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__39356,(1),null);var vec__39357 = G__39353__$1;var i1__$1 = cljs.core.nth.call(null,vec__39357,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__39357,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13068__auto__)
{var temp__4126__auto___39366 = output_checker39339_39362.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39366))
{var error__13070__auto___39367 = temp__4126__auto___39366;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13070__auto___39367)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39336_39359,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39367], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39358,output_schema39336_39359,input_schema39337_39360,input_checker39338_39361,output_checker39339_39362))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema39336_39359,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39337_39360], null)));
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
var ufv___39446 = schema.utils.use_fn_validation;var output_schema39368_39447 = schema.core.Any;var input_schema39369_39448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker39370_39449 = schema.core.checker.call(null,input_schema39369_39448);var output_checker39371_39450 = schema.core.checker.call(null,output_schema39368_39447);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450){
return (function split_schema(G__39372,G__39373){var validate__13068__auto__ = ufv___39446.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___39451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39372,G__39373], null);var temp__4126__auto___39452 = input_checker39370_39449.call(null,args__13069__auto___39451);if(cljs.core.truth_(temp__4126__auto___39452))
{var error__13070__auto___39453 = temp__4126__auto___39452;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13070__auto___39453)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39369_39448,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39451,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39453], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__39372;var ks = G__39373;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4375__auto__ = ((function (ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450){
return (function iter__39410(s__39411){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450){
return (function (){var s__39411__$1 = s__39411;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39411__$1);if(temp__4126__auto__)
{var s__39411__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39411__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39411__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39413 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39412 = (0);while(true){
if((i__39412 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4373__auto__,i__39412);cljs.core.chunk_append.call(null,b__39413,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__39412,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39413,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450){
return (function iter__39430(s__39431){return (new cljs.core.LazySeq(null,((function (i__39412,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39413,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450){
return (function (){var s__39431__$1 = s__39431;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__39431__$1);if(temp__4126__auto____$1)
{var s__39431__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__39431__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first.call(null,s__39431__$2);var size__4374__auto____$1 = cljs.core.count.call(null,c__4373__auto____$1);var b__39433 = cljs.core.chunk_buffer.call(null,size__4374__auto____$1);if((function (){var i__39432 = (0);while(true){
if((i__39432 < size__4374__auto____$1))
{var vec__39436 = cljs.core._nth.call(null,c__4373__auto____$1,i__39432);var k = cljs.core.nth.call(null,vec__39436,(0),null);var v = cljs.core.nth.call(null,vec__39436,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__39433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39454 = (i__39432 + (1));
i__39432 = G__39454;
continue;
}
} else
{{
var G__39455 = (i__39432 + (1));
i__39432 = G__39455;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39433),iter__39430.call(null,cljs.core.chunk_rest.call(null,s__39431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39433),null);
}
} else
{var vec__39437 = cljs.core.first.call(null,s__39431__$2);var k = cljs.core.nth.call(null,vec__39437,(0),null);var v = cljs.core.nth.call(null,vec__39437,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39430.call(null,cljs.core.rest.call(null,s__39431__$2)));
} else
{{
var G__39456 = cljs.core.rest.call(null,s__39431__$2);
s__39431__$1 = G__39456;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__39412,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39413,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450))
,null,null));
});})(i__39412,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39413,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450))
;return iter__4375__auto__.call(null,s);
})()));
{
var G__39457 = (i__39412 + (1));
i__39412 = G__39457;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39413),iter__39410.call(null,cljs.core.chunk_rest.call(null,s__39411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39413),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__39411__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450){
return (function iter__39438(s__39439){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450){
return (function (){var s__39439__$1 = s__39439;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__39439__$1);if(temp__4126__auto____$1)
{var s__39439__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__39439__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39439__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39441 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39440 = (0);while(true){
if((i__39440 < size__4374__auto__))
{var vec__39444 = cljs.core._nth.call(null,c__4373__auto__,i__39440);var k = cljs.core.nth.call(null,vec__39444,(0),null);var v = cljs.core.nth.call(null,vec__39444,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__39441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39458 = (i__39440 + (1));
i__39440 = G__39458;
continue;
}
} else
{{
var G__39459 = (i__39440 + (1));
i__39440 = G__39459;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39441),iter__39438.call(null,cljs.core.chunk_rest.call(null,s__39439__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39441),null);
}
} else
{var vec__39445 = cljs.core.first.call(null,s__39439__$2);var k = cljs.core.nth.call(null,vec__39445,(0),null);var v = cljs.core.nth.call(null,vec__39445,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39438.call(null,cljs.core.rest.call(null,s__39439__$2)));
} else
{{
var G__39460 = cljs.core.rest.call(null,s__39439__$2);
s__39439__$1 = G__39460;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450))
,null,null));
});})(in_QMARK_,s__39411__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450))
;return iter__4375__auto__.call(null,s);
})()),iter__39410.call(null,cljs.core.rest.call(null,s__39411__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450))
,null,null));
});})(ks__$1,validate__13068__auto__,ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450))
;return iter__4375__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___39461 = output_checker39371_39450.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39461))
{var error__13070__auto___39462 = temp__4126__auto___39461;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13070__auto___39462)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39368_39447,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39462], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39446,output_schema39368_39447,input_schema39369_39448,input_checker39370_39449,output_checker39371_39450))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema39368_39447,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39369_39448], null)));
var ufv___39493 = schema.utils.use_fn_validation;var output_schema39463_39494 = plumbing.fnk.schema.GraphIOSchemata;var input_schema39464_39495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker39465_39496 = schema.core.checker.call(null,input_schema39464_39495);var output_checker39466_39497 = schema.core.checker.call(null,output_schema39463_39494);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___39493,output_schema39463_39494,input_schema39464_39495,input_checker39465_39496,output_checker39466_39497){
return (function sequence_schemata(G__39467,G__39468){var validate__13068__auto__ = ufv___39493.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___39498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39467,G__39468], null);var temp__4126__auto___39499 = input_checker39465_39496.call(null,args__13069__auto___39498);if(cljs.core.truth_(temp__4126__auto___39499))
{var error__13070__auto___39500 = temp__4126__auto___39499;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13070__auto___39500)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39464_39495,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___39498,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39500], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__39484 = G__39467;var vec__39486 = G__39484;var i1 = cljs.core.nth.call(null,vec__39486,(0),null);var o1 = cljs.core.nth.call(null,vec__39486,(1),null);var G__39485 = G__39468;var vec__39487 = G__39485;var k = cljs.core.nth.call(null,vec__39487,(0),null);var vec__39488 = cljs.core.nth.call(null,vec__39487,(1),null);var i2 = cljs.core.nth.call(null,vec__39488,(0),null);var o2 = cljs.core.nth.call(null,vec__39488,(1),null);var G__39484__$1 = G__39484;var G__39485__$1 = G__39485;while(true){
var vec__39489 = G__39484__$1;var i1__$1 = cljs.core.nth.call(null,vec__39489,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__39489,(1),null);var vec__39490 = G__39485__$1;var k__$1 = cljs.core.nth.call(null,vec__39490,(0),null);var vec__39491 = cljs.core.nth.call(null,vec__39490,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__39491,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__39491,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__39492 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__39492,(0),null);var unused = cljs.core.nth.call(null,vec__39492,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___39501 = output_checker39466_39497.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___39501))
{var error__13070__auto___39502 = temp__4126__auto___39501;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13070__auto___39502)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39463_39494,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___39502], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___39493,output_schema39463_39494,input_schema39464_39495,input_checker39465_39496,output_checker39466_39497))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema39463_39494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39464_39495], null)));
