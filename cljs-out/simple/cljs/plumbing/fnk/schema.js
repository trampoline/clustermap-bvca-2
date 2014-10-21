// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__12751__12752__auto__){var G__36160 = p1__12751__12752__auto__;if(G__36160)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__36160.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__36160.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__36160);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__36160);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__36161_SHARP_){return (cljs.core.val.call(null,p1__36161_SHARP_) > (1));
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
var vec__36163 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__36163,(0),null);var v = cljs.core.nth.call(null,vec__36163,(1),null);var p = vec__36163;if(cljs.core.truth_(p))
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
var ufv___36169 = schema.utils.use_fn_validation;var output_schema36164_36170 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema36165_36171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker36166_36172 = schema.core.checker.call(null,input_schema36165_36171);var output_checker36167_36173 = schema.core.checker.call(null,output_schema36164_36170);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___36169,output_schema36164_36170,input_schema36165_36171,input_checker36166_36172,output_checker36167_36173){
return (function unwrap_schema_form_key(G__36168){var validate__12721__auto__ = ufv___36169.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___36174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36168], null);var temp__4126__auto___36175 = input_checker36166_36172.call(null,args__12722__auto___36174);if(cljs.core.truth_(temp__4126__auto___36175))
{var error__12723__auto___36176 = temp__4126__auto___36175;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12723__auto___36176)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36165_36171,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36174,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36176], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var k = G__36168;while(true){
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
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___36177 = output_checker36167_36173.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36177))
{var error__12723__auto___36178 = temp__4126__auto___36177;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12723__auto___36178)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36164_36170,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36178], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36169,output_schema36164_36170,input_schema36165_36171,input_checker36166_36172,output_checker36167_36173))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema36164_36170,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36165_36171], null)));
var ufv___36184 = schema.utils.use_fn_validation;var output_schema36179_36185 = schema.core.Any;var input_schema36180_36186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker36181_36187 = schema.core.checker.call(null,input_schema36180_36186);var output_checker36182_36188 = schema.core.checker.call(null,output_schema36179_36185);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___36184,output_schema36179_36185,input_schema36180_36186,input_checker36181_36187,output_checker36182_36188){
return (function explicit_schema_key_map(G__36183){var validate__12721__auto__ = ufv___36184.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___36189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36183], null);var temp__4126__auto___36190 = input_checker36181_36187.call(null,args__12722__auto___36189);if(cljs.core.truth_(temp__4126__auto___36190))
{var error__12723__auto___36191 = temp__4126__auto___36190;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12723__auto___36191)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36180_36186,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36189,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36191], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__36183;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___36192 = output_checker36182_36188.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36192))
{var error__12723__auto___36193 = temp__4126__auto___36192;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12723__auto___36193)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36179_36185,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36193], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36184,output_schema36179_36185,input_schema36180_36186,input_checker36181_36187,output_checker36182_36188))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema36179_36185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36180_36186], null)));
var ufv___36199 = schema.utils.use_fn_validation;var output_schema36194_36200 = schema.core.Any;var input_schema36195_36201 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker36196_36202 = schema.core.checker.call(null,input_schema36195_36201);var output_checker36197_36203 = schema.core.checker.call(null,output_schema36194_36200);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___36199,output_schema36194_36200,input_schema36195_36201,input_checker36196_36202,output_checker36197_36203){
return (function split_schema_keys(G__36198){var validate__12721__auto__ = ufv___36199.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___36204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36198], null);var temp__4126__auto___36205 = input_checker36196_36202.call(null,args__12722__auto___36204);if(cljs.core.truth_(temp__4126__auto___36205))
{var error__12723__auto___36206 = temp__4126__auto___36205;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12723__auto___36206)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36195_36201,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36204,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36206], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__36198;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___36207 = output_checker36197_36203.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36207))
{var error__12723__auto___36208 = temp__4126__auto___36207;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12723__auto___36208)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36194_36200,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36208], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36199,output_schema36194_36200,input_schema36195_36201,input_checker36196_36202,output_checker36197_36203))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema36194_36200,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36195_36201], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__36212){var vec__36213 = p__36212;var k = cljs.core.nth.call(null,vec__36213,(0),null);var v = cljs.core.nth.call(null,vec__36213,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__36214 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__36214,(0),null);var ov = cljs.core.nth.call(null,vec__36214,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__36215){
var key_project = cljs.core.first(arglist__36215);
arglist__36215 = cljs.core.next(arglist__36215);
var key_combine = cljs.core.first(arglist__36215);
arglist__36215 = cljs.core.next(arglist__36215);
var val_combine = cljs.core.first(arglist__36215);
var maps = cljs.core.rest(arglist__36215);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___36223 = schema.utils.use_fn_validation;var output_schema36217_36224 = plumbing.fnk.schema.InputSchema;var input_schema36218_36225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker36219_36226 = schema.core.checker.call(null,input_schema36218_36225);var output_checker36220_36227 = schema.core.checker.call(null,output_schema36217_36224);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227){
return (function union_input_schemata(G__36221,G__36222){var validate__12721__auto__ = ufv___36223.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___36228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36221,G__36222], null);var temp__4126__auto___36229 = input_checker36219_36226.call(null,args__12722__auto___36228);if(cljs.core.truth_(temp__4126__auto___36229))
{var error__12723__auto___36230 = temp__4126__auto___36229;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12723__auto___36230)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36218_36225,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36228,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36230], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var i1 = G__36221;var i2 = G__36222;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__12721__auto__,ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227){
return (function (p1__36216_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__36216_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__36216_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__12721__auto__,ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227))
,((function (validate__12721__auto__,ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227){
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
});})(validate__12721__auto__,ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227))
,((function (validate__12721__auto__,ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__12721__auto__,ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___36231 = output_checker36220_36227.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36231))
{var error__12723__auto___36232 = temp__4126__auto___36231;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12723__auto___36232)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36217_36224,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36232], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36223,output_schema36217_36224,input_schema36218_36225,input_checker36219_36226,output_checker36220_36227))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema36217_36224,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36218_36225], null)));
var ufv___36238 = schema.utils.use_fn_validation;var output_schema36233_36239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema36234_36240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker36235_36241 = schema.core.checker.call(null,input_schema36234_36240);var output_checker36236_36242 = schema.core.checker.call(null,output_schema36233_36239);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___36238,output_schema36233_36239,input_schema36234_36240,input_checker36235_36241,output_checker36236_36242){
return (function required_toplevel_keys(G__36237){var validate__12721__auto__ = ufv___36238.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___36243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36237], null);var temp__4126__auto___36244 = input_checker36235_36241.call(null,args__12722__auto___36243);if(cljs.core.truth_(temp__4126__auto___36244))
{var error__12723__auto___36245 = temp__4126__auto___36244;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12723__auto___36245)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36234_36240,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36243,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36245], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var input_schema = G__36237;while(true){
return cljs.core.keep.call(null,((function (validate__12721__auto__,ufv___36238,output_schema36233_36239,input_schema36234_36240,input_checker36235_36241,output_checker36236_36242){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__12721__auto__,ufv___36238,output_schema36233_36239,input_schema36234_36240,input_checker36235_36241,output_checker36236_36242))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___36246 = output_checker36236_36242.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36246))
{var error__12723__auto___36247 = temp__4126__auto___36246;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12723__auto___36247)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36233_36239,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36247], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36238,output_schema36233_36239,input_schema36234_36240,input_checker36235_36241,output_checker36236_36242))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema36233_36239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36234_36240], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__36256(s__36257){return (new cljs.core.LazySeq(null,(function (){var s__36257__$1 = s__36257;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36257__$1);if(temp__4126__auto__)
{var s__36257__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36257__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__36257__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__36259 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__36258 = (0);while(true){
if((i__36258 < size__4282__auto__))
{var vec__36262 = cljs.core._nth.call(null,c__4281__auto__,i__36258);var k = cljs.core.nth.call(null,vec__36262,(0),null);var v = cljs.core.nth.call(null,vec__36262,(1),null);cljs.core.chunk_append.call(null,b__36259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__36264 = (i__36258 + (1));
i__36258 = G__36264;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36259),iter__36256.call(null,cljs.core.chunk_rest.call(null,s__36257__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36259),null);
}
} else
{var vec__36263 = cljs.core.first.call(null,s__36257__$2);var k = cljs.core.nth.call(null,vec__36263,(0),null);var v = cljs.core.nth.call(null,vec__36263,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__36256.call(null,cljs.core.rest.call(null,s__36257__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__36273(s__36274){return (new cljs.core.LazySeq(null,(function (){var s__36274__$1 = s__36274;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36274__$1);if(temp__4126__auto__)
{var s__36274__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36274__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__36274__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__36276 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__36275 = (0);while(true){
if((i__36275 < size__4282__auto__))
{var vec__36279 = cljs.core._nth.call(null,c__4281__auto__,i__36275);var k = cljs.core.nth.call(null,vec__36279,(0),null);var v = cljs.core.nth.call(null,vec__36279,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__36276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__36281 = (i__36275 + (1));
i__36275 = G__36281;
continue;
}
} else
{{
var G__36282 = (i__36275 + (1));
i__36275 = G__36282;
continue;
}
}
} else
{{
var G__36283 = (i__36275 + (1));
i__36275 = G__36283;
continue;
}
}
} else
{{
var G__36284 = (i__36275 + (1));
i__36275 = G__36284;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36276),iter__36273.call(null,cljs.core.chunk_rest.call(null,s__36274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36276),null);
}
} else
{var vec__36280 = cljs.core.first.call(null,s__36274__$2);var k = cljs.core.nth.call(null,vec__36280,(0),null);var v = cljs.core.nth.call(null,vec__36280,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__36273.call(null,cljs.core.rest.call(null,s__36274__$2)));
} else
{{
var G__36285 = cljs.core.rest.call(null,s__36274__$2);
s__36274__$1 = G__36285;
continue;
}
}
} else
{{
var G__36286 = cljs.core.rest.call(null,s__36274__$2);
s__36274__$1 = G__36286;
continue;
}
}
} else
{{
var G__36287 = cljs.core.rest.call(null,s__36274__$2);
s__36274__$1 = G__36287;
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
});return iter__4283__auto__.call(null,input_schema);
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
var ufv___36310 = schema.utils.use_fn_validation;var output_schema36288_36311 = schema.core.Any;var input_schema36289_36312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker36290_36313 = schema.core.checker.call(null,input_schema36289_36312);var output_checker36291_36314 = schema.core.checker.call(null,output_schema36288_36311);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___36310,output_schema36288_36311,input_schema36289_36312,input_checker36290_36313,output_checker36291_36314){
return (function compose_schemata(G__36292,G__36293){var validate__12721__auto__ = true;if(validate__12721__auto__)
{var args__12722__auto___36315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36292,G__36293], null);var temp__4126__auto___36316 = input_checker36290_36313.call(null,args__12722__auto___36315);if(cljs.core.truth_(temp__4126__auto___36316))
{var error__12723__auto___36317 = temp__4126__auto___36316;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12723__auto___36317)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36289_36312,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36315,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36317], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__36304 = G__36292;var vec__36306 = G__36304;var i2 = cljs.core.nth.call(null,vec__36306,(0),null);var o2 = cljs.core.nth.call(null,vec__36306,(1),null);var G__36305 = G__36293;var vec__36307 = G__36305;var i1 = cljs.core.nth.call(null,vec__36307,(0),null);var o1 = cljs.core.nth.call(null,vec__36307,(1),null);var G__36304__$1 = G__36304;var G__36305__$1 = G__36305;while(true){
var vec__36308 = G__36304__$1;var i2__$1 = cljs.core.nth.call(null,vec__36308,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__36308,(1),null);var vec__36309 = G__36305__$1;var i1__$1 = cljs.core.nth.call(null,vec__36309,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__36309,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__12721__auto__)
{var temp__4126__auto___36318 = output_checker36291_36314.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36318))
{var error__12723__auto___36319 = temp__4126__auto___36318;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12723__auto___36319)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36288_36311,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36319], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36310,output_schema36288_36311,input_schema36289_36312,input_checker36290_36313,output_checker36291_36314))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema36288_36311,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36289_36312], null)));
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
var ufv___36398 = schema.utils.use_fn_validation;var output_schema36320_36399 = schema.core.Any;var input_schema36321_36400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker36322_36401 = schema.core.checker.call(null,input_schema36321_36400);var output_checker36323_36402 = schema.core.checker.call(null,output_schema36320_36399);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402){
return (function split_schema(G__36324,G__36325){var validate__12721__auto__ = ufv___36398.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___36403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36324,G__36325], null);var temp__4126__auto___36404 = input_checker36322_36401.call(null,args__12722__auto___36403);if(cljs.core.truth_(temp__4126__auto___36404))
{var error__12723__auto___36405 = temp__4126__auto___36404;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12723__auto___36405)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36321_36400,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36403,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36405], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__36324;var ks = G__36325;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402){
return (function iter__36362(s__36363){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402){
return (function (){var s__36363__$1 = s__36363;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36363__$1);if(temp__4126__auto__)
{var s__36363__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36363__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__36363__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__36365 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__36364 = (0);while(true){
if((i__36364 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__36364);cljs.core.chunk_append.call(null,b__36365,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__36364,in_QMARK_,c__4281__auto__,size__4282__auto__,b__36365,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402){
return (function iter__36382(s__36383){return (new cljs.core.LazySeq(null,((function (i__36364,in_QMARK_,c__4281__auto__,size__4282__auto__,b__36365,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402){
return (function (){var s__36383__$1 = s__36383;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__36383__$1);if(temp__4126__auto____$1)
{var s__36383__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36383__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__36383__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__36385 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__36384 = (0);while(true){
if((i__36384 < size__4282__auto____$1))
{var vec__36388 = cljs.core._nth.call(null,c__4281__auto____$1,i__36384);var k = cljs.core.nth.call(null,vec__36388,(0),null);var v = cljs.core.nth.call(null,vec__36388,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__36385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36406 = (i__36384 + (1));
i__36384 = G__36406;
continue;
}
} else
{{
var G__36407 = (i__36384 + (1));
i__36384 = G__36407;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36385),iter__36382.call(null,cljs.core.chunk_rest.call(null,s__36383__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36385),null);
}
} else
{var vec__36389 = cljs.core.first.call(null,s__36383__$2);var k = cljs.core.nth.call(null,vec__36389,(0),null);var v = cljs.core.nth.call(null,vec__36389,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36382.call(null,cljs.core.rest.call(null,s__36383__$2)));
} else
{{
var G__36408 = cljs.core.rest.call(null,s__36383__$2);
s__36383__$1 = G__36408;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__36364,in_QMARK_,c__4281__auto__,size__4282__auto__,b__36365,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402))
,null,null));
});})(i__36364,in_QMARK_,c__4281__auto__,size__4282__auto__,b__36365,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__36409 = (i__36364 + (1));
i__36364 = G__36409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36365),iter__36362.call(null,cljs.core.chunk_rest.call(null,s__36363__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36365),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__36363__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402){
return (function iter__36390(s__36391){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402){
return (function (){var s__36391__$1 = s__36391;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__36391__$1);if(temp__4126__auto____$1)
{var s__36391__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36391__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__36391__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__36393 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__36392 = (0);while(true){
if((i__36392 < size__4282__auto__))
{var vec__36396 = cljs.core._nth.call(null,c__4281__auto__,i__36392);var k = cljs.core.nth.call(null,vec__36396,(0),null);var v = cljs.core.nth.call(null,vec__36396,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__36393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36410 = (i__36392 + (1));
i__36392 = G__36410;
continue;
}
} else
{{
var G__36411 = (i__36392 + (1));
i__36392 = G__36411;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36393),iter__36390.call(null,cljs.core.chunk_rest.call(null,s__36391__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36393),null);
}
} else
{var vec__36397 = cljs.core.first.call(null,s__36391__$2);var k = cljs.core.nth.call(null,vec__36397,(0),null);var v = cljs.core.nth.call(null,vec__36397,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36390.call(null,cljs.core.rest.call(null,s__36391__$2)));
} else
{{
var G__36412 = cljs.core.rest.call(null,s__36391__$2);
s__36391__$1 = G__36412;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402))
,null,null));
});})(in_QMARK_,s__36363__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402))
;return iter__4283__auto__.call(null,s);
})()),iter__36362.call(null,cljs.core.rest.call(null,s__36363__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402))
,null,null));
});})(ks__$1,validate__12721__auto__,ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___36413 = output_checker36323_36402.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36413))
{var error__12723__auto___36414 = temp__4126__auto___36413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12723__auto___36414)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36320_36399,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36414], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36398,output_schema36320_36399,input_schema36321_36400,input_checker36322_36401,output_checker36323_36402))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema36320_36399,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36321_36400], null)));
var ufv___36445 = schema.utils.use_fn_validation;var output_schema36415_36446 = plumbing.fnk.schema.GraphIOSchemata;var input_schema36416_36447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker36417_36448 = schema.core.checker.call(null,input_schema36416_36447);var output_checker36418_36449 = schema.core.checker.call(null,output_schema36415_36446);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___36445,output_schema36415_36446,input_schema36416_36447,input_checker36417_36448,output_checker36418_36449){
return (function sequence_schemata(G__36419,G__36420){var validate__12721__auto__ = ufv___36445.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___36450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36419,G__36420], null);var temp__4126__auto___36451 = input_checker36417_36448.call(null,args__12722__auto___36450);if(cljs.core.truth_(temp__4126__auto___36451))
{var error__12723__auto___36452 = temp__4126__auto___36451;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12723__auto___36452)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36416_36447,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___36450,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36452], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__36436 = G__36419;var vec__36438 = G__36436;var i1 = cljs.core.nth.call(null,vec__36438,(0),null);var o1 = cljs.core.nth.call(null,vec__36438,(1),null);var G__36437 = G__36420;var vec__36439 = G__36437;var k = cljs.core.nth.call(null,vec__36439,(0),null);var vec__36440 = cljs.core.nth.call(null,vec__36439,(1),null);var i2 = cljs.core.nth.call(null,vec__36440,(0),null);var o2 = cljs.core.nth.call(null,vec__36440,(1),null);var G__36436__$1 = G__36436;var G__36437__$1 = G__36437;while(true){
var vec__36441 = G__36436__$1;var i1__$1 = cljs.core.nth.call(null,vec__36441,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__36441,(1),null);var vec__36442 = G__36437__$1;var k__$1 = cljs.core.nth.call(null,vec__36442,(0),null);var vec__36443 = cljs.core.nth.call(null,vec__36442,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__36443,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__36443,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__36444 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__36444,(0),null);var unused = cljs.core.nth.call(null,vec__36444,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___36453 = output_checker36418_36449.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___36453))
{var error__12723__auto___36454 = temp__4126__auto___36453;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12723__auto___36454)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36415_36446,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___36454], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___36445,output_schema36415_36446,input_schema36416_36447,input_checker36417_36448,output_checker36418_36449))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema36415_36446,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36416_36447], null)));
