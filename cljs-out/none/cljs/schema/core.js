// Compiled by ClojureScript 0.0-2322
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('clojure.string');
goog.require('clojure.string');
schema.core.Schema = (function (){var obj27334 = {};return obj27334;
})();
schema.core.walker = (function walker(this$){if((function (){var and__7888__auto__ = this$;if(and__7888__auto__)
{return this$.schema$core$Schema$walker$arity$1;
} else
{return and__7888__auto__;
}
})())
{return this$.schema$core$Schema$walker$arity$1(this$);
} else
{var x__8527__auto__ = (((this$ == null))?null:this$);return (function (){var or__7900__auto__ = (schema.core.walker[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (schema.core.walker["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Schema.walker",this$);
}
}
})().call(null,this$);
}
});
schema.core.explain = (function explain(this$){if((function (){var and__7888__auto__ = this$;if(and__7888__auto__)
{return this$.schema$core$Schema$explain$arity$1;
} else
{return and__7888__auto__;
}
})())
{return this$.schema$core$Schema$explain$arity$1(this$);
} else
{var x__8527__auto__ = (((this$ == null))?null:this$);return (function (){var or__7900__auto__ = (schema.core.explain[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (schema.core.explain["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
})().call(null,this$);
}
});
/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){throw (new Error(("Walking is unsupported outside of start-walker; all composite schemas must eagerly bind subschema-walkers outside the returned walker.")));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){var subschema_walker27336 = schema.core.subschema_walker;try{schema.core.subschema_walker = sub_walker;
return schema.core.subschema_walker.call(null,schema__$1);
}finally {schema.core.subschema_walker = subschema_walker27336;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){return cljs.core.comp.call(null,schema.utils.error_val,schema.core.start_walker.call(null,schema.core.walker,schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){var temp__4126__auto___27337 = schema.core.check.call(null,schema__$1,value);if(cljs.core.truth_(temp__4126__auto___27337))
{var error_27338 = temp__4126__auto___27337;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_27338)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_27338], null));
} else
{}
return value;
});
(schema.core.Schema["function"] = true);
(schema.core.walker["function"] = (function (this$){var class_walker = (function (){var temp__4124__auto__ = schema.utils.class_schema.call(null,this$);if(cljs.core.truth_(temp__4124__auto__))
{var more_schema = temp__4124__auto__;return schema.core.subschema_walker.call(null,more_schema);
} else
{return cljs.core.identity;
}
})();return ((function (class_walker){
return (function (x){var or__7900__auto__ = ((((x == null)) || (cljs.core.not.call(null,(function (){var or__7900__auto__ = (this$ === x.constructor);if(or__7900__auto__)
{return or__7900__auto__;
} else
{return x instanceof this$;
}
})())))?schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return class_walker.call(null,x);
}
});
;})(class_walker))
}));
(schema.core.explain["function"] = (function (this$){var temp__4124__auto__ = schema.utils.class_schema.call(null,this$);if(cljs.core.truth_(temp__4124__auto__))
{var more_schema = temp__4124__auto__;return schema.core.explain.call(null,more_schema);
} else
{return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27340,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27342 = (((k27340 instanceof cljs.core.Keyword))?k27340.fqn:null);switch (G__27342) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27340,else__8489__auto__);

}
});
schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.AnythingSchema{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27339){var self__ = this;
var this__8493__auto____$1 = this;var pred__27343 = cljs.core.keyword_identical_QMARK_;var expr__27344 = k__8494__auto__;if(cljs.core.truth_(pred__27343.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__27344)))
{return (new schema.core.AnythingSchema(G__27339,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27339),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27339){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,G__27339,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;
schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.identity;
});
schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});
schema.core.AnythingSchema.cljs$lang$type = true;
schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});
schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/AnythingSchema");
});
schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){return (new schema.core.AnythingSchema(_));
});
schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__27341){return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__27341),null,cljs.core.dissoc.call(null,G__27341,new cljs.core.Keyword(null,"_","_",1453416199))));
});
/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EqSchema = (function (v,__meta,__extmap){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27348,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27350 = (((k27348 instanceof cljs.core.Keyword))?k27348.fqn:null);switch (G__27350) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27348,else__8489__auto__);

}
});
schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.EqSchema{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27347){var self__ = this;
var this__8493__auto____$1 = this;var pred__27351 = cljs.core.keyword_identical_QMARK_;var expr__27352 = k__8494__auto__;if(cljs.core.truth_(pred__27351.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__27352)))
{return (new schema.core.EqSchema(G__27347,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27347),null));
}
});
schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27347){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.EqSchema(self__.v,G__27347,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.EqSchema.prototype.schema$core$Schema$ = true;
schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core._EQ_.call(null,self__.v,x))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});
schema.core.EqSchema.cljs$lang$type = true;
schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});
schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/EqSchema");
});
schema.core.__GT_EqSchema = (function __GT_EqSchema(v){return (new schema.core.EqSchema(v));
});
schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__27349){return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__27349),null,cljs.core.dissoc.call(null,G__27349,new cljs.core.Keyword(null,"v","v",21465059))));
});
/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){return (new schema.core.EqSchema(v));
});

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27356,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27358 = (((k27356 instanceof cljs.core.Keyword))?k27356.fqn:null);switch (G__27358) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27356,else__8489__auto__);

}
});
schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.EnumSchema{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27355){var self__ = this;
var this__8493__auto____$1 = this;var pred__27359 = cljs.core.keyword_identical_QMARK_;var expr__27360 = k__8494__auto__;if(cljs.core.truth_(pred__27359.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__27360)))
{return (new schema.core.EnumSchema(G__27355,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27355),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27355){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,G__27355,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.EnumSchema.prototype.schema$core$Schema$ = true;
schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.contains_QMARK_.call(null,self__.vs,x))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});
schema.core.EnumSchema.cljs$lang$type = true;
schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});
schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/EnumSchema");
});
schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){return (new schema.core.EnumSchema(vs));
});
schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__27357){return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__27357),null,cljs.core.dissoc.call(null,G__27357,new cljs.core.Keyword(null,"vs","vs",-2022097090))));
});
/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){return (new schema.core.EnumSchema(cljs.core.set.call(null,vs)));
};
var enum$ = function (var_args){
var vs = null;if (arguments.length > 0) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__27363){
var vs = cljs.core.seq(arglist__27363);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27365,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27367 = (((k27365 instanceof cljs.core.Keyword))?k27365.fqn:null);switch (G__27367) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27365,else__8489__auto__);

}
});
schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.Predicate{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27364){var self__ = this;
var this__8493__auto____$1 = this;var pred__27368 = cljs.core.keyword_identical_QMARK_;var expr__27369 = k__8494__auto__;if(cljs.core.truth_(pred__27368.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__27369)))
{return (new schema.core.Predicate(G__27364,self__.pred_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27368.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__27369)))
{return (new schema.core.Predicate(self__.p_QMARK_,G__27364,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27364),null));
}
}
});
schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27364){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__27364,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.Predicate.prototype.schema$core$Schema$ = true;
schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){var temp__4124__auto__ = (function (){try{if(cljs.core.truth_(self__.p_QMARK_.call(null,x)))
{return null;
} else
{return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e27371){if((e27371 instanceof Object))
{var e = e27371;return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else
{throw e27371;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var reason = temp__4124__auto__;return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4124__auto__,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.pred_name);
});})(reason,temp__4124__auto__,this$__$1))
,null)),reason));
} else
{return x;
}
});
;})(this$__$1))
});
schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_))
{return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else
{if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_))
{return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else
{if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_))
{return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
});
schema.core.Predicate.cljs$lang$type = true;
schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});
schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/Predicate");
});
schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){return (new schema.core.Predicate(p_QMARK_,pred_name));
});
schema.core.map__GT_Predicate = (function map__GT_Predicate(G__27366){return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__27366),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__27366),null,cljs.core.dissoc.call(null,G__27366,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451))));
});
/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){return pred.call(null,p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){if(cljs.core.ifn_QMARK_.call(null,p_QMARK_))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}
return (new schema.core.Predicate(p_QMARK_,pred_name));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Protocol = (function (p,__meta,__extmap){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27374,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27376 = (((k27374 instanceof cljs.core.Keyword))?k27374.fqn:null);switch (G__27376) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27374,else__8489__auto__);

}
});
schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.Protocol{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27373){var self__ = this;
var this__8493__auto____$1 = this;var pred__27377 = cljs.core.keyword_identical_QMARK_;var expr__27378 = k__8494__auto__;if(cljs.core.truth_(pred__27377.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__27378)))
{return (new schema.core.Protocol(G__27373,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27373),null));
}
});
schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27373){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.Protocol(self__.p,G__27373,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.Protocol.prototype.schema$core$Schema$ = true;
schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.truth_(new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,x)))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});
schema.core.Protocol.cljs$lang$type = true;
schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});
schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/Protocol");
});
schema.core.__GT_Protocol = (function __GT_Protocol(p){return (new schema.core.Protocol(p));
});
schema.core.map__GT_Protocol = (function map__GT_Protocol(G__27375){return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__27375),null,cljs.core.dissoc.call(null,G__27375,new cljs.core.Keyword(null,"p","p",151049309))));
});
RegExp.prototype.schema$core$Schema$ = true;
RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(!(typeof x === 'string'))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else
{if(cljs.core.not.call(null,cljs.core.re_find.call(null,this$__$1,x)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else
{return x;

}
}
});
;})(this$__$1))
});
RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.symbol.call(null,("#\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)).slice((1),(-1)))+"\""));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = RegExp;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Maybe = (function (schema,__meta,__extmap){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27382,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27384 = (((k27382 instanceof cljs.core.Keyword))?k27382.fqn:null);switch (G__27384) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27382,else__8489__auto__);

}
});
schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.Maybe{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27381){var self__ = this;
var this__8493__auto____$1 = this;var pred__27385 = cljs.core.keyword_identical_QMARK_;var expr__27386 = k__8494__auto__;if(cljs.core.truth_(pred__27385.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__27386)))
{return (new schema.core.Maybe(G__27381,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27381),null));
}
});
schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27381){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.Maybe(self__.schema,G__27381,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.Maybe.prototype.schema$core$Schema$ = true;
schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = schema.core.subschema_walker.call(null,self__.schema);return ((function (sub_walker,this$__$1){
return (function (x){if((x == null))
{return null;
} else
{return sub_walker.call(null,x);
}
});
;})(sub_walker,this$__$1))
});
schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});
schema.core.Maybe.cljs$lang$type = true;
schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});
schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/Maybe");
});
schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});
schema.core.map__GT_Maybe = (function map__GT_Maybe(G__27383){return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__27383),null,cljs.core.dissoc.call(null,G__27383,new cljs.core.Keyword(null,"schema","schema",-1582001791))));
});
/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27390,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27392 = (((k27390 instanceof cljs.core.Keyword))?k27390.fqn:null);switch (G__27392) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27390,else__8489__auto__);

}
});
schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.NamedSchema{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27389){var self__ = this;
var this__8493__auto____$1 = this;var pred__27393 = cljs.core.keyword_identical_QMARK_;var expr__27394 = k__8494__auto__;if(cljs.core.truth_(pred__27393.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__27394)))
{return (new schema.core.NamedSchema(G__27389,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27393.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__27394)))
{return (new schema.core.NamedSchema(self__.schema,G__27389,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27389),null));
}
}
});
schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27389){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,G__27389,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.NamedSchema.prototype.schema$core$Schema$ = true;
schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = schema.core.subschema_walker.call(null,self__.schema);return ((function (sub_walker,this$__$1){
return (function (x){return schema.utils.wrap_error_name.call(null,self__.name,sub_walker.call(null,x));
});
;})(sub_walker,this$__$1))
});
schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
schema.core.NamedSchema.cljs$lang$type = true;
schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});
schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/NamedSchema");
});
schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});
schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__27391){return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__27391),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__27391),null,cljs.core.dissoc.call(null,G__27391,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177))));
});
/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Either = (function (schemas,__meta,__extmap){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27398,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27400 = (((k27398 instanceof cljs.core.Keyword))?k27398.fqn:null);switch (G__27400) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27398,else__8489__auto__);

}
});
schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.Either{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27397){var self__ = this;
var this__8493__auto____$1 = this;var pred__27401 = cljs.core.keyword_identical_QMARK_;var expr__27402 = k__8494__auto__;if(cljs.core.truth_(pred__27401.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__27402)))
{return (new schema.core.Either(G__27397,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27397),null));
}
});
schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27397){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.Either(self__.schemas,G__27397,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.Either.prototype.schema$core$Schema$ = true;
schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){var sub_walkers__$1 = cljs.core.seq.call(null,sub_walkers);while(true){
if(cljs.core.not.call(null,sub_walkers__$1))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else
{var res = cljs.core.first.call(null,sub_walkers__$1).call(null,x);if(!(schema.utils.error_QMARK_.call(null,res)))
{return res;
} else
{{
var G__27405 = cljs.core.next.call(null,sub_walkers__$1);
sub_walkers__$1 = G__27405;
continue;
}
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});
schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});
schema.core.Either.cljs$lang$type = true;
schema.core.Either.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});
schema.core.Either.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/Either");
});
schema.core.__GT_Either = (function __GT_Either(schemas){return (new schema.core.Either(schemas));
});
schema.core.map__GT_Either = (function map__GT_Either(G__27399){return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__27399),null,cljs.core.dissoc.call(null,G__27399,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
});
/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){return (new schema.core.Either(schemas));
};
var either = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__27406){
var schemas = cljs.core.seq(arglist__27406);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Both = (function (schemas,__meta,__extmap){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27408,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27410 = (((k27408 instanceof cljs.core.Keyword))?k27408.fqn:null);switch (G__27410) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27408,else__8489__auto__);

}
});
schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.Both{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27407){var self__ = this;
var this__8493__auto____$1 = this;var pred__27411 = cljs.core.keyword_identical_QMARK_;var expr__27412 = k__8494__auto__;if(cljs.core.truth_(pred__27411.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__27412)))
{return (new schema.core.Both(G__27407,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27407),null));
}
});
schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27407){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.Both(self__.schemas,G__27407,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.Both.prototype.schema$core$Schema$ = true;
schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){return cljs.core.reduce.call(null,((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){if(schema.utils.error_QMARK_.call(null,x__$1))
{return x__$1;
} else
{return sub_walker.call(null,x__$1);
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});
schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});
schema.core.Both.cljs$lang$type = true;
schema.core.Both.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});
schema.core.Both.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/Both");
});
schema.core.__GT_Both = (function __GT_Both(schemas){return (new schema.core.Both(schemas));
});
schema.core.map__GT_Both = (function map__GT_Both(G__27409){return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__27409),null,cljs.core.dissoc.call(null,G__27409,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
});
/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){return (new schema.core.Both(schemas));
};
var both = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__27415){
var schemas = cljs.core.seq(arglist__27415);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27417,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27419 = (((k27417 instanceof cljs.core.Keyword))?k27417.fqn:null);switch (G__27419) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27417,else__8489__auto__);

}
});
schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27416){var self__ = this;
var this__8493__auto____$1 = this;var pred__27420 = cljs.core.keyword_identical_QMARK_;var expr__27421 = k__8494__auto__;if(cljs.core.truth_(pred__27420.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__27421)))
{return (new schema.core.ConditionalSchema(G__27416,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27416),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27416){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__27416,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;
schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var preds_and_walkers = cljs.core.mapv.call(null,((function (this$__$1){
return (function (p__27423){var vec__27424 = p__27423;var pred = cljs.core.nth.call(null,vec__27424,(0),null);var schema__$1 = cljs.core.nth.call(null,vec__27424,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.subschema_walker.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas);return ((function (preds_and_walkers,this$__$1){
return (function (x){var temp__4124__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (preds_and_walkers,this$__$1){
return (function (p__27425){var vec__27426 = p__27425;var pred = cljs.core.nth.call(null,vec__27426,(0),null);return pred.call(null,x);
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));if(cljs.core.truth_(temp__4124__auto__))
{var vec__27427 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__27427,(0),null);var match = cljs.core.nth.call(null,vec__27427,(1),null);return match.call(null,x);
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (temp__4124__auto__,preds_and_walkers,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4124__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__27428){var vec__27429 = p__27428;var pred = cljs.core.nth.call(null,vec__27429,(0),null);var schema__$1 = cljs.core.nth.call(null,vec__27429,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas));
});
schema.core.ConditionalSchema.cljs$lang$type = true;
schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});
schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/ConditionalSchema");
});
schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){return (new schema.core.ConditionalSchema(preds_and_schemas));
});
schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__27418){return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__27418),null,cljs.core.dissoc.call(null,G__27418,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355))));
});
/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){if((cljs.core.seq.call(null,preds_and_schemas)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args; got %s",cljs.core.count.call(null,preds_and_schemas))));
}
return (new schema.core.ConditionalSchema((function (){var iter__8625__auto__ = (function iter__27439(s__27440){return (new cljs.core.LazySeq(null,(function (){var s__27440__$1 = s__27440;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27440__$1);if(temp__4126__auto__)
{var s__27440__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27440__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27440__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27442 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27441 = (0);while(true){
if((i__27441 < size__8624__auto__))
{var vec__27445 = cljs.core._nth.call(null,c__8623__auto__,i__27441);var pred = cljs.core.nth.call(null,vec__27445,(0),null);var schema__$1 = cljs.core.nth.call(null,vec__27445,(1),null);cljs.core.chunk_append.call(null,b__27442,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));
{
var G__27447 = (i__27441 + (1));
i__27441 = G__27447;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27442),iter__27439.call(null,cljs.core.chunk_rest.call(null,s__27440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27442),null);
}
} else
{var vec__27446 = cljs.core.first.call(null,s__27440__$2);var pred = cljs.core.nth.call(null,vec__27446,(0),null);var schema__$1 = cljs.core.nth.call(null,vec__27446,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),iter__27439.call(null,cljs.core.rest.call(null,s__27440__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8625__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})()));
};
var conditional = function (var_args){
var preds_and_schemas = null;if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__27448){
var preds_and_schemas = cljs.core.seq(arglist__27448);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325);

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.RequiredKey = (function (k,__meta,__extmap){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27450,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27452 = (((k27450 instanceof cljs.core.Keyword))?k27450.fqn:null);switch (G__27452) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27450,else__8489__auto__);

}
});
schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.RequiredKey{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27449){var self__ = this;
var this__8493__auto____$1 = this;var pred__27453 = cljs.core.keyword_identical_QMARK_;var expr__27454 = k__8494__auto__;if(cljs.core.truth_(pred__27453.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__27454)))
{return (new schema.core.RequiredKey(G__27449,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27449),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27449){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,G__27449,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.RequiredKey.cljs$lang$type = true;
schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});
schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/RequiredKey");
});
schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){return (new schema.core.RequiredKey(k));
});
schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__27451){return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__27451),null,cljs.core.dissoc.call(null,G__27451,new cljs.core.Keyword(null,"k","k",-2146297393))));
});
/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){if((k instanceof cljs.core.Keyword))
{return k;
} else
{return (new schema.core.RequiredKey(k));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.OptionalKey = (function (k,__meta,__extmap){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27458,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27460 = (((k27458 instanceof cljs.core.Keyword))?k27458.fqn:null);switch (G__27460) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27458,else__8489__auto__);

}
});
schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.OptionalKey{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27457){var self__ = this;
var this__8493__auto____$1 = this;var pred__27461 = cljs.core.keyword_identical_QMARK_;var expr__27462 = k__8494__auto__;if(cljs.core.truth_(pred__27461.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__27462)))
{return (new schema.core.OptionalKey(G__27457,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27457),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27457){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,G__27457,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.OptionalKey.cljs$lang$type = true;
schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});
schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/OptionalKey");
});
schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){return (new schema.core.OptionalKey(k));
});
schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__27459){return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__27459),null,cljs.core.dissoc.call(null,G__27459,new cljs.core.Keyword(null,"k","k",-2146297393))));
});
/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){return (new schema.core.OptionalKey(k));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){if((ks instanceof cljs.core.Keyword))
{return ks;
} else
{if((ks instanceof schema.core.RequiredKey))
{return ks.k;
} else
{if(schema.core.optional_key_QMARK_.call(null,ks))
{return ks.k;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){return (schema.core.required_key_QMARK_.call(null,ks)) || (schema.core.optional_key_QMARK_.call(null,ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){if(schema.core.specific_key_QMARK_.call(null,kspec))
{if((kspec instanceof cljs.core.Keyword))
{return kspec;
} else
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),((schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else
{return schema.core.explain.call(null,kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27466,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27468 = (((k27466 instanceof cljs.core.Keyword))?k27466.fqn:null);switch (G__27468) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27466,else__8489__auto__);

}
});
schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.MapEntry{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kspec","kspec",-1151232248),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27465){var self__ = this;
var this__8493__auto____$1 = this;var pred__27469 = cljs.core.keyword_identical_QMARK_;var expr__27470 = k__8494__auto__;if(cljs.core.truth_(pred__27469.call(null,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),expr__27470)))
{return (new schema.core.MapEntry(G__27465,self__.val_schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27469.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__27470)))
{return (new schema.core.MapEntry(self__.kspec,G__27465,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27465),null));
}
}
});
schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27465){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__27465,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.MapEntry.prototype.schema$core$Schema$ = true;
schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var val_walker = schema.core.subschema_walker.call(null,self__.val_schema);if(schema.core.specific_key_QMARK_.call(null,self__.kspec))
{var optional_QMARK_ = schema.core.optional_key_QMARK_.call(null,self__.kspec);var k = schema.core.explicit_schema_key.call(null,self__.kspec);return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){if((schema.core._PLUS_missing_PLUS_ === x))
{if(optional_QMARK_)
{return null;
} else
{return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else
{if(!(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x))))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else
{var vec__27472 = x;var xk = cljs.core.nth.call(null,vec__27472,(0),null);var xv = cljs.core.nth.call(null,vec__27472,(1),null);if(cljs.core._EQ_.call(null,xk,k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null)))))));
}
var vres = val_walker.call(null,xv);var temp__4124__auto__ = schema.utils.error_val.call(null,vres);if(cljs.core.truth_(temp__4124__auto__))
{var ve = temp__4124__auto__;return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else
{var key_walker = schema.core.subschema_walker.call(null,self__.kspec);return ((function (key_walker,val_walker,this$__$1){
return (function (x){if(!(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x))))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else
{var out_k = key_walker.call(null,cljs.core.key.call(null,x));var out_ke = schema.utils.error_val.call(null,out_k);var out_v = val_walker.call(null,cljs.core.val.call(null,x));var out_ve = schema.utils.error_val.call(null,out_v);if(cljs.core.truth_((function (){var or__7900__auto__ = out_ke;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return out_ve;
}
})()))
{return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7900__auto__ = out_ke;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.key.call(null,x);
}
})(),(function (){var or__7900__auto__ = out_ve;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});
schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain_kspec.call(null,self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});
schema.core.MapEntry.cljs$lang$type = true;
schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});
schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/MapEntry");
});
schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__27467){return (new schema.core.MapEntry(new cljs.core.Keyword(null,"kspec","kspec",-1151232248).cljs$core$IFn$_invoke$arity$1(G__27467),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__27467),null,cljs.core.dissoc.call(null,G__27467,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619))));
});
schema.core.map_entry = (function map_entry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));if((cljs.core.count.call(null,key_schemata) < (2)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}
return cljs.core.first.call(null,key_schemata);
});
schema.core.map_walker = (function map_walker(map_schema){var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,map_schema);var extra_walker = (cljs.core.truth_(extra_keys_schema)?schema.core.subschema_walker.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,map_schema,extra_keys_schema))):null);var explicit_schema = cljs.core.dissoc.call(null,map_schema,extra_keys_schema);var explicit_walkers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8625__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__27486(s__27487){return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){var s__27487__$1 = s__27487;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27487__$1);if(temp__4126__auto__)
{var s__27487__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27487__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27487__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27489 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27488 = (0);while(true){
if((i__27488 < size__8624__auto__))
{var vec__27492 = cljs.core._nth.call(null,c__8623__auto__,i__27488);var k = cljs.core.nth.call(null,vec__27492,(0),null);var v = cljs.core.nth.call(null,vec__27492,(1),null);cljs.core.chunk_append.call(null,b__27489,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null));
{
var G__27497 = (i__27488 + (1));
i__27488 = G__27497;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27489),iter__27486.call(null,cljs.core.chunk_rest.call(null,s__27487__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27489),null);
}
} else
{var vec__27493 = cljs.core.first.call(null,s__27487__$2);var k = cljs.core.nth.call(null,vec__27493,(0),null);var v = cljs.core.nth.call(null,vec__27493,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null),iter__27486.call(null,cljs.core.rest.call(null,s__27487__$2)));
}
} else
{return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;return iter__8625__auto__.call(null,explicit_schema);
})());var err_conj = schema.utils.result_builder.call(null,cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,explicit_schema),cljs.core.count.call(null,explicit_walkers)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__27474_SHARP_){return (cljs.core.count.call(null,p1__27474_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,explicit_schema)))))))));
}
return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){if(!(cljs.core.map_QMARK_.call(null,x)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else
{var x__$1 = x;var explicit_walkers__$1 = cljs.core.seq.call(null,explicit_walkers);var out = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.not.call(null,explicit_walkers__$1))
{return cljs.core.reduce.call(null,(cljs.core.truth_(extra_walker)?((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){return err_conj.call(null,out__$1,extra_walker.call(null,e));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__27494){var vec__27495 = p__27494;var k = cljs.core.nth.call(null,vec__27495,(0),null);var _ = cljs.core.nth.call(null,vec__27495,(1),null);return err_conj.call(null,out__$1,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null)));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,x__$1);
} else
{var vec__27496 = cljs.core.first.call(null,explicit_walkers__$1);var wk = cljs.core.nth.call(null,vec__27496,(0),null);var wv = cljs.core.nth.call(null,vec__27496,(1),null);{
var G__27498 = cljs.core.dissoc.call(null,x__$1,wk);
var G__27499 = cljs.core.next.call(null,explicit_walkers__$1);
var G__27500 = err_conj.call(null,out,wv.call(null,(function (){var or__7900__auto__ = cljs.core.find.call(null,x__$1,wk);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return schema.core._PLUS_missing_PLUS_;
}
})()));
x__$1 = G__27498;
explicit_walkers__$1 = G__27499;
out = G__27500;
continue;
}
}
break;
}
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8625__auto__ = (function iter__27509(s__27510){return (new cljs.core.LazySeq(null,(function (){var s__27510__$1 = s__27510;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27510__$1);if(temp__4126__auto__)
{var s__27510__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27510__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27510__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27512 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27511 = (0);while(true){
if((i__27511 < size__8624__auto__))
{var vec__27515 = cljs.core._nth.call(null,c__8623__auto__,i__27511);var k = cljs.core.nth.call(null,vec__27515,(0),null);var v = cljs.core.nth.call(null,vec__27515,(1),null);cljs.core.chunk_append.call(null,b__27512,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))));
{
var G__27517 = (i__27511 + (1));
i__27511 = G__27517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27512),iter__27509.call(null,cljs.core.chunk_rest.call(null,s__27510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27512),null);
}
} else
{var vec__27516 = cljs.core.first.call(null,s__27510__$2);var k = cljs.core.nth.call(null,vec__27516,(0),null);var v = cljs.core.nth.call(null,vec__27516,(1),null);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))),iter__27509.call(null,cljs.core.rest.call(null,s__27510__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8625__auto__.call(null,this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker.call(null,this$__$1);
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker.call(null,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}
var sub_walker = schema.core.subschema_walker.call(null,cljs.core.first.call(null,this$__$1));return ((function (sub_walker,this$__$1){
return (function (x){var or__7900__auto__ = ((cljs.core.set_QMARK_.call(null,x))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{var vec__27518 = cljs.core.juxt.call(null,cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.call(null,sub_walker,x));var good = cljs.core.nth.call(null,vec__27518,(0),null);var bad = cljs.core.nth.call(null,vec__27518,(1),null);if(cljs.core.seq.call(null,bad))
{return schema.utils.error.call(null,cljs.core.set.call(null,bad));
} else
{return cljs.core.set.call(null,good);
}
}
});
;})(sub_walker,this$__$1))
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27520,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27522 = (((k27520 instanceof cljs.core.Keyword))?k27520.fqn:null);switch (G__27522) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27520,else__8489__auto__);

}
});
schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.One{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27519){var self__ = this;
var this__8493__auto____$1 = this;var pred__27523 = cljs.core.keyword_identical_QMARK_;var expr__27524 = k__8494__auto__;if(cljs.core.truth_(pred__27523.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__27524)))
{return (new schema.core.One(G__27519,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27523.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__27524)))
{return (new schema.core.One(self__.schema,G__27519,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27523.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__27524)))
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__27519,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27519),null));
}
}
}
});
schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27519){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__27519,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.One.cljs$lang$type = true;
schema.core.One.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});
schema.core.One.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/One");
});
schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){return (new schema.core.One(schema__$1,optional_QMARK_,name));
});
schema.core.map__GT_One = (function map__GT_One(G__27521){return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__27521),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__27521),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__27521),null,cljs.core.dissoc.call(null,G__27521,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177))));
});
/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){return (new schema.core.One(schema__$1,false,name));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){return (new schema.core.One(schema__$1,true,name));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){var vec__27532 = cljs.core.split_with.call(null,(function (p1__27527_SHARP_){return ((p1__27527_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__27527_SHARP_)));
}),s);var required = cljs.core.nth.call(null,vec__27532,(0),null);var more = cljs.core.nth.call(null,vec__27532,(1),null);var vec__27533 = cljs.core.split_with.call(null,((function (vec__27532,required,more){
return (function (p1__27528_SHARP_){var and__7888__auto__ = (p1__27528_SHARP_ instanceof schema.core.One);if(and__7888__auto__)
{return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__27528_SHARP_);
} else
{return and__7888__auto__;
}
});})(vec__27532,required,more))
,more);var optional = cljs.core.nth.call(null,vec__27533,(0),null);var more__$1 = cljs.core.nth.call(null,vec__27533,(1),null);if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__27532,required,more,vec__27533,optional,more__$1){
return (function (p1__27529_SHARP_){return !((p1__27529_SHARP_ instanceof schema.core.One));
});})(vec__27532,required,more,vec__27533,optional,more__$1))
,more__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;
cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;var vec__27534 = schema.core.parse_sequence_schema.call(null,this$__$1);var singles = cljs.core.nth.call(null,vec__27534,(0),null);var multi = cljs.core.nth.call(null,vec__27534,(1),null);var single_walkers = cljs.core.vec.call(null,(function (){var iter__8625__auto__ = ((function (vec__27534,singles,multi,this$__$1){
return (function iter__27535(s__27536){return (new cljs.core.LazySeq(null,((function (vec__27534,singles,multi,this$__$1){
return (function (){var s__27536__$1 = s__27536;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27536__$1);if(temp__4126__auto__)
{var s__27536__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27536__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27536__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27538 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27537 = (0);while(true){
if((i__27537 < size__8624__auto__))
{var s = cljs.core._nth.call(null,c__8623__auto__,i__27537);cljs.core.chunk_append.call(null,b__27538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null));
{
var G__27553 = (i__27537 + (1));
i__27537 = G__27553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27538),iter__27535.call(null,cljs.core.chunk_rest.call(null,s__27536__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27538),null);
}
} else
{var s = cljs.core.first.call(null,s__27536__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null),iter__27535.call(null,cljs.core.rest.call(null,s__27536__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27534,singles,multi,this$__$1))
,null,null));
});})(vec__27534,singles,multi,this$__$1))
;return iter__8625__auto__.call(null,singles);
})());var multi_walker = (cljs.core.truth_(multi)?schema.core.subschema_walker.call(null,multi):null);var err_conj = schema.utils.result_builder.call(null,((function (vec__27534,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,m),null));
});})(vec__27534,singles,multi,single_walkers,multi_walker,this$__$1))
);return ((function (vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){var or__7900__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{var single_walkers__$1 = single_walkers;var x__$1 = x;var out = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,single_walkers__$1);if(cljs.core.truth_(temp__4124__auto__))
{var vec__27539 = temp__4124__auto__;var first_single = cljs.core.nth.call(null,vec__27539,(0),null);var single_walker = cljs.core.nth.call(null,vec__27539,(1),null);if(cljs.core.empty_QMARK_.call(null,x__$1))
{if(cljs.core.truth_(first_single.optional_QMARK_))
{return out;
} else
{return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,vec__27539,first_single,single_walker,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__8625__auto__ = ((function (single_walkers__$1,x__$1,out,vec__27539,first_single,single_walker,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__27540(s__27541){return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,vec__27539,first_single,single_walker,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){var s__27541__$1 = s__27541;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27541__$1);if(temp__4126__auto__)
{var s__27541__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27541__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27541__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27543 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27542 = (0);while(true){
if((i__27542 < size__8624__auto__))
{var vec__27546 = cljs.core._nth.call(null,c__8623__auto__,i__27542);var single = cljs.core.nth.call(null,vec__27546,(0),null);if(cljs.core.not.call(null,single.optional_QMARK_))
{cljs.core.chunk_append.call(null,b__27543,single.name);
{
var G__27554 = (i__27542 + (1));
i__27542 = G__27554;
continue;
}
} else
{return null;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27543),iter__27540.call(null,cljs.core.chunk_rest.call(null,s__27541__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27543),null);
}
} else
{var vec__27547 = cljs.core.first.call(null,s__27541__$2);var single = cljs.core.nth.call(null,vec__27547,(0),null);if(cljs.core.not.call(null,single.optional_QMARK_))
{return cljs.core.cons.call(null,single.name,iter__27540.call(null,cljs.core.rest.call(null,s__27541__$2)));
} else
{return null;
}
}
} else
{return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,vec__27539,first_single,single_walker,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,vec__27539,first_single,single_walker,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;return iter__8625__auto__.call(null,single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,vec__27539,first_single,single_walker,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
}
} else
{{
var G__27555 = cljs.core.next.call(null,single_walkers__$1);
var G__27556 = cljs.core.rest.call(null,x__$1);
var G__27557 = err_conj.call(null,out,schema.utils.wrap_error_name.call(null,first_single.name,single_walker.call(null,cljs.core.first.call(null,x__$1))));
single_walkers__$1 = G__27555;
x__$1 = G__27556;
out = G__27557;
continue;
}
}
} else
{if(cljs.core.truth_(multi))
{return cljs.core.reduce.call(null,err_conj,out,cljs.core.map.call(null,multi_walker,x__$1));
} else
{if(cljs.core.seq.call(null,x__$1))
{return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,temp__4124__auto__,or__7900__auto__,vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
} else
{return out;

}
}
}
break;
}
}
});
;})(vec__27534,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});
cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;var vec__27548 = schema.core.parse_sequence_schema.call(null,this$__$1);var singles = cljs.core.nth.call(null,vec__27548,(0),null);var multi = cljs.core.nth.call(null,vec__27548,(1),null);return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__8625__auto__ = ((function (vec__27548,singles,multi,this$__$1){
return (function iter__27549(s__27550){return (new cljs.core.LazySeq(null,((function (vec__27548,singles,multi,this$__$1){
return (function (){var s__27550__$1 = s__27550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27550__$1);if(temp__4126__auto__)
{var s__27550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27550__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27550__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27552 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27551 = (0);while(true){
if((i__27551 < size__8624__auto__))
{var s = cljs.core._nth.call(null,c__8623__auto__,i__27551);cljs.core.chunk_append.call(null,b__27552,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));
{
var G__27558 = (i__27551 + (1));
i__27551 = G__27558;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27552),iter__27549.call(null,cljs.core.chunk_rest.call(null,s__27550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27552),null);
}
} else
{var s = cljs.core.first.call(null,s__27550__$2);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__27549.call(null,cljs.core.rest.call(null,s__27550__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27548,singles,multi,this$__$1))
,null,null));
});})(vec__27548,singles,multi,this$__$1))
;return iter__8625__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Record = (function (klass,schema,__meta,__extmap){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27560,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27562 = (((k27560 instanceof cljs.core.Keyword))?k27560.fqn:null);switch (G__27562) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27560,else__8489__auto__);

}
});
schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.Record{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27559){var self__ = this;
var this__8493__auto____$1 = this;var pred__27563 = cljs.core.keyword_identical_QMARK_;var expr__27564 = k__8494__auto__;if(cljs.core.truth_(pred__27563.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__27564)))
{return (new schema.core.Record(G__27559,self__.schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27563.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__27564)))
{return (new schema.core.Record(self__.klass,G__27559,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27559),null));
}
}
});
schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27559){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,G__27559,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.Record.prototype.schema$core$Schema$ = true;
schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_checker = schema.core.subschema_walker.call(null,self__.schema);var pred_checker = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);if(cljs.core.truth_(temp__4126__auto__))
{var evf = temp__4126__auto__;return schema.core.subschema_walker.call(null,schema.core.pred.call(null,evf));
} else
{return null;
}
})();return ((function (map_checker,pred_checker,this$__$1){
return (function (r){var or__7900__auto__ = (((r instanceof self__.klass))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{var res = map_checker.call(null,r);if(schema.utils.error_QMARK_.call(null,res))
{return res;
} else
{var pred_res = (cljs.core.truth_(pred_checker)?pred_checker.call(null,r):null);if(schema.utils.error_QMARK_.call(null,pred_res))
{return pred_res;
} else
{return cljs.core.merge.call(null,r,res);
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});
schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",861424668,null));
});
schema.core.Record.cljs$lang$type = true;
schema.core.Record.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});
schema.core.Record.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/Record");
});
schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){return (new schema.core.Record(klass,schema__$1));
});
schema.core.map__GT_Record = (function map__GT_Record(G__27561){return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__27561),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__27561),null,cljs.core.dissoc.call(null,G__27561,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791))));
});
/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){if(cljs.core.map_QMARK_.call(null,schema__$1))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}
return (new schema.core.Record(klass,schema__$1));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){var vec__27570 = cljs.core.split_with.call(null,(function (p1__27567_SHARP_){return (p1__27567_SHARP_ instanceof schema.core.One);
}),input_schema);var required = cljs.core.nth.call(null,vec__27570,(0),null);var more = cljs.core.nth.call(null,vec__27570,(1),null);return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__27570,required,more){
return (function (p1__27568_SHARP_){return schema.core.explain.call(null,p1__27568_SHARP_.schema);
});})(vec__27570,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8486__auto__,k__8487__auto__){var self__ = this;
var this__8486__auto____$1 = this;return cljs.core._lookup.call(null,this__8486__auto____$1,k__8487__auto__,null);
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8488__auto__,k27572,else__8489__auto__){var self__ = this;
var this__8488__auto____$1 = this;var G__27574 = (((k27572 instanceof cljs.core.Keyword))?k27572.fqn:null);switch (G__27574) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27572,else__8489__auto__);

}
});
schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8500__auto__,writer__8501__auto__,opts__8502__auto__){var self__ = this;
var this__8500__auto____$1 = this;var pr_pair__8503__auto__ = ((function (this__8500__auto____$1){
return (function (keyval__8504__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,cljs.core.pr_writer,""," ","",opts__8502__auto__,keyval__8504__auto__);
});})(this__8500__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8501__auto__,pr_pair__8503__auto__,"#schema.core.FnSchema{",", ","}",opts__8502__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8484__auto__){var self__ = this;
var this__8484__auto____$1 = this;return self__.__meta;
});
schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8480__auto__){var self__ = this;
var this__8480__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8490__auto__){var self__ = this;
var this__8490__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8481__auto__){var self__ = this;
var this__8481__auto____$1 = this;var h__8311__auto__ = self__.__hash;if(!((h__8311__auto__ == null)))
{return h__8311__auto__;
} else
{var h__8311__auto____$1 = cljs.core.hash_imap.call(null,this__8481__auto____$1);self__.__hash = h__8311__auto____$1;
return h__8311__auto____$1;
}
});
schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8482__auto__,other__8483__auto__){var self__ = this;
var this__8482__auto____$1 = this;if(cljs.core.truth_((function (){var and__7888__auto__ = other__8483__auto__;if(cljs.core.truth_(and__7888__auto__))
{return ((this__8482__auto____$1.constructor === other__8483__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8482__auto____$1,other__8483__auto__));
} else
{return and__7888__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8495__auto__,k__8496__auto__){var self__ = this;
var this__8495__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__8496__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8495__auto____$1),self__.__meta),k__8496__auto__);
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8496__auto__)),null));
}
});
schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8493__auto__,k__8494__auto__,G__27571){var self__ = this;
var this__8493__auto____$1 = this;var pred__27575 = cljs.core.keyword_identical_QMARK_;var expr__27576 = k__8494__auto__;if(cljs.core.truth_(pred__27575.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__27576)))
{return (new schema.core.FnSchema(G__27571,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27575.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__27576)))
{return (new schema.core.FnSchema(self__.output_schema,G__27571,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8494__auto__,G__27571),null));
}
}
});
schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8498__auto__){var self__ = this;
var this__8498__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8485__auto__,G__27571){var self__ = this;
var this__8485__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__27571,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8491__auto__,entry__8492__auto__){var self__ = this;
var this__8491__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8492__auto__))
{return cljs.core._assoc.call(null,this__8491__auto____$1,cljs.core._nth.call(null,entry__8492__auto__,(0)),cljs.core._nth.call(null,entry__8492__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8491__auto____$1,entry__8492__auto__);
}
});
schema.core.FnSchema.prototype.schema$core$Schema$ = true;
schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.fn_QMARK_.call(null,x))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.input_schemas) > (1)))
{return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else
{return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});
schema.core.FnSchema.cljs$lang$type = true;
schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__8520__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});
schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__){return cljs.core._write.call(null,writer__8521__auto__,"schema.core/FnSchema");
});
schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){return (new schema.core.FnSchema(output_schema,input_schemas));
});
schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__27573){return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__27573),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__27573),null,cljs.core.dissoc.call(null,G__27573,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805))));
});
schema.core.arity = (function arity(input_schema){if(cljs.core.seq.call(null,input_schema))
{if((cljs.core.last.call(null,input_schema) instanceof schema.core.One))
{return cljs.core.count.call(null,input_schema);
} else
{return Number.MAX_VALUE;
}
} else
{return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regargless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){if(cljs.core.seq.call(null,input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}
return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas)));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){if(cljs.core.fn_QMARK_.call(null,f))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}
var or__7900__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{var m__14490__auto__ = cljs.core.meta.call(null,f);var k__14491__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);var temp__4124__auto__ = cljs.core.find.call(null,m__14490__auto__,k__14491__auto__);if(cljs.core.truth_(temp__4124__auto__))
{var pair__14492__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__14492__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__14491__auto__,m__14490__auto__)));
}
}
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){return cljs.core.with_meta.call(null,schema__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});

//# sourceMappingURL=core.js.map