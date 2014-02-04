// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13189 = (function (f,fn_handler,meta13190){
this.f = f;
this.fn_handler = fn_handler;
this.meta13190 = meta13190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13189.cljs$lang$type = true;
cljs.core.async.t13189.cljs$lang$ctorStr = "cljs.core.async/t13189";
cljs.core.async.t13189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13189");
});
cljs.core.async.t13189.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13191){var self__ = this;
var _13191__$1 = this;return self__.meta13190;
});
cljs.core.async.t13189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13191,meta13190__$1){var self__ = this;
var _13191__$1 = this;return (new cljs.core.async.t13189(self__.f,self__.fn_handler,meta13190__$1));
});
cljs.core.async.__GT_t13189 = (function __GT_t13189(f__$1,fn_handler__$1,meta13190){return (new cljs.core.async.t13189(f__$1,fn_handler__$1,meta13190));
});
}
return (new cljs.core.async.t13189(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13193 = buff;if(G__13193)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13193.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13193.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13193);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13193);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13194 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13194);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13194);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13195 = n;var x_13196 = 0;while(true){
if((x_13196 < n__4248__auto___13195))
{(a[x_13196] = 0);
{
var G__13197 = (x_13196 + 1);
x_13196 = G__13197;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13198 = (i + 1);
i = G__13198;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13202 = (function (flag,alt_flag,meta13203){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13203 = meta13203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13202.cljs$lang$type = true;
cljs.core.async.t13202.cljs$lang$ctorStr = "cljs.core.async/t13202";
cljs.core.async.t13202.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13202");
});
cljs.core.async.t13202.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13204){var self__ = this;
var _13204__$1 = this;return self__.meta13203;
});
cljs.core.async.t13202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13204,meta13203__$1){var self__ = this;
var _13204__$1 = this;return (new cljs.core.async.t13202(self__.flag,self__.alt_flag,meta13203__$1));
});
cljs.core.async.__GT_t13202 = (function __GT_t13202(flag__$1,alt_flag__$1,meta13203){return (new cljs.core.async.t13202(flag__$1,alt_flag__$1,meta13203));
});
}
return (new cljs.core.async.t13202(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13208 = (function (cb,flag,alt_handler,meta13209){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13209 = meta13209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13208.cljs$lang$type = true;
cljs.core.async.t13208.cljs$lang$ctorStr = "cljs.core.async/t13208";
cljs.core.async.t13208.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13208");
});
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13210){var self__ = this;
var _13210__$1 = this;return self__.meta13209;
});
cljs.core.async.t13208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13210,meta13209__$1){var self__ = this;
var _13210__$1 = this;return (new cljs.core.async.t13208(self__.cb,self__.flag,self__.alt_handler,meta13209__$1));
});
cljs.core.async.__GT_t13208 = (function __GT_t13208(cb__$1,flag__$1,alt_handler__$1,meta13209){return (new cljs.core.async.t13208(cb__$1,flag__$1,alt_handler__$1,meta13209));
});
}
return (new cljs.core.async.t13208(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13211_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13211_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13212 = (i + 1);
i = G__13212;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13213){var map__13215 = p__13213;var map__13215__$1 = ((cljs.core.seq_QMARK_.call(null,map__13215))?cljs.core.apply.call(null,cljs.core.hash_map,map__13215):map__13215);var opts = map__13215__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13213 = null;if (arguments.length > 1) {
  p__13213 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13213);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13216){
var ports = cljs.core.first(arglist__13216);
var p__13213 = cljs.core.rest(arglist__13216);
return alts_BANG___delegate(ports,p__13213);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13224 = (function (ch,f,map_LT_,meta13225){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13225 = meta13225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13224.cljs$lang$type = true;
cljs.core.async.t13224.cljs$lang$ctorStr = "cljs.core.async/t13224";
cljs.core.async.t13224.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13224");
});
cljs.core.async.t13224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13227 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13227 = (function (fn1,_,meta13225,ch,f,map_LT_,meta13228){
this.fn1 = fn1;
this._ = _;
this.meta13225 = meta13225;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13228 = meta13228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13227.cljs$lang$type = true;
cljs.core.async.t13227.cljs$lang$ctorStr = "cljs.core.async/t13227";
cljs.core.async.t13227.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13227");
});
cljs.core.async.t13227.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13227.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13217_SHARP_){return f1.call(null,(((p1__13217_SHARP_ == null))?null:self__.f.call(null,p1__13217_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13229){var self__ = this;
var _13229__$1 = this;return self__.meta13228;
});
cljs.core.async.t13227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13229,meta13228__$1){var self__ = this;
var _13229__$1 = this;return (new cljs.core.async.t13227(self__.fn1,self__._,self__.meta13225,self__.ch,self__.f,self__.map_LT_,meta13228__$1));
});
cljs.core.async.__GT_t13227 = (function __GT_t13227(fn1__$1,___$2,meta13225__$1,ch__$2,f__$2,map_LT___$2,meta13228){return (new cljs.core.async.t13227(fn1__$1,___$2,meta13225__$1,ch__$2,f__$2,map_LT___$2,meta13228));
});
}
return (new cljs.core.async.t13227(fn1,___$1,self__.meta13225,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13224.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13226){var self__ = this;
var _13226__$1 = this;return self__.meta13225;
});
cljs.core.async.t13224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13226,meta13225__$1){var self__ = this;
var _13226__$1 = this;return (new cljs.core.async.t13224(self__.ch,self__.f,self__.map_LT_,meta13225__$1));
});
cljs.core.async.__GT_t13224 = (function __GT_t13224(ch__$1,f__$1,map_LT___$1,meta13225){return (new cljs.core.async.t13224(ch__$1,f__$1,map_LT___$1,meta13225));
});
}
return (new cljs.core.async.t13224(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13233 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13233 = (function (ch,f,map_GT_,meta13234){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13234 = meta13234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13233.cljs$lang$type = true;
cljs.core.async.t13233.cljs$lang$ctorStr = "cljs.core.async/t13233";
cljs.core.async.t13233.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13233");
});
cljs.core.async.t13233.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13233.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13233.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13235){var self__ = this;
var _13235__$1 = this;return self__.meta13234;
});
cljs.core.async.t13233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13235,meta13234__$1){var self__ = this;
var _13235__$1 = this;return (new cljs.core.async.t13233(self__.ch,self__.f,self__.map_GT_,meta13234__$1));
});
cljs.core.async.__GT_t13233 = (function __GT_t13233(ch__$1,f__$1,map_GT___$1,meta13234){return (new cljs.core.async.t13233(ch__$1,f__$1,map_GT___$1,meta13234));
});
}
return (new cljs.core.async.t13233(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13239 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13239 = (function (ch,p,filter_GT_,meta13240){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13240 = meta13240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13239.cljs$lang$type = true;
cljs.core.async.t13239.cljs$lang$ctorStr = "cljs.core.async/t13239";
cljs.core.async.t13239.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13239");
});
cljs.core.async.t13239.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13239.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13239.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13241){var self__ = this;
var _13241__$1 = this;return self__.meta13240;
});
cljs.core.async.t13239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13241,meta13240__$1){var self__ = this;
var _13241__$1 = this;return (new cljs.core.async.t13239(self__.ch,self__.p,self__.filter_GT_,meta13240__$1));
});
cljs.core.async.__GT_t13239 = (function __GT_t13239(ch__$1,p__$1,filter_GT___$1,meta13240){return (new cljs.core.async.t13239(ch__$1,p__$1,filter_GT___$1,meta13240));
});
}
return (new cljs.core.async.t13239(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13324 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13303){var state_val_13304 = (state_13303[1]);if((state_val_13304 === 1))
{var state_13303__$1 = state_13303;var statearr_13305_13325 = state_13303__$1;(statearr_13305_13325[2] = null);
(statearr_13305_13325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 2))
{var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13303__$1,4,ch);
} else
{if((state_val_13304 === 3))
{var inst_13301 = (state_13303[2]);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13303__$1,inst_13301);
} else
{if((state_val_13304 === 4))
{var inst_13285 = (state_13303[7]);var inst_13285__$1 = (state_13303[2]);var inst_13286 = (inst_13285__$1 == null);var state_13303__$1 = (function (){var statearr_13306 = state_13303;(statearr_13306[7] = inst_13285__$1);
return statearr_13306;
})();if(cljs.core.truth_(inst_13286))
{var statearr_13307_13326 = state_13303__$1;(statearr_13307_13326[1] = 5);
} else
{var statearr_13308_13327 = state_13303__$1;(statearr_13308_13327[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 5))
{var inst_13288 = cljs.core.async.close_BANG_.call(null,out);var state_13303__$1 = state_13303;var statearr_13309_13328 = state_13303__$1;(statearr_13309_13328[2] = inst_13288);
(statearr_13309_13328[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 6))
{var inst_13285 = (state_13303[7]);var inst_13290 = p.call(null,inst_13285);var state_13303__$1 = state_13303;if(cljs.core.truth_(inst_13290))
{var statearr_13310_13329 = state_13303__$1;(statearr_13310_13329[1] = 8);
} else
{var statearr_13311_13330 = state_13303__$1;(statearr_13311_13330[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 7))
{var inst_13299 = (state_13303[2]);var state_13303__$1 = state_13303;var statearr_13312_13331 = state_13303__$1;(statearr_13312_13331[2] = inst_13299);
(statearr_13312_13331[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 8))
{var inst_13285 = (state_13303[7]);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13303__$1,11,out,inst_13285);
} else
{if((state_val_13304 === 9))
{var state_13303__$1 = state_13303;var statearr_13313_13332 = state_13303__$1;(statearr_13313_13332[2] = null);
(statearr_13313_13332[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 10))
{var inst_13296 = (state_13303[2]);var state_13303__$1 = (function (){var statearr_13314 = state_13303;(statearr_13314[8] = inst_13296);
return statearr_13314;
})();var statearr_13315_13333 = state_13303__$1;(statearr_13315_13333[2] = null);
(statearr_13315_13333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 11))
{var inst_13293 = (state_13303[2]);var state_13303__$1 = state_13303;var statearr_13316_13334 = state_13303__$1;(statearr_13316_13334[2] = inst_13293);
(statearr_13316_13334[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13320 = [null,null,null,null,null,null,null,null,null];(statearr_13320[0] = state_machine__5507__auto__);
(statearr_13320[1] = 1);
return statearr_13320;
});
var state_machine__5507__auto____1 = (function (state_13303){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13321){if((e13321 instanceof Object))
{var ex__5510__auto__ = e13321;var statearr_13322_13335 = state_13303;(statearr_13322_13335[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13336 = state_13303;
state_13303 = G__13336;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13303){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13323 = f__5522__auto__.call(null);(statearr_13323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13324);
return statearr_13323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13488){var state_val_13489 = (state_13488[1]);if((state_val_13489 === 1))
{var state_13488__$1 = state_13488;var statearr_13490_13527 = state_13488__$1;(statearr_13490_13527[2] = null);
(statearr_13490_13527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 2))
{var state_13488__$1 = state_13488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13488__$1,4,in$);
} else
{if((state_val_13489 === 3))
{var inst_13486 = (state_13488[2]);var state_13488__$1 = state_13488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13488__$1,inst_13486);
} else
{if((state_val_13489 === 4))
{var inst_13434 = (state_13488[7]);var inst_13434__$1 = (state_13488[2]);var inst_13435 = (inst_13434__$1 == null);var state_13488__$1 = (function (){var statearr_13491 = state_13488;(statearr_13491[7] = inst_13434__$1);
return statearr_13491;
})();if(cljs.core.truth_(inst_13435))
{var statearr_13492_13528 = state_13488__$1;(statearr_13492_13528[1] = 5);
} else
{var statearr_13493_13529 = state_13488__$1;(statearr_13493_13529[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 5))
{var inst_13437 = cljs.core.async.close_BANG_.call(null,out);var state_13488__$1 = state_13488;var statearr_13494_13530 = state_13488__$1;(statearr_13494_13530[2] = inst_13437);
(statearr_13494_13530[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 6))
{var inst_13434 = (state_13488[7]);var inst_13439 = f.call(null,inst_13434);var inst_13444 = cljs.core.seq.call(null,inst_13439);var inst_13445 = inst_13444;var inst_13446 = null;var inst_13447 = 0;var inst_13448 = 0;var state_13488__$1 = (function (){var statearr_13495 = state_13488;(statearr_13495[8] = inst_13446);
(statearr_13495[9] = inst_13445);
(statearr_13495[10] = inst_13447);
(statearr_13495[11] = inst_13448);
return statearr_13495;
})();var statearr_13496_13531 = state_13488__$1;(statearr_13496_13531[2] = null);
(statearr_13496_13531[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 7))
{var inst_13484 = (state_13488[2]);var state_13488__$1 = state_13488;var statearr_13497_13532 = state_13488__$1;(statearr_13497_13532[2] = inst_13484);
(statearr_13497_13532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 8))
{var inst_13447 = (state_13488[10]);var inst_13448 = (state_13488[11]);var inst_13450 = (inst_13448 < inst_13447);var inst_13451 = inst_13450;var state_13488__$1 = state_13488;if(cljs.core.truth_(inst_13451))
{var statearr_13498_13533 = state_13488__$1;(statearr_13498_13533[1] = 10);
} else
{var statearr_13499_13534 = state_13488__$1;(statearr_13499_13534[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 9))
{var inst_13481 = (state_13488[2]);var state_13488__$1 = (function (){var statearr_13500 = state_13488;(statearr_13500[12] = inst_13481);
return statearr_13500;
})();var statearr_13501_13535 = state_13488__$1;(statearr_13501_13535[2] = null);
(statearr_13501_13535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 10))
{var inst_13446 = (state_13488[8]);var inst_13448 = (state_13488[11]);var inst_13453 = cljs.core._nth.call(null,inst_13446,inst_13448);var state_13488__$1 = state_13488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13488__$1,13,out,inst_13453);
} else
{if((state_val_13489 === 11))
{var inst_13445 = (state_13488[9]);var inst_13459 = (state_13488[13]);var inst_13459__$1 = cljs.core.seq.call(null,inst_13445);var state_13488__$1 = (function (){var statearr_13505 = state_13488;(statearr_13505[13] = inst_13459__$1);
return statearr_13505;
})();if(inst_13459__$1)
{var statearr_13506_13536 = state_13488__$1;(statearr_13506_13536[1] = 14);
} else
{var statearr_13507_13537 = state_13488__$1;(statearr_13507_13537[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 12))
{var inst_13479 = (state_13488[2]);var state_13488__$1 = state_13488;var statearr_13508_13538 = state_13488__$1;(statearr_13508_13538[2] = inst_13479);
(statearr_13508_13538[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 13))
{var inst_13446 = (state_13488[8]);var inst_13445 = (state_13488[9]);var inst_13447 = (state_13488[10]);var inst_13448 = (state_13488[11]);var inst_13455 = (state_13488[2]);var inst_13456 = (inst_13448 + 1);var tmp13502 = inst_13446;var tmp13503 = inst_13445;var tmp13504 = inst_13447;var inst_13445__$1 = tmp13503;var inst_13446__$1 = tmp13502;var inst_13447__$1 = tmp13504;var inst_13448__$1 = inst_13456;var state_13488__$1 = (function (){var statearr_13509 = state_13488;(statearr_13509[8] = inst_13446__$1);
(statearr_13509[9] = inst_13445__$1);
(statearr_13509[10] = inst_13447__$1);
(statearr_13509[11] = inst_13448__$1);
(statearr_13509[14] = inst_13455);
return statearr_13509;
})();var statearr_13510_13539 = state_13488__$1;(statearr_13510_13539[2] = null);
(statearr_13510_13539[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 14))
{var inst_13459 = (state_13488[13]);var inst_13461 = cljs.core.chunked_seq_QMARK_.call(null,inst_13459);var state_13488__$1 = state_13488;if(inst_13461)
{var statearr_13511_13540 = state_13488__$1;(statearr_13511_13540[1] = 17);
} else
{var statearr_13512_13541 = state_13488__$1;(statearr_13512_13541[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 15))
{var state_13488__$1 = state_13488;var statearr_13513_13542 = state_13488__$1;(statearr_13513_13542[2] = null);
(statearr_13513_13542[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 16))
{var inst_13477 = (state_13488[2]);var state_13488__$1 = state_13488;var statearr_13514_13543 = state_13488__$1;(statearr_13514_13543[2] = inst_13477);
(statearr_13514_13543[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 17))
{var inst_13459 = (state_13488[13]);var inst_13463 = cljs.core.chunk_first.call(null,inst_13459);var inst_13464 = cljs.core.chunk_rest.call(null,inst_13459);var inst_13465 = cljs.core.count.call(null,inst_13463);var inst_13445 = inst_13464;var inst_13446 = inst_13463;var inst_13447 = inst_13465;var inst_13448 = 0;var state_13488__$1 = (function (){var statearr_13515 = state_13488;(statearr_13515[8] = inst_13446);
(statearr_13515[9] = inst_13445);
(statearr_13515[10] = inst_13447);
(statearr_13515[11] = inst_13448);
return statearr_13515;
})();var statearr_13516_13544 = state_13488__$1;(statearr_13516_13544[2] = null);
(statearr_13516_13544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 18))
{var inst_13459 = (state_13488[13]);var inst_13468 = cljs.core.first.call(null,inst_13459);var state_13488__$1 = state_13488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13488__$1,20,out,inst_13468);
} else
{if((state_val_13489 === 19))
{var inst_13474 = (state_13488[2]);var state_13488__$1 = state_13488;var statearr_13517_13545 = state_13488__$1;(statearr_13517_13545[2] = inst_13474);
(statearr_13517_13545[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13489 === 20))
{var inst_13459 = (state_13488[13]);var inst_13470 = (state_13488[2]);var inst_13471 = cljs.core.next.call(null,inst_13459);var inst_13445 = inst_13471;var inst_13446 = null;var inst_13447 = 0;var inst_13448 = 0;var state_13488__$1 = (function (){var statearr_13518 = state_13488;(statearr_13518[8] = inst_13446);
(statearr_13518[9] = inst_13445);
(statearr_13518[15] = inst_13470);
(statearr_13518[10] = inst_13447);
(statearr_13518[11] = inst_13448);
return statearr_13518;
})();var statearr_13519_13546 = state_13488__$1;(statearr_13519_13546[2] = null);
(statearr_13519_13546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13523[0] = state_machine__5507__auto__);
(statearr_13523[1] = 1);
return statearr_13523;
});
var state_machine__5507__auto____1 = (function (state_13488){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13488);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13524){if((e13524 instanceof Object))
{var ex__5510__auto__ = e13524;var statearr_13525_13547 = state_13488;(statearr_13525_13547[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13548 = state_13488;
state_13488 = G__13548;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13488){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13526 = f__5522__auto__.call(null);(statearr_13526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13629 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13608){var state_val_13609 = (state_13608[1]);if((state_val_13609 === 1))
{var state_13608__$1 = state_13608;var statearr_13610_13630 = state_13608__$1;(statearr_13610_13630[2] = null);
(statearr_13610_13630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 2))
{var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13608__$1,4,from);
} else
{if((state_val_13609 === 3))
{var inst_13606 = (state_13608[2]);var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13608__$1,inst_13606);
} else
{if((state_val_13609 === 4))
{var inst_13591 = (state_13608[7]);var inst_13591__$1 = (state_13608[2]);var inst_13592 = (inst_13591__$1 == null);var state_13608__$1 = (function (){var statearr_13611 = state_13608;(statearr_13611[7] = inst_13591__$1);
return statearr_13611;
})();if(cljs.core.truth_(inst_13592))
{var statearr_13612_13631 = state_13608__$1;(statearr_13612_13631[1] = 5);
} else
{var statearr_13613_13632 = state_13608__$1;(statearr_13613_13632[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 5))
{var state_13608__$1 = state_13608;if(cljs.core.truth_(close_QMARK_))
{var statearr_13614_13633 = state_13608__$1;(statearr_13614_13633[1] = 8);
} else
{var statearr_13615_13634 = state_13608__$1;(statearr_13615_13634[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 6))
{var inst_13591 = (state_13608[7]);var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13608__$1,11,to,inst_13591);
} else
{if((state_val_13609 === 7))
{var inst_13604 = (state_13608[2]);var state_13608__$1 = state_13608;var statearr_13616_13635 = state_13608__$1;(statearr_13616_13635[2] = inst_13604);
(statearr_13616_13635[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 8))
{var inst_13595 = cljs.core.async.close_BANG_.call(null,to);var state_13608__$1 = state_13608;var statearr_13617_13636 = state_13608__$1;(statearr_13617_13636[2] = inst_13595);
(statearr_13617_13636[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 9))
{var state_13608__$1 = state_13608;var statearr_13618_13637 = state_13608__$1;(statearr_13618_13637[2] = null);
(statearr_13618_13637[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 10))
{var inst_13598 = (state_13608[2]);var state_13608__$1 = state_13608;var statearr_13619_13638 = state_13608__$1;(statearr_13619_13638[2] = inst_13598);
(statearr_13619_13638[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 11))
{var inst_13601 = (state_13608[2]);var state_13608__$1 = (function (){var statearr_13620 = state_13608;(statearr_13620[8] = inst_13601);
return statearr_13620;
})();var statearr_13621_13639 = state_13608__$1;(statearr_13621_13639[2] = null);
(statearr_13621_13639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13625 = [null,null,null,null,null,null,null,null,null];(statearr_13625[0] = state_machine__5507__auto__);
(statearr_13625[1] = 1);
return statearr_13625;
});
var state_machine__5507__auto____1 = (function (state_13608){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13608);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13626){if((e13626 instanceof Object))
{var ex__5510__auto__ = e13626;var statearr_13627_13640 = state_13608;(statearr_13627_13640[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13641 = state_13608;
state_13608 = G__13641;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13608){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13628 = f__5522__auto__.call(null);(statearr_13628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13629);
return statearr_13628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13706){var state_val_13707 = (state_13706[1]);if((state_val_13707 === 1))
{var state_13706__$1 = state_13706;var statearr_13708_13729 = state_13706__$1;(statearr_13708_13729[2] = null);
(statearr_13708_13729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 2))
{var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13706__$1,4,ch);
} else
{if((state_val_13707 === 3))
{var inst_13704 = (state_13706[2]);var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13706__$1,inst_13704);
} else
{if((state_val_13707 === 4))
{var inst_13687 = (state_13706[7]);var inst_13687__$1 = (state_13706[2]);var inst_13688 = (inst_13687__$1 == null);var state_13706__$1 = (function (){var statearr_13709 = state_13706;(statearr_13709[7] = inst_13687__$1);
return statearr_13709;
})();if(cljs.core.truth_(inst_13688))
{var statearr_13710_13730 = state_13706__$1;(statearr_13710_13730[1] = 5);
} else
{var statearr_13711_13731 = state_13706__$1;(statearr_13711_13731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 5))
{var inst_13690 = cljs.core.async.close_BANG_.call(null,tc);var inst_13691 = cljs.core.async.close_BANG_.call(null,fc);var state_13706__$1 = (function (){var statearr_13712 = state_13706;(statearr_13712[8] = inst_13690);
return statearr_13712;
})();var statearr_13713_13732 = state_13706__$1;(statearr_13713_13732[2] = inst_13691);
(statearr_13713_13732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 6))
{var inst_13687 = (state_13706[7]);var inst_13693 = p.call(null,inst_13687);var state_13706__$1 = state_13706;if(cljs.core.truth_(inst_13693))
{var statearr_13714_13733 = state_13706__$1;(statearr_13714_13733[1] = 9);
} else
{var statearr_13715_13734 = state_13706__$1;(statearr_13715_13734[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 7))
{var inst_13702 = (state_13706[2]);var state_13706__$1 = state_13706;var statearr_13716_13735 = state_13706__$1;(statearr_13716_13735[2] = inst_13702);
(statearr_13716_13735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 8))
{var inst_13699 = (state_13706[2]);var state_13706__$1 = (function (){var statearr_13717 = state_13706;(statearr_13717[9] = inst_13699);
return statearr_13717;
})();var statearr_13718_13736 = state_13706__$1;(statearr_13718_13736[2] = null);
(statearr_13718_13736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 9))
{var state_13706__$1 = state_13706;var statearr_13719_13737 = state_13706__$1;(statearr_13719_13737[2] = tc);
(statearr_13719_13737[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 10))
{var state_13706__$1 = state_13706;var statearr_13720_13738 = state_13706__$1;(statearr_13720_13738[2] = fc);
(statearr_13720_13738[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 11))
{var inst_13687 = (state_13706[7]);var inst_13697 = (state_13706[2]);var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13706__$1,8,inst_13697,inst_13687);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13724 = [null,null,null,null,null,null,null,null,null,null];(statearr_13724[0] = state_machine__5507__auto__);
(statearr_13724[1] = 1);
return statearr_13724;
});
var state_machine__5507__auto____1 = (function (state_13706){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13706);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13725){if((e13725 instanceof Object))
{var ex__5510__auto__ = e13725;var statearr_13726_13739 = state_13706;(statearr_13726_13739[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13740 = state_13706;
state_13706 = G__13740;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13706){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13727 = f__5522__auto__.call(null);(statearr_13727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13728);
return statearr_13727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13787){var state_val_13788 = (state_13787[1]);if((state_val_13788 === 7))
{var inst_13783 = (state_13787[2]);var state_13787__$1 = state_13787;var statearr_13789_13805 = state_13787__$1;(statearr_13789_13805[2] = inst_13783);
(statearr_13789_13805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13788 === 6))
{var inst_13776 = (state_13787[7]);var inst_13773 = (state_13787[8]);var inst_13780 = f.call(null,inst_13773,inst_13776);var inst_13773__$1 = inst_13780;var state_13787__$1 = (function (){var statearr_13790 = state_13787;(statearr_13790[8] = inst_13773__$1);
return statearr_13790;
})();var statearr_13791_13806 = state_13787__$1;(statearr_13791_13806[2] = null);
(statearr_13791_13806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13788 === 5))
{var inst_13773 = (state_13787[8]);var state_13787__$1 = state_13787;var statearr_13792_13807 = state_13787__$1;(statearr_13792_13807[2] = inst_13773);
(statearr_13792_13807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13788 === 4))
{var inst_13776 = (state_13787[7]);var inst_13776__$1 = (state_13787[2]);var inst_13777 = (inst_13776__$1 == null);var state_13787__$1 = (function (){var statearr_13793 = state_13787;(statearr_13793[7] = inst_13776__$1);
return statearr_13793;
})();if(cljs.core.truth_(inst_13777))
{var statearr_13794_13808 = state_13787__$1;(statearr_13794_13808[1] = 5);
} else
{var statearr_13795_13809 = state_13787__$1;(statearr_13795_13809[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13788 === 3))
{var inst_13785 = (state_13787[2]);var state_13787__$1 = state_13787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13787__$1,inst_13785);
} else
{if((state_val_13788 === 2))
{var state_13787__$1 = state_13787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13787__$1,4,ch);
} else
{if((state_val_13788 === 1))
{var inst_13773 = init;var state_13787__$1 = (function (){var statearr_13796 = state_13787;(statearr_13796[8] = inst_13773);
return statearr_13796;
})();var statearr_13797_13810 = state_13787__$1;(statearr_13797_13810[2] = null);
(statearr_13797_13810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13801 = [null,null,null,null,null,null,null,null,null];(statearr_13801[0] = state_machine__5507__auto__);
(statearr_13801[1] = 1);
return statearr_13801;
});
var state_machine__5507__auto____1 = (function (state_13787){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13802){if((e13802 instanceof Object))
{var ex__5510__auto__ = e13802;var statearr_13803_13811 = state_13787;(statearr_13803_13811[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13812 = state_13787;
state_13787 = G__13812;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13787){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13804 = f__5522__auto__.call(null);(statearr_13804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13874){var state_val_13875 = (state_13874[1]);if((state_val_13875 === 1))
{var inst_13854 = cljs.core.seq.call(null,coll);var inst_13855 = inst_13854;var state_13874__$1 = (function (){var statearr_13876 = state_13874;(statearr_13876[7] = inst_13855);
return statearr_13876;
})();var statearr_13877_13895 = state_13874__$1;(statearr_13877_13895[2] = null);
(statearr_13877_13895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 2))
{var inst_13855 = (state_13874[7]);var state_13874__$1 = state_13874;if(cljs.core.truth_(inst_13855))
{var statearr_13878_13896 = state_13874__$1;(statearr_13878_13896[1] = 4);
} else
{var statearr_13879_13897 = state_13874__$1;(statearr_13879_13897[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 3))
{var inst_13872 = (state_13874[2]);var state_13874__$1 = state_13874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13874__$1,inst_13872);
} else
{if((state_val_13875 === 4))
{var inst_13855 = (state_13874[7]);var inst_13858 = cljs.core.first.call(null,inst_13855);var state_13874__$1 = state_13874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13874__$1,7,ch,inst_13858);
} else
{if((state_val_13875 === 5))
{var state_13874__$1 = state_13874;if(cljs.core.truth_(close_QMARK_))
{var statearr_13880_13898 = state_13874__$1;(statearr_13880_13898[1] = 8);
} else
{var statearr_13881_13899 = state_13874__$1;(statearr_13881_13899[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 6))
{var inst_13870 = (state_13874[2]);var state_13874__$1 = state_13874;var statearr_13882_13900 = state_13874__$1;(statearr_13882_13900[2] = inst_13870);
(statearr_13882_13900[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 7))
{var inst_13855 = (state_13874[7]);var inst_13860 = (state_13874[2]);var inst_13861 = cljs.core.next.call(null,inst_13855);var inst_13855__$1 = inst_13861;var state_13874__$1 = (function (){var statearr_13883 = state_13874;(statearr_13883[7] = inst_13855__$1);
(statearr_13883[8] = inst_13860);
return statearr_13883;
})();var statearr_13884_13901 = state_13874__$1;(statearr_13884_13901[2] = null);
(statearr_13884_13901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 8))
{var inst_13865 = cljs.core.async.close_BANG_.call(null,ch);var state_13874__$1 = state_13874;var statearr_13885_13902 = state_13874__$1;(statearr_13885_13902[2] = inst_13865);
(statearr_13885_13902[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 9))
{var state_13874__$1 = state_13874;var statearr_13886_13903 = state_13874__$1;(statearr_13886_13903[2] = null);
(statearr_13886_13903[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 10))
{var inst_13868 = (state_13874[2]);var state_13874__$1 = state_13874;var statearr_13887_13904 = state_13874__$1;(statearr_13887_13904[2] = inst_13868);
(statearr_13887_13904[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13891 = [null,null,null,null,null,null,null,null,null];(statearr_13891[0] = state_machine__5507__auto__);
(statearr_13891[1] = 1);
return statearr_13891;
});
var state_machine__5507__auto____1 = (function (state_13874){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13874);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13892){if((e13892 instanceof Object))
{var ex__5510__auto__ = e13892;var statearr_13893_13905 = state_13874;(statearr_13893_13905[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13874);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13906 = state_13874;
state_13874 = G__13906;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13874){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13894 = f__5522__auto__.call(null);(statearr_13894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13908 = {};return obj13908;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13910 = {};return obj13910;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14134 = (function (cs,ch,mult,meta14135){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14135 = meta14135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14134.cljs$lang$type = true;
cljs.core.async.t14134.cljs$lang$ctorStr = "cljs.core.async/t14134";
cljs.core.async.t14134.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14134");
});})(cs))
;
cljs.core.async.t14134.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14134.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14134.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14134.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14134.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14134.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14136){var self__ = this;
var _14136__$1 = this;return self__.meta14135;
});})(cs))
;
cljs.core.async.t14134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14136,meta14135__$1){var self__ = this;
var _14136__$1 = this;return (new cljs.core.async.t14134(self__.cs,self__.ch,self__.mult,meta14135__$1));
});})(cs))
;
cljs.core.async.__GT_t14134 = ((function (cs){
return (function __GT_t14134(cs__$1,ch__$1,mult__$1,meta14135){return (new cljs.core.async.t14134(cs__$1,ch__$1,mult__$1,meta14135));
});})(cs))
;
}
return (new cljs.core.async.t14134(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14357 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14271){var state_val_14272 = (state_14271[1]);if((state_val_14272 === 32))
{var inst_14139 = (state_14271[7]);var inst_14215 = (state_14271[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14271,31,Object,null,30);var inst_14222 = cljs.core.async.put_BANG_.call(null,inst_14215,inst_14139,done);var state_14271__$1 = state_14271;var statearr_14273_14358 = state_14271__$1;(statearr_14273_14358[2] = inst_14222);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14271__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 1))
{var state_14271__$1 = state_14271;var statearr_14274_14359 = state_14271__$1;(statearr_14274_14359[2] = null);
(statearr_14274_14359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 33))
{var inst_14228 = (state_14271[9]);var inst_14230 = cljs.core.chunked_seq_QMARK_.call(null,inst_14228);var state_14271__$1 = state_14271;if(inst_14230)
{var statearr_14275_14360 = state_14271__$1;(statearr_14275_14360[1] = 36);
} else
{var statearr_14276_14361 = state_14271__$1;(statearr_14276_14361[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 2))
{var state_14271__$1 = state_14271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14271__$1,4,ch);
} else
{if((state_val_14272 === 34))
{var state_14271__$1 = state_14271;var statearr_14277_14362 = state_14271__$1;(statearr_14277_14362[2] = null);
(statearr_14277_14362[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 3))
{var inst_14269 = (state_14271[2]);var state_14271__$1 = state_14271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14271__$1,inst_14269);
} else
{if((state_val_14272 === 35))
{var inst_14253 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14278_14363 = state_14271__$1;(statearr_14278_14363[2] = inst_14253);
(statearr_14278_14363[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 4))
{var inst_14139 = (state_14271[7]);var inst_14139__$1 = (state_14271[2]);var inst_14140 = (inst_14139__$1 == null);var state_14271__$1 = (function (){var statearr_14279 = state_14271;(statearr_14279[7] = inst_14139__$1);
return statearr_14279;
})();if(cljs.core.truth_(inst_14140))
{var statearr_14280_14364 = state_14271__$1;(statearr_14280_14364[1] = 5);
} else
{var statearr_14281_14365 = state_14271__$1;(statearr_14281_14365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 36))
{var inst_14228 = (state_14271[9]);var inst_14232 = cljs.core.chunk_first.call(null,inst_14228);var inst_14233 = cljs.core.chunk_rest.call(null,inst_14228);var inst_14234 = cljs.core.count.call(null,inst_14232);var inst_14207 = inst_14233;var inst_14208 = inst_14232;var inst_14209 = inst_14234;var inst_14210 = 0;var state_14271__$1 = (function (){var statearr_14282 = state_14271;(statearr_14282[10] = inst_14207);
(statearr_14282[11] = inst_14208);
(statearr_14282[12] = inst_14209);
(statearr_14282[13] = inst_14210);
return statearr_14282;
})();var statearr_14283_14366 = state_14271__$1;(statearr_14283_14366[2] = null);
(statearr_14283_14366[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 5))
{var inst_14146 = cljs.core.deref.call(null,cs);var inst_14147 = cljs.core.seq.call(null,inst_14146);var inst_14148 = inst_14147;var inst_14149 = null;var inst_14150 = 0;var inst_14151 = 0;var state_14271__$1 = (function (){var statearr_14284 = state_14271;(statearr_14284[14] = inst_14151);
(statearr_14284[15] = inst_14149);
(statearr_14284[16] = inst_14150);
(statearr_14284[17] = inst_14148);
return statearr_14284;
})();var statearr_14285_14367 = state_14271__$1;(statearr_14285_14367[2] = null);
(statearr_14285_14367[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 37))
{var inst_14228 = (state_14271[9]);var inst_14237 = cljs.core.first.call(null,inst_14228);var state_14271__$1 = (function (){var statearr_14286 = state_14271;(statearr_14286[18] = inst_14237);
return statearr_14286;
})();var statearr_14287_14368 = state_14271__$1;(statearr_14287_14368[2] = null);
(statearr_14287_14368[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 6))
{var inst_14199 = (state_14271[19]);var inst_14198 = cljs.core.deref.call(null,cs);var inst_14199__$1 = cljs.core.keys.call(null,inst_14198);var inst_14200 = cljs.core.count.call(null,inst_14199__$1);var inst_14201 = cljs.core.reset_BANG_.call(null,dctr,inst_14200);var inst_14206 = cljs.core.seq.call(null,inst_14199__$1);var inst_14207 = inst_14206;var inst_14208 = null;var inst_14209 = 0;var inst_14210 = 0;var state_14271__$1 = (function (){var statearr_14288 = state_14271;(statearr_14288[20] = inst_14201);
(statearr_14288[10] = inst_14207);
(statearr_14288[11] = inst_14208);
(statearr_14288[12] = inst_14209);
(statearr_14288[13] = inst_14210);
(statearr_14288[19] = inst_14199__$1);
return statearr_14288;
})();var statearr_14289_14369 = state_14271__$1;(statearr_14289_14369[2] = null);
(statearr_14289_14369[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 38))
{var inst_14250 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14290_14370 = state_14271__$1;(statearr_14290_14370[2] = inst_14250);
(statearr_14290_14370[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 7))
{var inst_14267 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14291_14371 = state_14271__$1;(statearr_14291_14371[2] = inst_14267);
(statearr_14291_14371[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 39))
{var inst_14228 = (state_14271[9]);var inst_14246 = (state_14271[2]);var inst_14247 = cljs.core.next.call(null,inst_14228);var inst_14207 = inst_14247;var inst_14208 = null;var inst_14209 = 0;var inst_14210 = 0;var state_14271__$1 = (function (){var statearr_14292 = state_14271;(statearr_14292[10] = inst_14207);
(statearr_14292[11] = inst_14208);
(statearr_14292[12] = inst_14209);
(statearr_14292[13] = inst_14210);
(statearr_14292[21] = inst_14246);
return statearr_14292;
})();var statearr_14293_14372 = state_14271__$1;(statearr_14293_14372[2] = null);
(statearr_14293_14372[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 8))
{var inst_14151 = (state_14271[14]);var inst_14150 = (state_14271[16]);var inst_14153 = (inst_14151 < inst_14150);var inst_14154 = inst_14153;var state_14271__$1 = state_14271;if(cljs.core.truth_(inst_14154))
{var statearr_14294_14373 = state_14271__$1;(statearr_14294_14373[1] = 10);
} else
{var statearr_14295_14374 = state_14271__$1;(statearr_14295_14374[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 40))
{var inst_14237 = (state_14271[18]);var inst_14238 = (state_14271[2]);var inst_14239 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14240 = cljs.core.async.untap_STAR_.call(null,m,inst_14237);var state_14271__$1 = (function (){var statearr_14296 = state_14271;(statearr_14296[22] = inst_14239);
(statearr_14296[23] = inst_14238);
return statearr_14296;
})();var statearr_14297_14375 = state_14271__$1;(statearr_14297_14375[2] = inst_14240);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14271__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 9))
{var inst_14196 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14298_14376 = state_14271__$1;(statearr_14298_14376[2] = inst_14196);
(statearr_14298_14376[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 41))
{var inst_14139 = (state_14271[7]);var inst_14237 = (state_14271[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14271,40,Object,null,39);var inst_14244 = cljs.core.async.put_BANG_.call(null,inst_14237,inst_14139,done);var state_14271__$1 = state_14271;var statearr_14299_14377 = state_14271__$1;(statearr_14299_14377[2] = inst_14244);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14271__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 10))
{var inst_14151 = (state_14271[14]);var inst_14149 = (state_14271[15]);var inst_14157 = cljs.core._nth.call(null,inst_14149,inst_14151);var inst_14158 = cljs.core.nth.call(null,inst_14157,0,null);var inst_14159 = cljs.core.nth.call(null,inst_14157,1,null);var state_14271__$1 = (function (){var statearr_14300 = state_14271;(statearr_14300[24] = inst_14158);
return statearr_14300;
})();if(cljs.core.truth_(inst_14159))
{var statearr_14301_14378 = state_14271__$1;(statearr_14301_14378[1] = 13);
} else
{var statearr_14302_14379 = state_14271__$1;(statearr_14302_14379[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 42))
{var state_14271__$1 = state_14271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14271__$1,45,dchan);
} else
{if((state_val_14272 === 11))
{var inst_14168 = (state_14271[25]);var inst_14148 = (state_14271[17]);var inst_14168__$1 = cljs.core.seq.call(null,inst_14148);var state_14271__$1 = (function (){var statearr_14303 = state_14271;(statearr_14303[25] = inst_14168__$1);
return statearr_14303;
})();if(inst_14168__$1)
{var statearr_14304_14380 = state_14271__$1;(statearr_14304_14380[1] = 16);
} else
{var statearr_14305_14381 = state_14271__$1;(statearr_14305_14381[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 43))
{var state_14271__$1 = state_14271;var statearr_14306_14382 = state_14271__$1;(statearr_14306_14382[2] = null);
(statearr_14306_14382[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 12))
{var inst_14194 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14307_14383 = state_14271__$1;(statearr_14307_14383[2] = inst_14194);
(statearr_14307_14383[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 44))
{var inst_14264 = (state_14271[2]);var state_14271__$1 = (function (){var statearr_14308 = state_14271;(statearr_14308[26] = inst_14264);
return statearr_14308;
})();var statearr_14309_14384 = state_14271__$1;(statearr_14309_14384[2] = null);
(statearr_14309_14384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 13))
{var inst_14158 = (state_14271[24]);var inst_14161 = cljs.core.async.close_BANG_.call(null,inst_14158);var state_14271__$1 = state_14271;var statearr_14310_14385 = state_14271__$1;(statearr_14310_14385[2] = inst_14161);
(statearr_14310_14385[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 45))
{var inst_14261 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14314_14386 = state_14271__$1;(statearr_14314_14386[2] = inst_14261);
(statearr_14314_14386[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 14))
{var state_14271__$1 = state_14271;var statearr_14315_14387 = state_14271__$1;(statearr_14315_14387[2] = null);
(statearr_14315_14387[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 15))
{var inst_14151 = (state_14271[14]);var inst_14149 = (state_14271[15]);var inst_14150 = (state_14271[16]);var inst_14148 = (state_14271[17]);var inst_14164 = (state_14271[2]);var inst_14165 = (inst_14151 + 1);var tmp14311 = inst_14149;var tmp14312 = inst_14150;var tmp14313 = inst_14148;var inst_14148__$1 = tmp14313;var inst_14149__$1 = tmp14311;var inst_14150__$1 = tmp14312;var inst_14151__$1 = inst_14165;var state_14271__$1 = (function (){var statearr_14316 = state_14271;(statearr_14316[27] = inst_14164);
(statearr_14316[14] = inst_14151__$1);
(statearr_14316[15] = inst_14149__$1);
(statearr_14316[16] = inst_14150__$1);
(statearr_14316[17] = inst_14148__$1);
return statearr_14316;
})();var statearr_14317_14388 = state_14271__$1;(statearr_14317_14388[2] = null);
(statearr_14317_14388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 16))
{var inst_14168 = (state_14271[25]);var inst_14170 = cljs.core.chunked_seq_QMARK_.call(null,inst_14168);var state_14271__$1 = state_14271;if(inst_14170)
{var statearr_14318_14389 = state_14271__$1;(statearr_14318_14389[1] = 19);
} else
{var statearr_14319_14390 = state_14271__$1;(statearr_14319_14390[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 17))
{var state_14271__$1 = state_14271;var statearr_14320_14391 = state_14271__$1;(statearr_14320_14391[2] = null);
(statearr_14320_14391[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 18))
{var inst_14192 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14321_14392 = state_14271__$1;(statearr_14321_14392[2] = inst_14192);
(statearr_14321_14392[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 19))
{var inst_14168 = (state_14271[25]);var inst_14172 = cljs.core.chunk_first.call(null,inst_14168);var inst_14173 = cljs.core.chunk_rest.call(null,inst_14168);var inst_14174 = cljs.core.count.call(null,inst_14172);var inst_14148 = inst_14173;var inst_14149 = inst_14172;var inst_14150 = inst_14174;var inst_14151 = 0;var state_14271__$1 = (function (){var statearr_14322 = state_14271;(statearr_14322[14] = inst_14151);
(statearr_14322[15] = inst_14149);
(statearr_14322[16] = inst_14150);
(statearr_14322[17] = inst_14148);
return statearr_14322;
})();var statearr_14323_14393 = state_14271__$1;(statearr_14323_14393[2] = null);
(statearr_14323_14393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 20))
{var inst_14168 = (state_14271[25]);var inst_14178 = cljs.core.first.call(null,inst_14168);var inst_14179 = cljs.core.nth.call(null,inst_14178,0,null);var inst_14180 = cljs.core.nth.call(null,inst_14178,1,null);var state_14271__$1 = (function (){var statearr_14324 = state_14271;(statearr_14324[28] = inst_14179);
return statearr_14324;
})();if(cljs.core.truth_(inst_14180))
{var statearr_14325_14394 = state_14271__$1;(statearr_14325_14394[1] = 22);
} else
{var statearr_14326_14395 = state_14271__$1;(statearr_14326_14395[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 21))
{var inst_14189 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14327_14396 = state_14271__$1;(statearr_14327_14396[2] = inst_14189);
(statearr_14327_14396[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 22))
{var inst_14179 = (state_14271[28]);var inst_14182 = cljs.core.async.close_BANG_.call(null,inst_14179);var state_14271__$1 = state_14271;var statearr_14328_14397 = state_14271__$1;(statearr_14328_14397[2] = inst_14182);
(statearr_14328_14397[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 23))
{var state_14271__$1 = state_14271;var statearr_14329_14398 = state_14271__$1;(statearr_14329_14398[2] = null);
(statearr_14329_14398[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 24))
{var inst_14168 = (state_14271[25]);var inst_14185 = (state_14271[2]);var inst_14186 = cljs.core.next.call(null,inst_14168);var inst_14148 = inst_14186;var inst_14149 = null;var inst_14150 = 0;var inst_14151 = 0;var state_14271__$1 = (function (){var statearr_14330 = state_14271;(statearr_14330[29] = inst_14185);
(statearr_14330[14] = inst_14151);
(statearr_14330[15] = inst_14149);
(statearr_14330[16] = inst_14150);
(statearr_14330[17] = inst_14148);
return statearr_14330;
})();var statearr_14331_14399 = state_14271__$1;(statearr_14331_14399[2] = null);
(statearr_14331_14399[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 25))
{var inst_14209 = (state_14271[12]);var inst_14210 = (state_14271[13]);var inst_14212 = (inst_14210 < inst_14209);var inst_14213 = inst_14212;var state_14271__$1 = state_14271;if(cljs.core.truth_(inst_14213))
{var statearr_14332_14400 = state_14271__$1;(statearr_14332_14400[1] = 27);
} else
{var statearr_14333_14401 = state_14271__$1;(statearr_14333_14401[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 26))
{var inst_14199 = (state_14271[19]);var inst_14257 = (state_14271[2]);var inst_14258 = cljs.core.seq.call(null,inst_14199);var state_14271__$1 = (function (){var statearr_14334 = state_14271;(statearr_14334[30] = inst_14257);
return statearr_14334;
})();if(inst_14258)
{var statearr_14335_14402 = state_14271__$1;(statearr_14335_14402[1] = 42);
} else
{var statearr_14336_14403 = state_14271__$1;(statearr_14336_14403[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 27))
{var inst_14208 = (state_14271[11]);var inst_14210 = (state_14271[13]);var inst_14215 = cljs.core._nth.call(null,inst_14208,inst_14210);var state_14271__$1 = (function (){var statearr_14337 = state_14271;(statearr_14337[8] = inst_14215);
return statearr_14337;
})();var statearr_14338_14404 = state_14271__$1;(statearr_14338_14404[2] = null);
(statearr_14338_14404[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 28))
{var inst_14207 = (state_14271[10]);var inst_14228 = (state_14271[9]);var inst_14228__$1 = cljs.core.seq.call(null,inst_14207);var state_14271__$1 = (function (){var statearr_14342 = state_14271;(statearr_14342[9] = inst_14228__$1);
return statearr_14342;
})();if(inst_14228__$1)
{var statearr_14343_14405 = state_14271__$1;(statearr_14343_14405[1] = 33);
} else
{var statearr_14344_14406 = state_14271__$1;(statearr_14344_14406[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 29))
{var inst_14255 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14345_14407 = state_14271__$1;(statearr_14345_14407[2] = inst_14255);
(statearr_14345_14407[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 30))
{var inst_14207 = (state_14271[10]);var inst_14208 = (state_14271[11]);var inst_14209 = (state_14271[12]);var inst_14210 = (state_14271[13]);var inst_14224 = (state_14271[2]);var inst_14225 = (inst_14210 + 1);var tmp14339 = inst_14207;var tmp14340 = inst_14208;var tmp14341 = inst_14209;var inst_14207__$1 = tmp14339;var inst_14208__$1 = tmp14340;var inst_14209__$1 = tmp14341;var inst_14210__$1 = inst_14225;var state_14271__$1 = (function (){var statearr_14346 = state_14271;(statearr_14346[10] = inst_14207__$1);
(statearr_14346[11] = inst_14208__$1);
(statearr_14346[12] = inst_14209__$1);
(statearr_14346[13] = inst_14210__$1);
(statearr_14346[31] = inst_14224);
return statearr_14346;
})();var statearr_14347_14408 = state_14271__$1;(statearr_14347_14408[2] = null);
(statearr_14347_14408[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 31))
{var inst_14215 = (state_14271[8]);var inst_14216 = (state_14271[2]);var inst_14217 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14218 = cljs.core.async.untap_STAR_.call(null,m,inst_14215);var state_14271__$1 = (function (){var statearr_14348 = state_14271;(statearr_14348[32] = inst_14216);
(statearr_14348[33] = inst_14217);
return statearr_14348;
})();var statearr_14349_14409 = state_14271__$1;(statearr_14349_14409[2] = inst_14218);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14271__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14353[0] = state_machine__5507__auto__);
(statearr_14353[1] = 1);
return statearr_14353;
});
var state_machine__5507__auto____1 = (function (state_14271){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14354){if((e14354 instanceof Object))
{var ex__5510__auto__ = e14354;var statearr_14355_14410 = state_14271;(statearr_14355_14410[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14411 = state_14271;
state_14271 = G__14411;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14271){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14356 = f__5522__auto__.call(null);(statearr_14356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14357);
return statearr_14356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj14413 = {};return obj14413;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14523 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14523 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14524){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta14524 = meta14524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14523.cljs$lang$type = true;
cljs.core.async.t14523.cljs$lang$ctorStr = "cljs.core.async/t14523";
cljs.core.async.t14523.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14523");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14523.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14525){var self__ = this;
var _14525__$1 = this;return self__.meta14524;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14525,meta14524__$1){var self__ = this;
var _14525__$1 = this;return (new cljs.core.async.t14523(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14524__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14523 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14523(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14524){return (new cljs.core.async.t14523(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14524));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14523(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14590){var state_val_14591 = (state_14590[1]);if((state_val_14591 === 1))
{var inst_14529 = (state_14590[7]);var inst_14529__$1 = calc_state.call(null);var inst_14530 = cljs.core.seq_QMARK_.call(null,inst_14529__$1);var state_14590__$1 = (function (){var statearr_14592 = state_14590;(statearr_14592[7] = inst_14529__$1);
return statearr_14592;
})();if(inst_14530)
{var statearr_14593_14633 = state_14590__$1;(statearr_14593_14633[1] = 2);
} else
{var statearr_14594_14634 = state_14590__$1;(statearr_14594_14634[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 2))
{var inst_14529 = (state_14590[7]);var inst_14532 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14529);var state_14590__$1 = state_14590;var statearr_14595_14635 = state_14590__$1;(statearr_14595_14635[2] = inst_14532);
(statearr_14595_14635[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 3))
{var inst_14529 = (state_14590[7]);var state_14590__$1 = state_14590;var statearr_14596_14636 = state_14590__$1;(statearr_14596_14636[2] = inst_14529);
(statearr_14596_14636[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 4))
{var inst_14529 = (state_14590[7]);var inst_14535 = (state_14590[2]);var inst_14536 = cljs.core.get.call(null,inst_14535,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14537 = cljs.core.get.call(null,inst_14535,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14538 = cljs.core.get.call(null,inst_14535,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14539 = inst_14529;var state_14590__$1 = (function (){var statearr_14597 = state_14590;(statearr_14597[8] = inst_14536);
(statearr_14597[9] = inst_14537);
(statearr_14597[10] = inst_14538);
(statearr_14597[11] = inst_14539);
return statearr_14597;
})();var statearr_14598_14637 = state_14590__$1;(statearr_14598_14637[2] = null);
(statearr_14598_14637[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 5))
{var inst_14539 = (state_14590[11]);var inst_14542 = cljs.core.seq_QMARK_.call(null,inst_14539);var state_14590__$1 = state_14590;if(inst_14542)
{var statearr_14599_14638 = state_14590__$1;(statearr_14599_14638[1] = 7);
} else
{var statearr_14600_14639 = state_14590__$1;(statearr_14600_14639[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 6))
{var inst_14588 = (state_14590[2]);var state_14590__$1 = state_14590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14590__$1,inst_14588);
} else
{if((state_val_14591 === 7))
{var inst_14539 = (state_14590[11]);var inst_14544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14539);var state_14590__$1 = state_14590;var statearr_14601_14640 = state_14590__$1;(statearr_14601_14640[2] = inst_14544);
(statearr_14601_14640[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 8))
{var inst_14539 = (state_14590[11]);var state_14590__$1 = state_14590;var statearr_14602_14641 = state_14590__$1;(statearr_14602_14641[2] = inst_14539);
(statearr_14602_14641[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 9))
{var inst_14547 = (state_14590[12]);var inst_14547__$1 = (state_14590[2]);var inst_14548 = cljs.core.get.call(null,inst_14547__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14549 = cljs.core.get.call(null,inst_14547__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14550 = cljs.core.get.call(null,inst_14547__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14590__$1 = (function (){var statearr_14603 = state_14590;(statearr_14603[12] = inst_14547__$1);
(statearr_14603[13] = inst_14549);
(statearr_14603[14] = inst_14550);
return statearr_14603;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14590__$1,10,inst_14548);
} else
{if((state_val_14591 === 10))
{var inst_14555 = (state_14590[15]);var inst_14554 = (state_14590[16]);var inst_14553 = (state_14590[2]);var inst_14554__$1 = cljs.core.nth.call(null,inst_14553,0,null);var inst_14555__$1 = cljs.core.nth.call(null,inst_14553,1,null);var inst_14556 = (inst_14554__$1 == null);var inst_14557 = cljs.core._EQ_.call(null,inst_14555__$1,change);var inst_14558 = (inst_14556) || (inst_14557);var state_14590__$1 = (function (){var statearr_14604 = state_14590;(statearr_14604[15] = inst_14555__$1);
(statearr_14604[16] = inst_14554__$1);
return statearr_14604;
})();if(cljs.core.truth_(inst_14558))
{var statearr_14605_14642 = state_14590__$1;(statearr_14605_14642[1] = 11);
} else
{var statearr_14606_14643 = state_14590__$1;(statearr_14606_14643[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 11))
{var inst_14554 = (state_14590[16]);var inst_14560 = (inst_14554 == null);var state_14590__$1 = state_14590;if(cljs.core.truth_(inst_14560))
{var statearr_14607_14644 = state_14590__$1;(statearr_14607_14644[1] = 14);
} else
{var statearr_14608_14645 = state_14590__$1;(statearr_14608_14645[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 12))
{var inst_14569 = (state_14590[17]);var inst_14555 = (state_14590[15]);var inst_14550 = (state_14590[14]);var inst_14569__$1 = inst_14550.call(null,inst_14555);var state_14590__$1 = (function (){var statearr_14609 = state_14590;(statearr_14609[17] = inst_14569__$1);
return statearr_14609;
})();if(cljs.core.truth_(inst_14569__$1))
{var statearr_14610_14646 = state_14590__$1;(statearr_14610_14646[1] = 17);
} else
{var statearr_14611_14647 = state_14590__$1;(statearr_14611_14647[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 13))
{var inst_14586 = (state_14590[2]);var state_14590__$1 = state_14590;var statearr_14612_14648 = state_14590__$1;(statearr_14612_14648[2] = inst_14586);
(statearr_14612_14648[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 14))
{var inst_14555 = (state_14590[15]);var inst_14562 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14555);var state_14590__$1 = state_14590;var statearr_14613_14649 = state_14590__$1;(statearr_14613_14649[2] = inst_14562);
(statearr_14613_14649[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 15))
{var state_14590__$1 = state_14590;var statearr_14614_14650 = state_14590__$1;(statearr_14614_14650[2] = null);
(statearr_14614_14650[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 16))
{var inst_14565 = (state_14590[2]);var inst_14566 = calc_state.call(null);var inst_14539 = inst_14566;var state_14590__$1 = (function (){var statearr_14615 = state_14590;(statearr_14615[18] = inst_14565);
(statearr_14615[11] = inst_14539);
return statearr_14615;
})();var statearr_14616_14651 = state_14590__$1;(statearr_14616_14651[2] = null);
(statearr_14616_14651[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 17))
{var inst_14569 = (state_14590[17]);var state_14590__$1 = state_14590;var statearr_14617_14652 = state_14590__$1;(statearr_14617_14652[2] = inst_14569);
(statearr_14617_14652[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 18))
{var inst_14549 = (state_14590[13]);var inst_14555 = (state_14590[15]);var inst_14550 = (state_14590[14]);var inst_14572 = cljs.core.empty_QMARK_.call(null,inst_14550);var inst_14573 = inst_14549.call(null,inst_14555);var inst_14574 = cljs.core.not.call(null,inst_14573);var inst_14575 = (inst_14572) && (inst_14574);var state_14590__$1 = state_14590;var statearr_14618_14653 = state_14590__$1;(statearr_14618_14653[2] = inst_14575);
(statearr_14618_14653[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 19))
{var inst_14577 = (state_14590[2]);var state_14590__$1 = state_14590;if(cljs.core.truth_(inst_14577))
{var statearr_14619_14654 = state_14590__$1;(statearr_14619_14654[1] = 20);
} else
{var statearr_14620_14655 = state_14590__$1;(statearr_14620_14655[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 20))
{var inst_14554 = (state_14590[16]);var state_14590__$1 = state_14590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14590__$1,23,out,inst_14554);
} else
{if((state_val_14591 === 21))
{var state_14590__$1 = state_14590;var statearr_14621_14656 = state_14590__$1;(statearr_14621_14656[2] = null);
(statearr_14621_14656[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 22))
{var inst_14547 = (state_14590[12]);var inst_14583 = (state_14590[2]);var inst_14539 = inst_14547;var state_14590__$1 = (function (){var statearr_14622 = state_14590;(statearr_14622[19] = inst_14583);
(statearr_14622[11] = inst_14539);
return statearr_14622;
})();var statearr_14623_14657 = state_14590__$1;(statearr_14623_14657[2] = null);
(statearr_14623_14657[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14591 === 23))
{var inst_14580 = (state_14590[2]);var state_14590__$1 = state_14590;var statearr_14624_14658 = state_14590__$1;(statearr_14624_14658[2] = inst_14580);
(statearr_14624_14658[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14628[0] = state_machine__5507__auto__);
(statearr_14628[1] = 1);
return statearr_14628;
});
var state_machine__5507__auto____1 = (function (state_14590){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14629){if((e14629 instanceof Object))
{var ex__5510__auto__ = e14629;var statearr_14630_14659 = state_14590;(statearr_14630_14659[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14660 = state_14590;
state_14590 = G__14660;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14631 = f__5522__auto__.call(null);(statearr_14631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14632);
return statearr_14631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14662 = {};return obj14662;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__14663_SHARP_){if(cljs.core.truth_(p1__14663_SHARP_.call(null,topic)))
{return p1__14663_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14663_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14788 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14789){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14789 = meta14789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14788.cljs$lang$type = true;
cljs.core.async.t14788.cljs$lang$ctorStr = "cljs.core.async/t14788";
cljs.core.async.t14788.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14788");
});})(mults,ensure_mult))
;
cljs.core.async.t14788.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14788.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14788.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14788.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14790){var self__ = this;
var _14790__$1 = this;return self__.meta14789;
});})(mults,ensure_mult))
;
cljs.core.async.t14788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14790,meta14789__$1){var self__ = this;
var _14790__$1 = this;return (new cljs.core.async.t14788(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14789__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14788 = ((function (mults,ensure_mult){
return (function __GT_t14788(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14789){return (new cljs.core.async.t14788(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14789));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14788(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14912 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14864){var state_val_14865 = (state_14864[1]);if((state_val_14865 === 1))
{var state_14864__$1 = state_14864;var statearr_14866_14913 = state_14864__$1;(statearr_14866_14913[2] = null);
(statearr_14866_14913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 2))
{var state_14864__$1 = state_14864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14864__$1,4,ch);
} else
{if((state_val_14865 === 3))
{var inst_14862 = (state_14864[2]);var state_14864__$1 = state_14864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14864__$1,inst_14862);
} else
{if((state_val_14865 === 4))
{var inst_14793 = (state_14864[7]);var inst_14793__$1 = (state_14864[2]);var inst_14794 = (inst_14793__$1 == null);var state_14864__$1 = (function (){var statearr_14867 = state_14864;(statearr_14867[7] = inst_14793__$1);
return statearr_14867;
})();if(cljs.core.truth_(inst_14794))
{var statearr_14868_14914 = state_14864__$1;(statearr_14868_14914[1] = 5);
} else
{var statearr_14869_14915 = state_14864__$1;(statearr_14869_14915[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 5))
{var inst_14800 = cljs.core.deref.call(null,mults);var inst_14801 = cljs.core.vals.call(null,inst_14800);var inst_14802 = cljs.core.seq.call(null,inst_14801);var inst_14803 = inst_14802;var inst_14804 = null;var inst_14805 = 0;var inst_14806 = 0;var state_14864__$1 = (function (){var statearr_14870 = state_14864;(statearr_14870[8] = inst_14803);
(statearr_14870[9] = inst_14805);
(statearr_14870[10] = inst_14804);
(statearr_14870[11] = inst_14806);
return statearr_14870;
})();var statearr_14871_14916 = state_14864__$1;(statearr_14871_14916[2] = null);
(statearr_14871_14916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 6))
{var inst_14843 = (state_14864[12]);var inst_14841 = (state_14864[13]);var inst_14793 = (state_14864[7]);var inst_14841__$1 = topic_fn.call(null,inst_14793);var inst_14842 = cljs.core.deref.call(null,mults);var inst_14843__$1 = cljs.core.get.call(null,inst_14842,inst_14841__$1);var state_14864__$1 = (function (){var statearr_14872 = state_14864;(statearr_14872[12] = inst_14843__$1);
(statearr_14872[13] = inst_14841__$1);
return statearr_14872;
})();if(cljs.core.truth_(inst_14843__$1))
{var statearr_14873_14917 = state_14864__$1;(statearr_14873_14917[1] = 19);
} else
{var statearr_14874_14918 = state_14864__$1;(statearr_14874_14918[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 7))
{var inst_14860 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14875_14919 = state_14864__$1;(statearr_14875_14919[2] = inst_14860);
(statearr_14875_14919[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 8))
{var inst_14805 = (state_14864[9]);var inst_14806 = (state_14864[11]);var inst_14808 = (inst_14806 < inst_14805);var inst_14809 = inst_14808;var state_14864__$1 = state_14864;if(cljs.core.truth_(inst_14809))
{var statearr_14879_14920 = state_14864__$1;(statearr_14879_14920[1] = 10);
} else
{var statearr_14880_14921 = state_14864__$1;(statearr_14880_14921[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 9))
{var inst_14839 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14881_14922 = state_14864__$1;(statearr_14881_14922[2] = inst_14839);
(statearr_14881_14922[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 10))
{var inst_14803 = (state_14864[8]);var inst_14805 = (state_14864[9]);var inst_14804 = (state_14864[10]);var inst_14806 = (state_14864[11]);var inst_14811 = cljs.core._nth.call(null,inst_14804,inst_14806);var inst_14812 = cljs.core.async.muxch_STAR_.call(null,inst_14811);var inst_14813 = cljs.core.async.close_BANG_.call(null,inst_14812);var inst_14814 = (inst_14806 + 1);var tmp14876 = inst_14803;var tmp14877 = inst_14805;var tmp14878 = inst_14804;var inst_14803__$1 = tmp14876;var inst_14804__$1 = tmp14878;var inst_14805__$1 = tmp14877;var inst_14806__$1 = inst_14814;var state_14864__$1 = (function (){var statearr_14882 = state_14864;(statearr_14882[8] = inst_14803__$1);
(statearr_14882[9] = inst_14805__$1);
(statearr_14882[10] = inst_14804__$1);
(statearr_14882[11] = inst_14806__$1);
(statearr_14882[14] = inst_14813);
return statearr_14882;
})();var statearr_14883_14923 = state_14864__$1;(statearr_14883_14923[2] = null);
(statearr_14883_14923[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 11))
{var inst_14817 = (state_14864[15]);var inst_14803 = (state_14864[8]);var inst_14817__$1 = cljs.core.seq.call(null,inst_14803);var state_14864__$1 = (function (){var statearr_14884 = state_14864;(statearr_14884[15] = inst_14817__$1);
return statearr_14884;
})();if(inst_14817__$1)
{var statearr_14885_14924 = state_14864__$1;(statearr_14885_14924[1] = 13);
} else
{var statearr_14886_14925 = state_14864__$1;(statearr_14886_14925[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 12))
{var inst_14837 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14887_14926 = state_14864__$1;(statearr_14887_14926[2] = inst_14837);
(statearr_14887_14926[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 13))
{var inst_14817 = (state_14864[15]);var inst_14819 = cljs.core.chunked_seq_QMARK_.call(null,inst_14817);var state_14864__$1 = state_14864;if(inst_14819)
{var statearr_14888_14927 = state_14864__$1;(statearr_14888_14927[1] = 16);
} else
{var statearr_14889_14928 = state_14864__$1;(statearr_14889_14928[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 14))
{var state_14864__$1 = state_14864;var statearr_14890_14929 = state_14864__$1;(statearr_14890_14929[2] = null);
(statearr_14890_14929[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 15))
{var inst_14835 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14891_14930 = state_14864__$1;(statearr_14891_14930[2] = inst_14835);
(statearr_14891_14930[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 16))
{var inst_14817 = (state_14864[15]);var inst_14821 = cljs.core.chunk_first.call(null,inst_14817);var inst_14822 = cljs.core.chunk_rest.call(null,inst_14817);var inst_14823 = cljs.core.count.call(null,inst_14821);var inst_14803 = inst_14822;var inst_14804 = inst_14821;var inst_14805 = inst_14823;var inst_14806 = 0;var state_14864__$1 = (function (){var statearr_14892 = state_14864;(statearr_14892[8] = inst_14803);
(statearr_14892[9] = inst_14805);
(statearr_14892[10] = inst_14804);
(statearr_14892[11] = inst_14806);
return statearr_14892;
})();var statearr_14893_14931 = state_14864__$1;(statearr_14893_14931[2] = null);
(statearr_14893_14931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 17))
{var inst_14817 = (state_14864[15]);var inst_14826 = cljs.core.first.call(null,inst_14817);var inst_14827 = cljs.core.async.muxch_STAR_.call(null,inst_14826);var inst_14828 = cljs.core.async.close_BANG_.call(null,inst_14827);var inst_14829 = cljs.core.next.call(null,inst_14817);var inst_14803 = inst_14829;var inst_14804 = null;var inst_14805 = 0;var inst_14806 = 0;var state_14864__$1 = (function (){var statearr_14894 = state_14864;(statearr_14894[8] = inst_14803);
(statearr_14894[16] = inst_14828);
(statearr_14894[9] = inst_14805);
(statearr_14894[10] = inst_14804);
(statearr_14894[11] = inst_14806);
return statearr_14894;
})();var statearr_14895_14932 = state_14864__$1;(statearr_14895_14932[2] = null);
(statearr_14895_14932[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 18))
{var inst_14832 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14896_14933 = state_14864__$1;(statearr_14896_14933[2] = inst_14832);
(statearr_14896_14933[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 19))
{var state_14864__$1 = state_14864;var statearr_14897_14934 = state_14864__$1;(statearr_14897_14934[2] = null);
(statearr_14897_14934[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 20))
{var state_14864__$1 = state_14864;var statearr_14898_14935 = state_14864__$1;(statearr_14898_14935[2] = null);
(statearr_14898_14935[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 21))
{var inst_14857 = (state_14864[2]);var state_14864__$1 = (function (){var statearr_14899 = state_14864;(statearr_14899[17] = inst_14857);
return statearr_14899;
})();var statearr_14900_14936 = state_14864__$1;(statearr_14900_14936[2] = null);
(statearr_14900_14936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 22))
{var inst_14854 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14901_14937 = state_14864__$1;(statearr_14901_14937[2] = inst_14854);
(statearr_14901_14937[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 23))
{var inst_14841 = (state_14864[13]);var inst_14845 = (state_14864[2]);var inst_14846 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14841);var state_14864__$1 = (function (){var statearr_14902 = state_14864;(statearr_14902[18] = inst_14845);
return statearr_14902;
})();var statearr_14903_14938 = state_14864__$1;(statearr_14903_14938[2] = inst_14846);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14864__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 24))
{var inst_14843 = (state_14864[12]);var inst_14793 = (state_14864[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14864,23,Object,null,22);var inst_14850 = cljs.core.async.muxch_STAR_.call(null,inst_14843);var state_14864__$1 = state_14864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14864__$1,25,inst_14850,inst_14793);
} else
{if((state_val_14865 === 25))
{var inst_14852 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14904_14939 = state_14864__$1;(statearr_14904_14939[2] = inst_14852);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14864__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14908[0] = state_machine__5507__auto__);
(statearr_14908[1] = 1);
return statearr_14908;
});
var state_machine__5507__auto____1 = (function (state_14864){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14864);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14909){if((e14909 instanceof Object))
{var ex__5510__auto__ = e14909;var statearr_14910_14940 = state_14864;(statearr_14910_14940[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14941 = state_14864;
state_14864 = G__14941;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14864){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14911 = f__5522__auto__.call(null);(statearr_14911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14912);
return statearr_14911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___15078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15048){var state_val_15049 = (state_15048[1]);if((state_val_15049 === 1))
{var state_15048__$1 = state_15048;var statearr_15050_15079 = state_15048__$1;(statearr_15050_15079[2] = null);
(statearr_15050_15079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 2))
{var inst_15011 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15012 = 0;var state_15048__$1 = (function (){var statearr_15051 = state_15048;(statearr_15051[7] = inst_15012);
(statearr_15051[8] = inst_15011);
return statearr_15051;
})();var statearr_15052_15080 = state_15048__$1;(statearr_15052_15080[2] = null);
(statearr_15052_15080[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 3))
{var inst_15046 = (state_15048[2]);var state_15048__$1 = state_15048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15048__$1,inst_15046);
} else
{if((state_val_15049 === 4))
{var inst_15012 = (state_15048[7]);var inst_15014 = (inst_15012 < cnt);var state_15048__$1 = state_15048;if(cljs.core.truth_(inst_15014))
{var statearr_15053_15081 = state_15048__$1;(statearr_15053_15081[1] = 6);
} else
{var statearr_15054_15082 = state_15048__$1;(statearr_15054_15082[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 5))
{var inst_15032 = (state_15048[2]);var state_15048__$1 = (function (){var statearr_15055 = state_15048;(statearr_15055[9] = inst_15032);
return statearr_15055;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15048__$1,12,dchan);
} else
{if((state_val_15049 === 6))
{var state_15048__$1 = state_15048;var statearr_15056_15083 = state_15048__$1;(statearr_15056_15083[2] = null);
(statearr_15056_15083[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 7))
{var state_15048__$1 = state_15048;var statearr_15057_15084 = state_15048__$1;(statearr_15057_15084[2] = null);
(statearr_15057_15084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 8))
{var inst_15030 = (state_15048[2]);var state_15048__$1 = state_15048;var statearr_15058_15085 = state_15048__$1;(statearr_15058_15085[2] = inst_15030);
(statearr_15058_15085[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 9))
{var inst_15012 = (state_15048[7]);var inst_15025 = (state_15048[2]);var inst_15026 = (inst_15012 + 1);var inst_15012__$1 = inst_15026;var state_15048__$1 = (function (){var statearr_15059 = state_15048;(statearr_15059[7] = inst_15012__$1);
(statearr_15059[10] = inst_15025);
return statearr_15059;
})();var statearr_15060_15086 = state_15048__$1;(statearr_15060_15086[2] = null);
(statearr_15060_15086[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 10))
{var inst_15016 = (state_15048[2]);var inst_15017 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15048__$1 = (function (){var statearr_15061 = state_15048;(statearr_15061[11] = inst_15016);
return statearr_15061;
})();var statearr_15062_15087 = state_15048__$1;(statearr_15062_15087[2] = inst_15017);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15048__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 11))
{var inst_15012 = (state_15048[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15048,10,Object,null,9);var inst_15021 = chs__$1.call(null,inst_15012);var inst_15022 = done.call(null,inst_15012);var inst_15023 = cljs.core.async.take_BANG_.call(null,inst_15021,inst_15022);var state_15048__$1 = state_15048;var statearr_15063_15088 = state_15048__$1;(statearr_15063_15088[2] = inst_15023);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15048__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 12))
{var inst_15034 = (state_15048[12]);var inst_15034__$1 = (state_15048[2]);var inst_15035 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15034__$1);var state_15048__$1 = (function (){var statearr_15064 = state_15048;(statearr_15064[12] = inst_15034__$1);
return statearr_15064;
})();if(cljs.core.truth_(inst_15035))
{var statearr_15065_15089 = state_15048__$1;(statearr_15065_15089[1] = 13);
} else
{var statearr_15066_15090 = state_15048__$1;(statearr_15066_15090[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 13))
{var inst_15037 = cljs.core.async.close_BANG_.call(null,out);var state_15048__$1 = state_15048;var statearr_15067_15091 = state_15048__$1;(statearr_15067_15091[2] = inst_15037);
(statearr_15067_15091[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 14))
{var inst_15034 = (state_15048[12]);var inst_15039 = cljs.core.apply.call(null,f,inst_15034);var state_15048__$1 = state_15048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15048__$1,16,out,inst_15039);
} else
{if((state_val_15049 === 15))
{var inst_15044 = (state_15048[2]);var state_15048__$1 = state_15048;var statearr_15068_15092 = state_15048__$1;(statearr_15068_15092[2] = inst_15044);
(statearr_15068_15092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 16))
{var inst_15041 = (state_15048[2]);var state_15048__$1 = (function (){var statearr_15069 = state_15048;(statearr_15069[13] = inst_15041);
return statearr_15069;
})();var statearr_15070_15093 = state_15048__$1;(statearr_15070_15093[2] = null);
(statearr_15070_15093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15074[0] = state_machine__5507__auto__);
(statearr_15074[1] = 1);
return statearr_15074;
});
var state_machine__5507__auto____1 = (function (state_15048){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15048);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15075){if((e15075 instanceof Object))
{var ex__5510__auto__ = e15075;var statearr_15076_15094 = state_15048;(statearr_15076_15094[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15048);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15095 = state_15048;
state_15048 = G__15095;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15048){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15077 = f__5522__auto__.call(null);(statearr_15077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15078);
return statearr_15077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15203 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15179){var state_val_15180 = (state_15179[1]);if((state_val_15180 === 1))
{var inst_15150 = cljs.core.vec.call(null,chs);var inst_15151 = inst_15150;var state_15179__$1 = (function (){var statearr_15181 = state_15179;(statearr_15181[7] = inst_15151);
return statearr_15181;
})();var statearr_15182_15204 = state_15179__$1;(statearr_15182_15204[2] = null);
(statearr_15182_15204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15180 === 2))
{var inst_15151 = (state_15179[7]);var inst_15153 = cljs.core.count.call(null,inst_15151);var inst_15154 = (inst_15153 > 0);var state_15179__$1 = state_15179;if(cljs.core.truth_(inst_15154))
{var statearr_15183_15205 = state_15179__$1;(statearr_15183_15205[1] = 4);
} else
{var statearr_15184_15206 = state_15179__$1;(statearr_15184_15206[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15180 === 3))
{var inst_15177 = (state_15179[2]);var state_15179__$1 = state_15179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15179__$1,inst_15177);
} else
{if((state_val_15180 === 4))
{var inst_15151 = (state_15179[7]);var state_15179__$1 = state_15179;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15179__$1,7,inst_15151);
} else
{if((state_val_15180 === 5))
{var inst_15173 = cljs.core.async.close_BANG_.call(null,out);var state_15179__$1 = state_15179;var statearr_15185_15207 = state_15179__$1;(statearr_15185_15207[2] = inst_15173);
(statearr_15185_15207[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15180 === 6))
{var inst_15175 = (state_15179[2]);var state_15179__$1 = state_15179;var statearr_15186_15208 = state_15179__$1;(statearr_15186_15208[2] = inst_15175);
(statearr_15186_15208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15180 === 7))
{var inst_15158 = (state_15179[8]);var inst_15159 = (state_15179[9]);var inst_15158__$1 = (state_15179[2]);var inst_15159__$1 = cljs.core.nth.call(null,inst_15158__$1,0,null);var inst_15160 = cljs.core.nth.call(null,inst_15158__$1,1,null);var inst_15161 = (inst_15159__$1 == null);var state_15179__$1 = (function (){var statearr_15187 = state_15179;(statearr_15187[10] = inst_15160);
(statearr_15187[8] = inst_15158__$1);
(statearr_15187[9] = inst_15159__$1);
return statearr_15187;
})();if(cljs.core.truth_(inst_15161))
{var statearr_15188_15209 = state_15179__$1;(statearr_15188_15209[1] = 8);
} else
{var statearr_15189_15210 = state_15179__$1;(statearr_15189_15210[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15180 === 8))
{var inst_15160 = (state_15179[10]);var inst_15158 = (state_15179[8]);var inst_15151 = (state_15179[7]);var inst_15159 = (state_15179[9]);var inst_15163 = (function (){var c = inst_15160;var v = inst_15159;var vec__15156 = inst_15158;var cs = inst_15151;return ((function (c,v,vec__15156,cs,inst_15160,inst_15158,inst_15151,inst_15159,state_val_15180){
return (function (p1__15096_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15096_SHARP_);
});
;})(c,v,vec__15156,cs,inst_15160,inst_15158,inst_15151,inst_15159,state_val_15180))
})();var inst_15164 = cljs.core.filterv.call(null,inst_15163,inst_15151);var inst_15151__$1 = inst_15164;var state_15179__$1 = (function (){var statearr_15190 = state_15179;(statearr_15190[7] = inst_15151__$1);
return statearr_15190;
})();var statearr_15191_15211 = state_15179__$1;(statearr_15191_15211[2] = null);
(statearr_15191_15211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15180 === 9))
{var inst_15159 = (state_15179[9]);var state_15179__$1 = state_15179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15179__$1,11,out,inst_15159);
} else
{if((state_val_15180 === 10))
{var inst_15171 = (state_15179[2]);var state_15179__$1 = state_15179;var statearr_15193_15212 = state_15179__$1;(statearr_15193_15212[2] = inst_15171);
(statearr_15193_15212[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15180 === 11))
{var inst_15151 = (state_15179[7]);var inst_15168 = (state_15179[2]);var tmp15192 = inst_15151;var inst_15151__$1 = tmp15192;var state_15179__$1 = (function (){var statearr_15194 = state_15179;(statearr_15194[7] = inst_15151__$1);
(statearr_15194[11] = inst_15168);
return statearr_15194;
})();var statearr_15195_15213 = state_15179__$1;(statearr_15195_15213[2] = null);
(statearr_15195_15213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15199 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15199[0] = state_machine__5507__auto__);
(statearr_15199[1] = 1);
return statearr_15199;
});
var state_machine__5507__auto____1 = (function (state_15179){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15200){if((e15200 instanceof Object))
{var ex__5510__auto__ = e15200;var statearr_15201_15214 = state_15179;(statearr_15201_15214[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15215 = state_15179;
state_15179 = G__15215;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15179){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15202 = f__5522__auto__.call(null);(statearr_15202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15203);
return statearr_15202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15308 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15285){var state_val_15286 = (state_15285[1]);if((state_val_15286 === 1))
{var inst_15262 = 0;var state_15285__$1 = (function (){var statearr_15287 = state_15285;(statearr_15287[7] = inst_15262);
return statearr_15287;
})();var statearr_15288_15309 = state_15285__$1;(statearr_15288_15309[2] = null);
(statearr_15288_15309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15286 === 2))
{var inst_15262 = (state_15285[7]);var inst_15264 = (inst_15262 < n);var state_15285__$1 = state_15285;if(cljs.core.truth_(inst_15264))
{var statearr_15289_15310 = state_15285__$1;(statearr_15289_15310[1] = 4);
} else
{var statearr_15290_15311 = state_15285__$1;(statearr_15290_15311[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15286 === 3))
{var inst_15282 = (state_15285[2]);var inst_15283 = cljs.core.async.close_BANG_.call(null,out);var state_15285__$1 = (function (){var statearr_15291 = state_15285;(statearr_15291[8] = inst_15282);
return statearr_15291;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15285__$1,inst_15283);
} else
{if((state_val_15286 === 4))
{var state_15285__$1 = state_15285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15285__$1,7,ch);
} else
{if((state_val_15286 === 5))
{var state_15285__$1 = state_15285;var statearr_15292_15312 = state_15285__$1;(statearr_15292_15312[2] = null);
(statearr_15292_15312[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15286 === 6))
{var inst_15280 = (state_15285[2]);var state_15285__$1 = state_15285;var statearr_15293_15313 = state_15285__$1;(statearr_15293_15313[2] = inst_15280);
(statearr_15293_15313[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15286 === 7))
{var inst_15267 = (state_15285[9]);var inst_15267__$1 = (state_15285[2]);var inst_15268 = (inst_15267__$1 == null);var inst_15269 = cljs.core.not.call(null,inst_15268);var state_15285__$1 = (function (){var statearr_15294 = state_15285;(statearr_15294[9] = inst_15267__$1);
return statearr_15294;
})();if(inst_15269)
{var statearr_15295_15314 = state_15285__$1;(statearr_15295_15314[1] = 8);
} else
{var statearr_15296_15315 = state_15285__$1;(statearr_15296_15315[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15286 === 8))
{var inst_15267 = (state_15285[9]);var state_15285__$1 = state_15285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15285__$1,11,out,inst_15267);
} else
{if((state_val_15286 === 9))
{var state_15285__$1 = state_15285;var statearr_15297_15316 = state_15285__$1;(statearr_15297_15316[2] = null);
(statearr_15297_15316[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15286 === 10))
{var inst_15277 = (state_15285[2]);var state_15285__$1 = state_15285;var statearr_15298_15317 = state_15285__$1;(statearr_15298_15317[2] = inst_15277);
(statearr_15298_15317[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15286 === 11))
{var inst_15262 = (state_15285[7]);var inst_15272 = (state_15285[2]);var inst_15273 = (inst_15262 + 1);var inst_15262__$1 = inst_15273;var state_15285__$1 = (function (){var statearr_15299 = state_15285;(statearr_15299[7] = inst_15262__$1);
(statearr_15299[10] = inst_15272);
return statearr_15299;
})();var statearr_15300_15318 = state_15285__$1;(statearr_15300_15318[2] = null);
(statearr_15300_15318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15304 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15304[0] = state_machine__5507__auto__);
(statearr_15304[1] = 1);
return statearr_15304;
});
var state_machine__5507__auto____1 = (function (state_15285){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15285);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15305){if((e15305 instanceof Object))
{var ex__5510__auto__ = e15305;var statearr_15306_15319 = state_15285;(statearr_15306_15319[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15285);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15320 = state_15285;
state_15285 = G__15320;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15285){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15307 = f__5522__auto__.call(null);(statearr_15307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15308);
return statearr_15307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15417 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15392){var state_val_15393 = (state_15392[1]);if((state_val_15393 === 1))
{var inst_15369 = null;var state_15392__$1 = (function (){var statearr_15394 = state_15392;(statearr_15394[7] = inst_15369);
return statearr_15394;
})();var statearr_15395_15418 = state_15392__$1;(statearr_15395_15418[2] = null);
(statearr_15395_15418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15393 === 2))
{var state_15392__$1 = state_15392;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15392__$1,4,ch);
} else
{if((state_val_15393 === 3))
{var inst_15389 = (state_15392[2]);var inst_15390 = cljs.core.async.close_BANG_.call(null,out);var state_15392__$1 = (function (){var statearr_15396 = state_15392;(statearr_15396[8] = inst_15389);
return statearr_15396;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15392__$1,inst_15390);
} else
{if((state_val_15393 === 4))
{var inst_15372 = (state_15392[9]);var inst_15372__$1 = (state_15392[2]);var inst_15373 = (inst_15372__$1 == null);var inst_15374 = cljs.core.not.call(null,inst_15373);var state_15392__$1 = (function (){var statearr_15397 = state_15392;(statearr_15397[9] = inst_15372__$1);
return statearr_15397;
})();if(inst_15374)
{var statearr_15398_15419 = state_15392__$1;(statearr_15398_15419[1] = 5);
} else
{var statearr_15399_15420 = state_15392__$1;(statearr_15399_15420[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15393 === 5))
{var inst_15372 = (state_15392[9]);var inst_15369 = (state_15392[7]);var inst_15376 = cljs.core._EQ_.call(null,inst_15372,inst_15369);var state_15392__$1 = state_15392;if(inst_15376)
{var statearr_15400_15421 = state_15392__$1;(statearr_15400_15421[1] = 8);
} else
{var statearr_15401_15422 = state_15392__$1;(statearr_15401_15422[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15393 === 6))
{var state_15392__$1 = state_15392;var statearr_15403_15423 = state_15392__$1;(statearr_15403_15423[2] = null);
(statearr_15403_15423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15393 === 7))
{var inst_15387 = (state_15392[2]);var state_15392__$1 = state_15392;var statearr_15404_15424 = state_15392__$1;(statearr_15404_15424[2] = inst_15387);
(statearr_15404_15424[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15393 === 8))
{var inst_15369 = (state_15392[7]);var tmp15402 = inst_15369;var inst_15369__$1 = tmp15402;var state_15392__$1 = (function (){var statearr_15405 = state_15392;(statearr_15405[7] = inst_15369__$1);
return statearr_15405;
})();var statearr_15406_15425 = state_15392__$1;(statearr_15406_15425[2] = null);
(statearr_15406_15425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15393 === 9))
{var inst_15372 = (state_15392[9]);var state_15392__$1 = state_15392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15392__$1,11,out,inst_15372);
} else
{if((state_val_15393 === 10))
{var inst_15384 = (state_15392[2]);var state_15392__$1 = state_15392;var statearr_15407_15426 = state_15392__$1;(statearr_15407_15426[2] = inst_15384);
(statearr_15407_15426[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15393 === 11))
{var inst_15372 = (state_15392[9]);var inst_15381 = (state_15392[2]);var inst_15369 = inst_15372;var state_15392__$1 = (function (){var statearr_15408 = state_15392;(statearr_15408[10] = inst_15381);
(statearr_15408[7] = inst_15369);
return statearr_15408;
})();var statearr_15409_15427 = state_15392__$1;(statearr_15409_15427[2] = null);
(statearr_15409_15427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15413 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15413[0] = state_machine__5507__auto__);
(statearr_15413[1] = 1);
return statearr_15413;
});
var state_machine__5507__auto____1 = (function (state_15392){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15392);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15414){if((e15414 instanceof Object))
{var ex__5510__auto__ = e15414;var statearr_15415_15428 = state_15392;(statearr_15415_15428[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15392);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15429 = state_15392;
state_15392 = G__15429;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15392){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15416 = f__5522__auto__.call(null);(statearr_15416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15417);
return statearr_15416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15534){var state_val_15535 = (state_15534[1]);if((state_val_15535 === 1))
{var inst_15497 = (new Array(n));var inst_15498 = inst_15497;var inst_15499 = 0;var state_15534__$1 = (function (){var statearr_15536 = state_15534;(statearr_15536[7] = inst_15498);
(statearr_15536[8] = inst_15499);
return statearr_15536;
})();var statearr_15537_15565 = state_15534__$1;(statearr_15537_15565[2] = null);
(statearr_15537_15565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 2))
{var state_15534__$1 = state_15534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15534__$1,4,ch);
} else
{if((state_val_15535 === 3))
{var inst_15532 = (state_15534[2]);var state_15534__$1 = state_15534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15534__$1,inst_15532);
} else
{if((state_val_15535 === 4))
{var inst_15502 = (state_15534[9]);var inst_15502__$1 = (state_15534[2]);var inst_15503 = (inst_15502__$1 == null);var inst_15504 = cljs.core.not.call(null,inst_15503);var state_15534__$1 = (function (){var statearr_15538 = state_15534;(statearr_15538[9] = inst_15502__$1);
return statearr_15538;
})();if(inst_15504)
{var statearr_15539_15566 = state_15534__$1;(statearr_15539_15566[1] = 5);
} else
{var statearr_15540_15567 = state_15534__$1;(statearr_15540_15567[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 5))
{var inst_15498 = (state_15534[7]);var inst_15499 = (state_15534[8]);var inst_15502 = (state_15534[9]);var inst_15507 = (state_15534[10]);var inst_15506 = (inst_15498[inst_15499] = inst_15502);var inst_15507__$1 = (inst_15499 + 1);var inst_15508 = (inst_15507__$1 < n);var state_15534__$1 = (function (){var statearr_15541 = state_15534;(statearr_15541[11] = inst_15506);
(statearr_15541[10] = inst_15507__$1);
return statearr_15541;
})();if(cljs.core.truth_(inst_15508))
{var statearr_15542_15568 = state_15534__$1;(statearr_15542_15568[1] = 8);
} else
{var statearr_15543_15569 = state_15534__$1;(statearr_15543_15569[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 6))
{var inst_15499 = (state_15534[8]);var inst_15520 = (inst_15499 > 0);var state_15534__$1 = state_15534;if(cljs.core.truth_(inst_15520))
{var statearr_15545_15570 = state_15534__$1;(statearr_15545_15570[1] = 12);
} else
{var statearr_15546_15571 = state_15534__$1;(statearr_15546_15571[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 7))
{var inst_15530 = (state_15534[2]);var state_15534__$1 = state_15534;var statearr_15547_15572 = state_15534__$1;(statearr_15547_15572[2] = inst_15530);
(statearr_15547_15572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 8))
{var inst_15498 = (state_15534[7]);var inst_15507 = (state_15534[10]);var tmp15544 = inst_15498;var inst_15498__$1 = tmp15544;var inst_15499 = inst_15507;var state_15534__$1 = (function (){var statearr_15548 = state_15534;(statearr_15548[7] = inst_15498__$1);
(statearr_15548[8] = inst_15499);
return statearr_15548;
})();var statearr_15549_15573 = state_15534__$1;(statearr_15549_15573[2] = null);
(statearr_15549_15573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 9))
{var inst_15498 = (state_15534[7]);var inst_15512 = cljs.core.vec.call(null,inst_15498);var state_15534__$1 = state_15534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15534__$1,11,out,inst_15512);
} else
{if((state_val_15535 === 10))
{var inst_15518 = (state_15534[2]);var state_15534__$1 = state_15534;var statearr_15550_15574 = state_15534__$1;(statearr_15550_15574[2] = inst_15518);
(statearr_15550_15574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 11))
{var inst_15514 = (state_15534[2]);var inst_15515 = (new Array(n));var inst_15498 = inst_15515;var inst_15499 = 0;var state_15534__$1 = (function (){var statearr_15551 = state_15534;(statearr_15551[7] = inst_15498);
(statearr_15551[8] = inst_15499);
(statearr_15551[12] = inst_15514);
return statearr_15551;
})();var statearr_15552_15575 = state_15534__$1;(statearr_15552_15575[2] = null);
(statearr_15552_15575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 12))
{var inst_15498 = (state_15534[7]);var inst_15522 = cljs.core.vec.call(null,inst_15498);var state_15534__$1 = state_15534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15534__$1,15,out,inst_15522);
} else
{if((state_val_15535 === 13))
{var state_15534__$1 = state_15534;var statearr_15553_15576 = state_15534__$1;(statearr_15553_15576[2] = null);
(statearr_15553_15576[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 14))
{var inst_15527 = (state_15534[2]);var inst_15528 = cljs.core.async.close_BANG_.call(null,out);var state_15534__$1 = (function (){var statearr_15554 = state_15534;(statearr_15554[13] = inst_15527);
return statearr_15554;
})();var statearr_15555_15577 = state_15534__$1;(statearr_15555_15577[2] = inst_15528);
(statearr_15555_15577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15535 === 15))
{var inst_15524 = (state_15534[2]);var state_15534__$1 = state_15534;var statearr_15556_15578 = state_15534__$1;(statearr_15556_15578[2] = inst_15524);
(statearr_15556_15578[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15560[0] = state_machine__5507__auto__);
(statearr_15560[1] = 1);
return statearr_15560;
});
var state_machine__5507__auto____1 = (function (state_15534){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15534);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15561){if((e15561 instanceof Object))
{var ex__5510__auto__ = e15561;var statearr_15562_15579 = state_15534;(statearr_15562_15579[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15534);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15580 = state_15534;
state_15534 = G__15580;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15534){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15563 = f__5522__auto__.call(null);(statearr_15563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15564);
return statearr_15563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15723 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15693){var state_val_15694 = (state_15693[1]);if((state_val_15694 === 1))
{var inst_15652 = [];var inst_15653 = inst_15652;var inst_15654 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15693__$1 = (function (){var statearr_15695 = state_15693;(statearr_15695[7] = inst_15653);
(statearr_15695[8] = inst_15654);
return statearr_15695;
})();var statearr_15696_15724 = state_15693__$1;(statearr_15696_15724[2] = null);
(statearr_15696_15724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 2))
{var state_15693__$1 = state_15693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15693__$1,4,ch);
} else
{if((state_val_15694 === 3))
{var inst_15691 = (state_15693[2]);var state_15693__$1 = state_15693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15693__$1,inst_15691);
} else
{if((state_val_15694 === 4))
{var inst_15657 = (state_15693[9]);var inst_15657__$1 = (state_15693[2]);var inst_15658 = (inst_15657__$1 == null);var inst_15659 = cljs.core.not.call(null,inst_15658);var state_15693__$1 = (function (){var statearr_15697 = state_15693;(statearr_15697[9] = inst_15657__$1);
return statearr_15697;
})();if(inst_15659)
{var statearr_15698_15725 = state_15693__$1;(statearr_15698_15725[1] = 5);
} else
{var statearr_15699_15726 = state_15693__$1;(statearr_15699_15726[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 5))
{var inst_15661 = (state_15693[10]);var inst_15657 = (state_15693[9]);var inst_15654 = (state_15693[8]);var inst_15661__$1 = f.call(null,inst_15657);var inst_15662 = cljs.core._EQ_.call(null,inst_15661__$1,inst_15654);var inst_15663 = cljs.core.keyword_identical_QMARK_.call(null,inst_15654,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15664 = (inst_15662) || (inst_15663);var state_15693__$1 = (function (){var statearr_15700 = state_15693;(statearr_15700[10] = inst_15661__$1);
return statearr_15700;
})();if(cljs.core.truth_(inst_15664))
{var statearr_15701_15727 = state_15693__$1;(statearr_15701_15727[1] = 8);
} else
{var statearr_15702_15728 = state_15693__$1;(statearr_15702_15728[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 6))
{var inst_15653 = (state_15693[7]);var inst_15678 = inst_15653.length;var inst_15679 = (inst_15678 > 0);var state_15693__$1 = state_15693;if(cljs.core.truth_(inst_15679))
{var statearr_15704_15729 = state_15693__$1;(statearr_15704_15729[1] = 12);
} else
{var statearr_15705_15730 = state_15693__$1;(statearr_15705_15730[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 7))
{var inst_15689 = (state_15693[2]);var state_15693__$1 = state_15693;var statearr_15706_15731 = state_15693__$1;(statearr_15706_15731[2] = inst_15689);
(statearr_15706_15731[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 8))
{var inst_15653 = (state_15693[7]);var inst_15661 = (state_15693[10]);var inst_15657 = (state_15693[9]);var inst_15666 = inst_15653.push(inst_15657);var tmp15703 = inst_15653;var inst_15653__$1 = tmp15703;var inst_15654 = inst_15661;var state_15693__$1 = (function (){var statearr_15707 = state_15693;(statearr_15707[7] = inst_15653__$1);
(statearr_15707[11] = inst_15666);
(statearr_15707[8] = inst_15654);
return statearr_15707;
})();var statearr_15708_15732 = state_15693__$1;(statearr_15708_15732[2] = null);
(statearr_15708_15732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 9))
{var inst_15653 = (state_15693[7]);var inst_15669 = cljs.core.vec.call(null,inst_15653);var state_15693__$1 = state_15693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15693__$1,11,out,inst_15669);
} else
{if((state_val_15694 === 10))
{var inst_15676 = (state_15693[2]);var state_15693__$1 = state_15693;var statearr_15709_15733 = state_15693__$1;(statearr_15709_15733[2] = inst_15676);
(statearr_15709_15733[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 11))
{var inst_15661 = (state_15693[10]);var inst_15657 = (state_15693[9]);var inst_15671 = (state_15693[2]);var inst_15672 = [];var inst_15673 = inst_15672.push(inst_15657);var inst_15653 = inst_15672;var inst_15654 = inst_15661;var state_15693__$1 = (function (){var statearr_15710 = state_15693;(statearr_15710[7] = inst_15653);
(statearr_15710[8] = inst_15654);
(statearr_15710[12] = inst_15673);
(statearr_15710[13] = inst_15671);
return statearr_15710;
})();var statearr_15711_15734 = state_15693__$1;(statearr_15711_15734[2] = null);
(statearr_15711_15734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 12))
{var inst_15653 = (state_15693[7]);var inst_15681 = cljs.core.vec.call(null,inst_15653);var state_15693__$1 = state_15693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15693__$1,15,out,inst_15681);
} else
{if((state_val_15694 === 13))
{var state_15693__$1 = state_15693;var statearr_15712_15735 = state_15693__$1;(statearr_15712_15735[2] = null);
(statearr_15712_15735[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 14))
{var inst_15686 = (state_15693[2]);var inst_15687 = cljs.core.async.close_BANG_.call(null,out);var state_15693__$1 = (function (){var statearr_15713 = state_15693;(statearr_15713[14] = inst_15686);
return statearr_15713;
})();var statearr_15714_15736 = state_15693__$1;(statearr_15714_15736[2] = inst_15687);
(statearr_15714_15736[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15694 === 15))
{var inst_15683 = (state_15693[2]);var state_15693__$1 = state_15693;var statearr_15715_15737 = state_15693__$1;(statearr_15715_15737[2] = inst_15683);
(statearr_15715_15737[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15719[0] = state_machine__5507__auto__);
(statearr_15719[1] = 1);
return statearr_15719;
});
var state_machine__5507__auto____1 = (function (state_15693){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15693);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15720){if((e15720 instanceof Object))
{var ex__5510__auto__ = e15720;var statearr_15721_15738 = state_15693;(statearr_15721_15738[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15693);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15739 = state_15693;
state_15693 = G__15739;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15693){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15722 = f__5522__auto__.call(null);(statearr_15722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15723);
return statearr_15722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map