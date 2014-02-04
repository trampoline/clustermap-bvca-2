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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13210 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13210 = (function (f,fn_handler,meta13211){
this.f = f;
this.fn_handler = fn_handler;
this.meta13211 = meta13211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13210.cljs$lang$type = true;
cljs.core.async.t13210.cljs$lang$ctorStr = "cljs.core.async/t13210";
cljs.core.async.t13210.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13210");
});
cljs.core.async.t13210.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13212){var self__ = this;
var _13212__$1 = this;return self__.meta13211;
});
cljs.core.async.t13210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13212,meta13211__$1){var self__ = this;
var _13212__$1 = this;return (new cljs.core.async.t13210(self__.f,self__.fn_handler,meta13211__$1));
});
cljs.core.async.__GT_t13210 = (function __GT_t13210(f__$1,fn_handler__$1,meta13211){return (new cljs.core.async.t13210(f__$1,fn_handler__$1,meta13211));
});
}
return (new cljs.core.async.t13210(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13214 = buff;if(G__13214)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13214.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13214.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13214);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13214);
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
{var val_13215 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13215);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13215);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13216 = n;var x_13217 = 0;while(true){
if((x_13217 < n__4248__auto___13216))
{(a[x_13217] = 0);
{
var G__13218 = (x_13217 + 1);
x_13217 = G__13218;
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
var G__13219 = (i + 1);
i = G__13219;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13223 = (function (flag,alt_flag,meta13224){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13224 = meta13224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13223.cljs$lang$type = true;
cljs.core.async.t13223.cljs$lang$ctorStr = "cljs.core.async/t13223";
cljs.core.async.t13223.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13223");
});
cljs.core.async.t13223.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13225){var self__ = this;
var _13225__$1 = this;return self__.meta13224;
});
cljs.core.async.t13223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13225,meta13224__$1){var self__ = this;
var _13225__$1 = this;return (new cljs.core.async.t13223(self__.flag,self__.alt_flag,meta13224__$1));
});
cljs.core.async.__GT_t13223 = (function __GT_t13223(flag__$1,alt_flag__$1,meta13224){return (new cljs.core.async.t13223(flag__$1,alt_flag__$1,meta13224));
});
}
return (new cljs.core.async.t13223(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13229 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13229 = (function (cb,flag,alt_handler,meta13230){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13230 = meta13230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13229.cljs$lang$type = true;
cljs.core.async.t13229.cljs$lang$ctorStr = "cljs.core.async/t13229";
cljs.core.async.t13229.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13229");
});
cljs.core.async.t13229.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13231){var self__ = this;
var _13231__$1 = this;return self__.meta13230;
});
cljs.core.async.t13229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13231,meta13230__$1){var self__ = this;
var _13231__$1 = this;return (new cljs.core.async.t13229(self__.cb,self__.flag,self__.alt_handler,meta13230__$1));
});
cljs.core.async.__GT_t13229 = (function __GT_t13229(cb__$1,flag__$1,alt_handler__$1,meta13230){return (new cljs.core.async.t13229(cb__$1,flag__$1,alt_handler__$1,meta13230));
});
}
return (new cljs.core.async.t13229(cb,flag,alt_handler,null));
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
return (function (p1__13232_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13232_SHARP_,port], null));
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
var G__13233 = (i + 1);
i = G__13233;
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
var alts_BANG___delegate = function (ports,p__13234){var map__13236 = p__13234;var map__13236__$1 = ((cljs.core.seq_QMARK_.call(null,map__13236))?cljs.core.apply.call(null,cljs.core.hash_map,map__13236):map__13236);var opts = map__13236__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13234 = null;if (arguments.length > 1) {
  p__13234 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13234);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13237){
var ports = cljs.core.first(arglist__13237);
var p__13234 = cljs.core.rest(arglist__13237);
return alts_BANG___delegate(ports,p__13234);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13245 = (function (ch,f,map_LT_,meta13246){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13246 = meta13246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13245.cljs$lang$type = true;
cljs.core.async.t13245.cljs$lang$ctorStr = "cljs.core.async/t13245";
cljs.core.async.t13245.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13245");
});
cljs.core.async.t13245.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13245.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13248 = (function (fn1,_,meta13246,ch,f,map_LT_,meta13249){
this.fn1 = fn1;
this._ = _;
this.meta13246 = meta13246;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13249 = meta13249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13248.cljs$lang$type = true;
cljs.core.async.t13248.cljs$lang$ctorStr = "cljs.core.async/t13248";
cljs.core.async.t13248.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13248");
});
cljs.core.async.t13248.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13248.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13238_SHARP_){return f1.call(null,(((p1__13238_SHARP_ == null))?null:self__.f.call(null,p1__13238_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13250){var self__ = this;
var _13250__$1 = this;return self__.meta13249;
});
cljs.core.async.t13248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13250,meta13249__$1){var self__ = this;
var _13250__$1 = this;return (new cljs.core.async.t13248(self__.fn1,self__._,self__.meta13246,self__.ch,self__.f,self__.map_LT_,meta13249__$1));
});
cljs.core.async.__GT_t13248 = (function __GT_t13248(fn1__$1,___$2,meta13246__$1,ch__$2,f__$2,map_LT___$2,meta13249){return (new cljs.core.async.t13248(fn1__$1,___$2,meta13246__$1,ch__$2,f__$2,map_LT___$2,meta13249));
});
}
return (new cljs.core.async.t13248(fn1,___$1,self__.meta13246,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13245.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13247){var self__ = this;
var _13247__$1 = this;return self__.meta13246;
});
cljs.core.async.t13245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13247,meta13246__$1){var self__ = this;
var _13247__$1 = this;return (new cljs.core.async.t13245(self__.ch,self__.f,self__.map_LT_,meta13246__$1));
});
cljs.core.async.__GT_t13245 = (function __GT_t13245(ch__$1,f__$1,map_LT___$1,meta13246){return (new cljs.core.async.t13245(ch__$1,f__$1,map_LT___$1,meta13246));
});
}
return (new cljs.core.async.t13245(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13254 = (function (ch,f,map_GT_,meta13255){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13255 = meta13255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13254.cljs$lang$type = true;
cljs.core.async.t13254.cljs$lang$ctorStr = "cljs.core.async/t13254";
cljs.core.async.t13254.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13254");
});
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13256){var self__ = this;
var _13256__$1 = this;return self__.meta13255;
});
cljs.core.async.t13254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13256,meta13255__$1){var self__ = this;
var _13256__$1 = this;return (new cljs.core.async.t13254(self__.ch,self__.f,self__.map_GT_,meta13255__$1));
});
cljs.core.async.__GT_t13254 = (function __GT_t13254(ch__$1,f__$1,map_GT___$1,meta13255){return (new cljs.core.async.t13254(ch__$1,f__$1,map_GT___$1,meta13255));
});
}
return (new cljs.core.async.t13254(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13260 = (function (ch,p,filter_GT_,meta13261){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13261 = meta13261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13260.cljs$lang$type = true;
cljs.core.async.t13260.cljs$lang$ctorStr = "cljs.core.async/t13260";
cljs.core.async.t13260.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13260");
});
cljs.core.async.t13260.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13260.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13260.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13262){var self__ = this;
var _13262__$1 = this;return self__.meta13261;
});
cljs.core.async.t13260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13262,meta13261__$1){var self__ = this;
var _13262__$1 = this;return (new cljs.core.async.t13260(self__.ch,self__.p,self__.filter_GT_,meta13261__$1));
});
cljs.core.async.__GT_t13260 = (function __GT_t13260(ch__$1,p__$1,filter_GT___$1,meta13261){return (new cljs.core.async.t13260(ch__$1,p__$1,filter_GT___$1,meta13261));
});
}
return (new cljs.core.async.t13260(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13324){var state_val_13325 = (state_13324[1]);if((state_val_13325 === 1))
{var state_13324__$1 = state_13324;var statearr_13326_13346 = state_13324__$1;(statearr_13326_13346[2] = null);
(statearr_13326_13346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 2))
{var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13324__$1,4,ch);
} else
{if((state_val_13325 === 3))
{var inst_13322 = (state_13324[2]);var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13324__$1,inst_13322);
} else
{if((state_val_13325 === 4))
{var inst_13306 = (state_13324[7]);var inst_13306__$1 = (state_13324[2]);var inst_13307 = (inst_13306__$1 == null);var state_13324__$1 = (function (){var statearr_13327 = state_13324;(statearr_13327[7] = inst_13306__$1);
return statearr_13327;
})();if(cljs.core.truth_(inst_13307))
{var statearr_13328_13347 = state_13324__$1;(statearr_13328_13347[1] = 5);
} else
{var statearr_13329_13348 = state_13324__$1;(statearr_13329_13348[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 5))
{var inst_13309 = cljs.core.async.close_BANG_.call(null,out);var state_13324__$1 = state_13324;var statearr_13330_13349 = state_13324__$1;(statearr_13330_13349[2] = inst_13309);
(statearr_13330_13349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 6))
{var inst_13306 = (state_13324[7]);var inst_13311 = p.call(null,inst_13306);var state_13324__$1 = state_13324;if(cljs.core.truth_(inst_13311))
{var statearr_13331_13350 = state_13324__$1;(statearr_13331_13350[1] = 8);
} else
{var statearr_13332_13351 = state_13324__$1;(statearr_13332_13351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 7))
{var inst_13320 = (state_13324[2]);var state_13324__$1 = state_13324;var statearr_13333_13352 = state_13324__$1;(statearr_13333_13352[2] = inst_13320);
(statearr_13333_13352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 8))
{var inst_13306 = (state_13324[7]);var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13324__$1,11,out,inst_13306);
} else
{if((state_val_13325 === 9))
{var state_13324__$1 = state_13324;var statearr_13334_13353 = state_13324__$1;(statearr_13334_13353[2] = null);
(statearr_13334_13353[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 10))
{var inst_13317 = (state_13324[2]);var state_13324__$1 = (function (){var statearr_13335 = state_13324;(statearr_13335[8] = inst_13317);
return statearr_13335;
})();var statearr_13336_13354 = state_13324__$1;(statearr_13336_13354[2] = null);
(statearr_13336_13354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 11))
{var inst_13314 = (state_13324[2]);var state_13324__$1 = state_13324;var statearr_13337_13355 = state_13324__$1;(statearr_13337_13355[2] = inst_13314);
(statearr_13337_13355[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13341 = [null,null,null,null,null,null,null,null,null];(statearr_13341[0] = state_machine__5507__auto__);
(statearr_13341[1] = 1);
return statearr_13341;
});
var state_machine__5507__auto____1 = (function (state_13324){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13324);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13342){if((e13342 instanceof Object))
{var ex__5510__auto__ = e13342;var statearr_13343_13356 = state_13324;(statearr_13343_13356[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13357 = state_13324;
state_13324 = G__13357;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13324){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13344 = f__5522__auto__.call(null);(statearr_13344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13345);
return statearr_13344;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13509){var state_val_13510 = (state_13509[1]);if((state_val_13510 === 1))
{var state_13509__$1 = state_13509;var statearr_13511_13548 = state_13509__$1;(statearr_13511_13548[2] = null);
(statearr_13511_13548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 2))
{var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13509__$1,4,in$);
} else
{if((state_val_13510 === 3))
{var inst_13507 = (state_13509[2]);var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13509__$1,inst_13507);
} else
{if((state_val_13510 === 4))
{var inst_13455 = (state_13509[7]);var inst_13455__$1 = (state_13509[2]);var inst_13456 = (inst_13455__$1 == null);var state_13509__$1 = (function (){var statearr_13512 = state_13509;(statearr_13512[7] = inst_13455__$1);
return statearr_13512;
})();if(cljs.core.truth_(inst_13456))
{var statearr_13513_13549 = state_13509__$1;(statearr_13513_13549[1] = 5);
} else
{var statearr_13514_13550 = state_13509__$1;(statearr_13514_13550[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 5))
{var inst_13458 = cljs.core.async.close_BANG_.call(null,out);var state_13509__$1 = state_13509;var statearr_13515_13551 = state_13509__$1;(statearr_13515_13551[2] = inst_13458);
(statearr_13515_13551[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 6))
{var inst_13455 = (state_13509[7]);var inst_13460 = f.call(null,inst_13455);var inst_13465 = cljs.core.seq.call(null,inst_13460);var inst_13466 = inst_13465;var inst_13467 = null;var inst_13468 = 0;var inst_13469 = 0;var state_13509__$1 = (function (){var statearr_13516 = state_13509;(statearr_13516[8] = inst_13469);
(statearr_13516[9] = inst_13468);
(statearr_13516[10] = inst_13467);
(statearr_13516[11] = inst_13466);
return statearr_13516;
})();var statearr_13517_13552 = state_13509__$1;(statearr_13517_13552[2] = null);
(statearr_13517_13552[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 7))
{var inst_13505 = (state_13509[2]);var state_13509__$1 = state_13509;var statearr_13518_13553 = state_13509__$1;(statearr_13518_13553[2] = inst_13505);
(statearr_13518_13553[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 8))
{var inst_13469 = (state_13509[8]);var inst_13468 = (state_13509[9]);var inst_13471 = (inst_13469 < inst_13468);var inst_13472 = inst_13471;var state_13509__$1 = state_13509;if(cljs.core.truth_(inst_13472))
{var statearr_13519_13554 = state_13509__$1;(statearr_13519_13554[1] = 10);
} else
{var statearr_13520_13555 = state_13509__$1;(statearr_13520_13555[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 9))
{var inst_13502 = (state_13509[2]);var state_13509__$1 = (function (){var statearr_13521 = state_13509;(statearr_13521[12] = inst_13502);
return statearr_13521;
})();var statearr_13522_13556 = state_13509__$1;(statearr_13522_13556[2] = null);
(statearr_13522_13556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 10))
{var inst_13469 = (state_13509[8]);var inst_13467 = (state_13509[10]);var inst_13474 = cljs.core._nth.call(null,inst_13467,inst_13469);var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13509__$1,13,out,inst_13474);
} else
{if((state_val_13510 === 11))
{var inst_13480 = (state_13509[13]);var inst_13466 = (state_13509[11]);var inst_13480__$1 = cljs.core.seq.call(null,inst_13466);var state_13509__$1 = (function (){var statearr_13526 = state_13509;(statearr_13526[13] = inst_13480__$1);
return statearr_13526;
})();if(inst_13480__$1)
{var statearr_13527_13557 = state_13509__$1;(statearr_13527_13557[1] = 14);
} else
{var statearr_13528_13558 = state_13509__$1;(statearr_13528_13558[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 12))
{var inst_13500 = (state_13509[2]);var state_13509__$1 = state_13509;var statearr_13529_13559 = state_13509__$1;(statearr_13529_13559[2] = inst_13500);
(statearr_13529_13559[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 13))
{var inst_13469 = (state_13509[8]);var inst_13468 = (state_13509[9]);var inst_13467 = (state_13509[10]);var inst_13466 = (state_13509[11]);var inst_13476 = (state_13509[2]);var inst_13477 = (inst_13469 + 1);var tmp13523 = inst_13468;var tmp13524 = inst_13467;var tmp13525 = inst_13466;var inst_13466__$1 = tmp13525;var inst_13467__$1 = tmp13524;var inst_13468__$1 = tmp13523;var inst_13469__$1 = inst_13477;var state_13509__$1 = (function (){var statearr_13530 = state_13509;(statearr_13530[8] = inst_13469__$1);
(statearr_13530[14] = inst_13476);
(statearr_13530[9] = inst_13468__$1);
(statearr_13530[10] = inst_13467__$1);
(statearr_13530[11] = inst_13466__$1);
return statearr_13530;
})();var statearr_13531_13560 = state_13509__$1;(statearr_13531_13560[2] = null);
(statearr_13531_13560[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 14))
{var inst_13480 = (state_13509[13]);var inst_13482 = cljs.core.chunked_seq_QMARK_.call(null,inst_13480);var state_13509__$1 = state_13509;if(inst_13482)
{var statearr_13532_13561 = state_13509__$1;(statearr_13532_13561[1] = 17);
} else
{var statearr_13533_13562 = state_13509__$1;(statearr_13533_13562[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 15))
{var state_13509__$1 = state_13509;var statearr_13534_13563 = state_13509__$1;(statearr_13534_13563[2] = null);
(statearr_13534_13563[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 16))
{var inst_13498 = (state_13509[2]);var state_13509__$1 = state_13509;var statearr_13535_13564 = state_13509__$1;(statearr_13535_13564[2] = inst_13498);
(statearr_13535_13564[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 17))
{var inst_13480 = (state_13509[13]);var inst_13484 = cljs.core.chunk_first.call(null,inst_13480);var inst_13485 = cljs.core.chunk_rest.call(null,inst_13480);var inst_13486 = cljs.core.count.call(null,inst_13484);var inst_13466 = inst_13485;var inst_13467 = inst_13484;var inst_13468 = inst_13486;var inst_13469 = 0;var state_13509__$1 = (function (){var statearr_13536 = state_13509;(statearr_13536[8] = inst_13469);
(statearr_13536[9] = inst_13468);
(statearr_13536[10] = inst_13467);
(statearr_13536[11] = inst_13466);
return statearr_13536;
})();var statearr_13537_13565 = state_13509__$1;(statearr_13537_13565[2] = null);
(statearr_13537_13565[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 18))
{var inst_13480 = (state_13509[13]);var inst_13489 = cljs.core.first.call(null,inst_13480);var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13509__$1,20,out,inst_13489);
} else
{if((state_val_13510 === 19))
{var inst_13495 = (state_13509[2]);var state_13509__$1 = state_13509;var statearr_13538_13566 = state_13509__$1;(statearr_13538_13566[2] = inst_13495);
(statearr_13538_13566[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13510 === 20))
{var inst_13480 = (state_13509[13]);var inst_13491 = (state_13509[2]);var inst_13492 = cljs.core.next.call(null,inst_13480);var inst_13466 = inst_13492;var inst_13467 = null;var inst_13468 = 0;var inst_13469 = 0;var state_13509__$1 = (function (){var statearr_13539 = state_13509;(statearr_13539[8] = inst_13469);
(statearr_13539[9] = inst_13468);
(statearr_13539[15] = inst_13491);
(statearr_13539[10] = inst_13467);
(statearr_13539[11] = inst_13466);
return statearr_13539;
})();var statearr_13540_13567 = state_13509__$1;(statearr_13540_13567[2] = null);
(statearr_13540_13567[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13544[0] = state_machine__5507__auto__);
(statearr_13544[1] = 1);
return statearr_13544;
});
var state_machine__5507__auto____1 = (function (state_13509){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13509);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13545){if((e13545 instanceof Object))
{var ex__5510__auto__ = e13545;var statearr_13546_13568 = state_13509;(statearr_13546_13568[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13569 = state_13509;
state_13509 = G__13569;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13509){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13547 = f__5522__auto__.call(null);(statearr_13547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13547;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13650 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13629){var state_val_13630 = (state_13629[1]);if((state_val_13630 === 1))
{var state_13629__$1 = state_13629;var statearr_13631_13651 = state_13629__$1;(statearr_13631_13651[2] = null);
(statearr_13631_13651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 2))
{var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13629__$1,4,from);
} else
{if((state_val_13630 === 3))
{var inst_13627 = (state_13629[2]);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13629__$1,inst_13627);
} else
{if((state_val_13630 === 4))
{var inst_13612 = (state_13629[7]);var inst_13612__$1 = (state_13629[2]);var inst_13613 = (inst_13612__$1 == null);var state_13629__$1 = (function (){var statearr_13632 = state_13629;(statearr_13632[7] = inst_13612__$1);
return statearr_13632;
})();if(cljs.core.truth_(inst_13613))
{var statearr_13633_13652 = state_13629__$1;(statearr_13633_13652[1] = 5);
} else
{var statearr_13634_13653 = state_13629__$1;(statearr_13634_13653[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 5))
{var state_13629__$1 = state_13629;if(cljs.core.truth_(close_QMARK_))
{var statearr_13635_13654 = state_13629__$1;(statearr_13635_13654[1] = 8);
} else
{var statearr_13636_13655 = state_13629__$1;(statearr_13636_13655[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 6))
{var inst_13612 = (state_13629[7]);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13629__$1,11,to,inst_13612);
} else
{if((state_val_13630 === 7))
{var inst_13625 = (state_13629[2]);var state_13629__$1 = state_13629;var statearr_13637_13656 = state_13629__$1;(statearr_13637_13656[2] = inst_13625);
(statearr_13637_13656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 8))
{var inst_13616 = cljs.core.async.close_BANG_.call(null,to);var state_13629__$1 = state_13629;var statearr_13638_13657 = state_13629__$1;(statearr_13638_13657[2] = inst_13616);
(statearr_13638_13657[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 9))
{var state_13629__$1 = state_13629;var statearr_13639_13658 = state_13629__$1;(statearr_13639_13658[2] = null);
(statearr_13639_13658[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 10))
{var inst_13619 = (state_13629[2]);var state_13629__$1 = state_13629;var statearr_13640_13659 = state_13629__$1;(statearr_13640_13659[2] = inst_13619);
(statearr_13640_13659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 11))
{var inst_13622 = (state_13629[2]);var state_13629__$1 = (function (){var statearr_13641 = state_13629;(statearr_13641[8] = inst_13622);
return statearr_13641;
})();var statearr_13642_13660 = state_13629__$1;(statearr_13642_13660[2] = null);
(statearr_13642_13660[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13646 = [null,null,null,null,null,null,null,null,null];(statearr_13646[0] = state_machine__5507__auto__);
(statearr_13646[1] = 1);
return statearr_13646;
});
var state_machine__5507__auto____1 = (function (state_13629){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13629);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13647){if((e13647 instanceof Object))
{var ex__5510__auto__ = e13647;var statearr_13648_13661 = state_13629;(statearr_13648_13661[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13662 = state_13629;
state_13629 = G__13662;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13629){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13649 = f__5522__auto__.call(null);(statearr_13649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13650);
return statearr_13649;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13727){var state_val_13728 = (state_13727[1]);if((state_val_13728 === 1))
{var state_13727__$1 = state_13727;var statearr_13729_13750 = state_13727__$1;(statearr_13729_13750[2] = null);
(statearr_13729_13750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 2))
{var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13727__$1,4,ch);
} else
{if((state_val_13728 === 3))
{var inst_13725 = (state_13727[2]);var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13727__$1,inst_13725);
} else
{if((state_val_13728 === 4))
{var inst_13708 = (state_13727[7]);var inst_13708__$1 = (state_13727[2]);var inst_13709 = (inst_13708__$1 == null);var state_13727__$1 = (function (){var statearr_13730 = state_13727;(statearr_13730[7] = inst_13708__$1);
return statearr_13730;
})();if(cljs.core.truth_(inst_13709))
{var statearr_13731_13751 = state_13727__$1;(statearr_13731_13751[1] = 5);
} else
{var statearr_13732_13752 = state_13727__$1;(statearr_13732_13752[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 5))
{var inst_13711 = cljs.core.async.close_BANG_.call(null,tc);var inst_13712 = cljs.core.async.close_BANG_.call(null,fc);var state_13727__$1 = (function (){var statearr_13733 = state_13727;(statearr_13733[8] = inst_13711);
return statearr_13733;
})();var statearr_13734_13753 = state_13727__$1;(statearr_13734_13753[2] = inst_13712);
(statearr_13734_13753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 6))
{var inst_13708 = (state_13727[7]);var inst_13714 = p.call(null,inst_13708);var state_13727__$1 = state_13727;if(cljs.core.truth_(inst_13714))
{var statearr_13735_13754 = state_13727__$1;(statearr_13735_13754[1] = 9);
} else
{var statearr_13736_13755 = state_13727__$1;(statearr_13736_13755[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 7))
{var inst_13723 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13737_13756 = state_13727__$1;(statearr_13737_13756[2] = inst_13723);
(statearr_13737_13756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 8))
{var inst_13720 = (state_13727[2]);var state_13727__$1 = (function (){var statearr_13738 = state_13727;(statearr_13738[9] = inst_13720);
return statearr_13738;
})();var statearr_13739_13757 = state_13727__$1;(statearr_13739_13757[2] = null);
(statearr_13739_13757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 9))
{var state_13727__$1 = state_13727;var statearr_13740_13758 = state_13727__$1;(statearr_13740_13758[2] = tc);
(statearr_13740_13758[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 10))
{var state_13727__$1 = state_13727;var statearr_13741_13759 = state_13727__$1;(statearr_13741_13759[2] = fc);
(statearr_13741_13759[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 11))
{var inst_13708 = (state_13727[7]);var inst_13718 = (state_13727[2]);var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13727__$1,8,inst_13718,inst_13708);
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
var state_machine__5507__auto____0 = (function (){var statearr_13745 = [null,null,null,null,null,null,null,null,null,null];(statearr_13745[0] = state_machine__5507__auto__);
(statearr_13745[1] = 1);
return statearr_13745;
});
var state_machine__5507__auto____1 = (function (state_13727){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13727);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13746){if((e13746 instanceof Object))
{var ex__5510__auto__ = e13746;var statearr_13747_13760 = state_13727;(statearr_13747_13760[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13761 = state_13727;
state_13727 = G__13761;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13727){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13748 = f__5522__auto__.call(null);(statearr_13748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13749);
return statearr_13748;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13808){var state_val_13809 = (state_13808[1]);if((state_val_13809 === 7))
{var inst_13804 = (state_13808[2]);var state_13808__$1 = state_13808;var statearr_13810_13826 = state_13808__$1;(statearr_13810_13826[2] = inst_13804);
(statearr_13810_13826[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 6))
{var inst_13794 = (state_13808[7]);var inst_13797 = (state_13808[8]);var inst_13801 = f.call(null,inst_13794,inst_13797);var inst_13794__$1 = inst_13801;var state_13808__$1 = (function (){var statearr_13811 = state_13808;(statearr_13811[7] = inst_13794__$1);
return statearr_13811;
})();var statearr_13812_13827 = state_13808__$1;(statearr_13812_13827[2] = null);
(statearr_13812_13827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 5))
{var inst_13794 = (state_13808[7]);var state_13808__$1 = state_13808;var statearr_13813_13828 = state_13808__$1;(statearr_13813_13828[2] = inst_13794);
(statearr_13813_13828[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 4))
{var inst_13797 = (state_13808[8]);var inst_13797__$1 = (state_13808[2]);var inst_13798 = (inst_13797__$1 == null);var state_13808__$1 = (function (){var statearr_13814 = state_13808;(statearr_13814[8] = inst_13797__$1);
return statearr_13814;
})();if(cljs.core.truth_(inst_13798))
{var statearr_13815_13829 = state_13808__$1;(statearr_13815_13829[1] = 5);
} else
{var statearr_13816_13830 = state_13808__$1;(statearr_13816_13830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 3))
{var inst_13806 = (state_13808[2]);var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13808__$1,inst_13806);
} else
{if((state_val_13809 === 2))
{var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13808__$1,4,ch);
} else
{if((state_val_13809 === 1))
{var inst_13794 = init;var state_13808__$1 = (function (){var statearr_13817 = state_13808;(statearr_13817[7] = inst_13794);
return statearr_13817;
})();var statearr_13818_13831 = state_13808__$1;(statearr_13818_13831[2] = null);
(statearr_13818_13831[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13822 = [null,null,null,null,null,null,null,null,null];(statearr_13822[0] = state_machine__5507__auto__);
(statearr_13822[1] = 1);
return statearr_13822;
});
var state_machine__5507__auto____1 = (function (state_13808){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13823){if((e13823 instanceof Object))
{var ex__5510__auto__ = e13823;var statearr_13824_13832 = state_13808;(statearr_13824_13832[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13833 = state_13808;
state_13808 = G__13833;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13808){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13825 = f__5522__auto__.call(null);(statearr_13825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13825;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13895){var state_val_13896 = (state_13895[1]);if((state_val_13896 === 1))
{var inst_13875 = cljs.core.seq.call(null,coll);var inst_13876 = inst_13875;var state_13895__$1 = (function (){var statearr_13897 = state_13895;(statearr_13897[7] = inst_13876);
return statearr_13897;
})();var statearr_13898_13916 = state_13895__$1;(statearr_13898_13916[2] = null);
(statearr_13898_13916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13896 === 2))
{var inst_13876 = (state_13895[7]);var state_13895__$1 = state_13895;if(cljs.core.truth_(inst_13876))
{var statearr_13899_13917 = state_13895__$1;(statearr_13899_13917[1] = 4);
} else
{var statearr_13900_13918 = state_13895__$1;(statearr_13900_13918[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13896 === 3))
{var inst_13893 = (state_13895[2]);var state_13895__$1 = state_13895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13895__$1,inst_13893);
} else
{if((state_val_13896 === 4))
{var inst_13876 = (state_13895[7]);var inst_13879 = cljs.core.first.call(null,inst_13876);var state_13895__$1 = state_13895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13895__$1,7,ch,inst_13879);
} else
{if((state_val_13896 === 5))
{var state_13895__$1 = state_13895;if(cljs.core.truth_(close_QMARK_))
{var statearr_13901_13919 = state_13895__$1;(statearr_13901_13919[1] = 8);
} else
{var statearr_13902_13920 = state_13895__$1;(statearr_13902_13920[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13896 === 6))
{var inst_13891 = (state_13895[2]);var state_13895__$1 = state_13895;var statearr_13903_13921 = state_13895__$1;(statearr_13903_13921[2] = inst_13891);
(statearr_13903_13921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13896 === 7))
{var inst_13876 = (state_13895[7]);var inst_13881 = (state_13895[2]);var inst_13882 = cljs.core.next.call(null,inst_13876);var inst_13876__$1 = inst_13882;var state_13895__$1 = (function (){var statearr_13904 = state_13895;(statearr_13904[7] = inst_13876__$1);
(statearr_13904[8] = inst_13881);
return statearr_13904;
})();var statearr_13905_13922 = state_13895__$1;(statearr_13905_13922[2] = null);
(statearr_13905_13922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13896 === 8))
{var inst_13886 = cljs.core.async.close_BANG_.call(null,ch);var state_13895__$1 = state_13895;var statearr_13906_13923 = state_13895__$1;(statearr_13906_13923[2] = inst_13886);
(statearr_13906_13923[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13896 === 9))
{var state_13895__$1 = state_13895;var statearr_13907_13924 = state_13895__$1;(statearr_13907_13924[2] = null);
(statearr_13907_13924[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13896 === 10))
{var inst_13889 = (state_13895[2]);var state_13895__$1 = state_13895;var statearr_13908_13925 = state_13895__$1;(statearr_13908_13925[2] = inst_13889);
(statearr_13908_13925[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13912 = [null,null,null,null,null,null,null,null,null];(statearr_13912[0] = state_machine__5507__auto__);
(statearr_13912[1] = 1);
return statearr_13912;
});
var state_machine__5507__auto____1 = (function (state_13895){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13913){if((e13913 instanceof Object))
{var ex__5510__auto__ = e13913;var statearr_13914_13926 = state_13895;(statearr_13914_13926[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13927 = state_13895;
state_13895 = G__13927;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13895){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13915 = f__5522__auto__.call(null);(statearr_13915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13915;
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
cljs.core.async.Mux = (function (){var obj13929 = {};return obj13929;
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
cljs.core.async.Mult = (function (){var obj13931 = {};return obj13931;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14155 = (function (cs,ch,mult,meta14156){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14156 = meta14156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14155.cljs$lang$type = true;
cljs.core.async.t14155.cljs$lang$ctorStr = "cljs.core.async/t14155";
cljs.core.async.t14155.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14155");
});})(cs))
;
cljs.core.async.t14155.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14155.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14155.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14155.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14155.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14157){var self__ = this;
var _14157__$1 = this;return self__.meta14156;
});})(cs))
;
cljs.core.async.t14155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14157,meta14156__$1){var self__ = this;
var _14157__$1 = this;return (new cljs.core.async.t14155(self__.cs,self__.ch,self__.mult,meta14156__$1));
});})(cs))
;
cljs.core.async.__GT_t14155 = ((function (cs){
return (function __GT_t14155(cs__$1,ch__$1,mult__$1,meta14156){return (new cljs.core.async.t14155(cs__$1,ch__$1,mult__$1,meta14156));
});})(cs))
;
}
return (new cljs.core.async.t14155(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14378 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14292){var state_val_14293 = (state_14292[1]);if((state_val_14293 === 32))
{var inst_14236 = (state_14292[7]);var inst_14160 = (state_14292[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14292,31,Object,null,30);var inst_14243 = cljs.core.async.put_BANG_.call(null,inst_14236,inst_14160,done);var state_14292__$1 = state_14292;var statearr_14294_14379 = state_14292__$1;(statearr_14294_14379[2] = inst_14243);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 1))
{var state_14292__$1 = state_14292;var statearr_14295_14380 = state_14292__$1;(statearr_14295_14380[2] = null);
(statearr_14295_14380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 33))
{var inst_14249 = (state_14292[9]);var inst_14251 = cljs.core.chunked_seq_QMARK_.call(null,inst_14249);var state_14292__$1 = state_14292;if(inst_14251)
{var statearr_14296_14381 = state_14292__$1;(statearr_14296_14381[1] = 36);
} else
{var statearr_14297_14382 = state_14292__$1;(statearr_14297_14382[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 2))
{var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14292__$1,4,ch);
} else
{if((state_val_14293 === 34))
{var state_14292__$1 = state_14292;var statearr_14298_14383 = state_14292__$1;(statearr_14298_14383[2] = null);
(statearr_14298_14383[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 3))
{var inst_14290 = (state_14292[2]);var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14292__$1,inst_14290);
} else
{if((state_val_14293 === 35))
{var inst_14274 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14299_14384 = state_14292__$1;(statearr_14299_14384[2] = inst_14274);
(statearr_14299_14384[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 4))
{var inst_14160 = (state_14292[8]);var inst_14160__$1 = (state_14292[2]);var inst_14161 = (inst_14160__$1 == null);var state_14292__$1 = (function (){var statearr_14300 = state_14292;(statearr_14300[8] = inst_14160__$1);
return statearr_14300;
})();if(cljs.core.truth_(inst_14161))
{var statearr_14301_14385 = state_14292__$1;(statearr_14301_14385[1] = 5);
} else
{var statearr_14302_14386 = state_14292__$1;(statearr_14302_14386[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 36))
{var inst_14249 = (state_14292[9]);var inst_14253 = cljs.core.chunk_first.call(null,inst_14249);var inst_14254 = cljs.core.chunk_rest.call(null,inst_14249);var inst_14255 = cljs.core.count.call(null,inst_14253);var inst_14228 = inst_14254;var inst_14229 = inst_14253;var inst_14230 = inst_14255;var inst_14231 = 0;var state_14292__$1 = (function (){var statearr_14303 = state_14292;(statearr_14303[10] = inst_14228);
(statearr_14303[11] = inst_14229);
(statearr_14303[12] = inst_14231);
(statearr_14303[13] = inst_14230);
return statearr_14303;
})();var statearr_14304_14387 = state_14292__$1;(statearr_14304_14387[2] = null);
(statearr_14304_14387[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 5))
{var inst_14167 = cljs.core.deref.call(null,cs);var inst_14168 = cljs.core.seq.call(null,inst_14167);var inst_14169 = inst_14168;var inst_14170 = null;var inst_14171 = 0;var inst_14172 = 0;var state_14292__$1 = (function (){var statearr_14305 = state_14292;(statearr_14305[14] = inst_14172);
(statearr_14305[15] = inst_14169);
(statearr_14305[16] = inst_14170);
(statearr_14305[17] = inst_14171);
return statearr_14305;
})();var statearr_14306_14388 = state_14292__$1;(statearr_14306_14388[2] = null);
(statearr_14306_14388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 37))
{var inst_14249 = (state_14292[9]);var inst_14258 = cljs.core.first.call(null,inst_14249);var state_14292__$1 = (function (){var statearr_14307 = state_14292;(statearr_14307[18] = inst_14258);
return statearr_14307;
})();var statearr_14308_14389 = state_14292__$1;(statearr_14308_14389[2] = null);
(statearr_14308_14389[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 6))
{var inst_14220 = (state_14292[19]);var inst_14219 = cljs.core.deref.call(null,cs);var inst_14220__$1 = cljs.core.keys.call(null,inst_14219);var inst_14221 = cljs.core.count.call(null,inst_14220__$1);var inst_14222 = cljs.core.reset_BANG_.call(null,dctr,inst_14221);var inst_14227 = cljs.core.seq.call(null,inst_14220__$1);var inst_14228 = inst_14227;var inst_14229 = null;var inst_14230 = 0;var inst_14231 = 0;var state_14292__$1 = (function (){var statearr_14309 = state_14292;(statearr_14309[20] = inst_14222);
(statearr_14309[19] = inst_14220__$1);
(statearr_14309[10] = inst_14228);
(statearr_14309[11] = inst_14229);
(statearr_14309[12] = inst_14231);
(statearr_14309[13] = inst_14230);
return statearr_14309;
})();var statearr_14310_14390 = state_14292__$1;(statearr_14310_14390[2] = null);
(statearr_14310_14390[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 38))
{var inst_14271 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14311_14391 = state_14292__$1;(statearr_14311_14391[2] = inst_14271);
(statearr_14311_14391[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 7))
{var inst_14288 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14312_14392 = state_14292__$1;(statearr_14312_14392[2] = inst_14288);
(statearr_14312_14392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 39))
{var inst_14249 = (state_14292[9]);var inst_14267 = (state_14292[2]);var inst_14268 = cljs.core.next.call(null,inst_14249);var inst_14228 = inst_14268;var inst_14229 = null;var inst_14230 = 0;var inst_14231 = 0;var state_14292__$1 = (function (){var statearr_14313 = state_14292;(statearr_14313[21] = inst_14267);
(statearr_14313[10] = inst_14228);
(statearr_14313[11] = inst_14229);
(statearr_14313[12] = inst_14231);
(statearr_14313[13] = inst_14230);
return statearr_14313;
})();var statearr_14314_14393 = state_14292__$1;(statearr_14314_14393[2] = null);
(statearr_14314_14393[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 8))
{var inst_14172 = (state_14292[14]);var inst_14171 = (state_14292[17]);var inst_14174 = (inst_14172 < inst_14171);var inst_14175 = inst_14174;var state_14292__$1 = state_14292;if(cljs.core.truth_(inst_14175))
{var statearr_14315_14394 = state_14292__$1;(statearr_14315_14394[1] = 10);
} else
{var statearr_14316_14395 = state_14292__$1;(statearr_14316_14395[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 40))
{var inst_14258 = (state_14292[18]);var inst_14259 = (state_14292[2]);var inst_14260 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14261 = cljs.core.async.untap_STAR_.call(null,m,inst_14258);var state_14292__$1 = (function (){var statearr_14317 = state_14292;(statearr_14317[22] = inst_14259);
(statearr_14317[23] = inst_14260);
return statearr_14317;
})();var statearr_14318_14396 = state_14292__$1;(statearr_14318_14396[2] = inst_14261);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 9))
{var inst_14217 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14319_14397 = state_14292__$1;(statearr_14319_14397[2] = inst_14217);
(statearr_14319_14397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 41))
{var inst_14258 = (state_14292[18]);var inst_14160 = (state_14292[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14292,40,Object,null,39);var inst_14265 = cljs.core.async.put_BANG_.call(null,inst_14258,inst_14160,done);var state_14292__$1 = state_14292;var statearr_14320_14398 = state_14292__$1;(statearr_14320_14398[2] = inst_14265);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 10))
{var inst_14172 = (state_14292[14]);var inst_14170 = (state_14292[16]);var inst_14178 = cljs.core._nth.call(null,inst_14170,inst_14172);var inst_14179 = cljs.core.nth.call(null,inst_14178,0,null);var inst_14180 = cljs.core.nth.call(null,inst_14178,1,null);var state_14292__$1 = (function (){var statearr_14321 = state_14292;(statearr_14321[24] = inst_14179);
return statearr_14321;
})();if(cljs.core.truth_(inst_14180))
{var statearr_14322_14399 = state_14292__$1;(statearr_14322_14399[1] = 13);
} else
{var statearr_14323_14400 = state_14292__$1;(statearr_14323_14400[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 42))
{var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14292__$1,45,dchan);
} else
{if((state_val_14293 === 11))
{var inst_14169 = (state_14292[15]);var inst_14189 = (state_14292[25]);var inst_14189__$1 = cljs.core.seq.call(null,inst_14169);var state_14292__$1 = (function (){var statearr_14324 = state_14292;(statearr_14324[25] = inst_14189__$1);
return statearr_14324;
})();if(inst_14189__$1)
{var statearr_14325_14401 = state_14292__$1;(statearr_14325_14401[1] = 16);
} else
{var statearr_14326_14402 = state_14292__$1;(statearr_14326_14402[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 43))
{var state_14292__$1 = state_14292;var statearr_14327_14403 = state_14292__$1;(statearr_14327_14403[2] = null);
(statearr_14327_14403[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 12))
{var inst_14215 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14328_14404 = state_14292__$1;(statearr_14328_14404[2] = inst_14215);
(statearr_14328_14404[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 44))
{var inst_14285 = (state_14292[2]);var state_14292__$1 = (function (){var statearr_14329 = state_14292;(statearr_14329[26] = inst_14285);
return statearr_14329;
})();var statearr_14330_14405 = state_14292__$1;(statearr_14330_14405[2] = null);
(statearr_14330_14405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 13))
{var inst_14179 = (state_14292[24]);var inst_14182 = cljs.core.async.close_BANG_.call(null,inst_14179);var state_14292__$1 = state_14292;var statearr_14331_14406 = state_14292__$1;(statearr_14331_14406[2] = inst_14182);
(statearr_14331_14406[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 45))
{var inst_14282 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14335_14407 = state_14292__$1;(statearr_14335_14407[2] = inst_14282);
(statearr_14335_14407[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 14))
{var state_14292__$1 = state_14292;var statearr_14336_14408 = state_14292__$1;(statearr_14336_14408[2] = null);
(statearr_14336_14408[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 15))
{var inst_14172 = (state_14292[14]);var inst_14169 = (state_14292[15]);var inst_14170 = (state_14292[16]);var inst_14171 = (state_14292[17]);var inst_14185 = (state_14292[2]);var inst_14186 = (inst_14172 + 1);var tmp14332 = inst_14169;var tmp14333 = inst_14170;var tmp14334 = inst_14171;var inst_14169__$1 = tmp14332;var inst_14170__$1 = tmp14333;var inst_14171__$1 = tmp14334;var inst_14172__$1 = inst_14186;var state_14292__$1 = (function (){var statearr_14337 = state_14292;(statearr_14337[14] = inst_14172__$1);
(statearr_14337[15] = inst_14169__$1);
(statearr_14337[16] = inst_14170__$1);
(statearr_14337[17] = inst_14171__$1);
(statearr_14337[27] = inst_14185);
return statearr_14337;
})();var statearr_14338_14409 = state_14292__$1;(statearr_14338_14409[2] = null);
(statearr_14338_14409[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 16))
{var inst_14189 = (state_14292[25]);var inst_14191 = cljs.core.chunked_seq_QMARK_.call(null,inst_14189);var state_14292__$1 = state_14292;if(inst_14191)
{var statearr_14339_14410 = state_14292__$1;(statearr_14339_14410[1] = 19);
} else
{var statearr_14340_14411 = state_14292__$1;(statearr_14340_14411[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 17))
{var state_14292__$1 = state_14292;var statearr_14341_14412 = state_14292__$1;(statearr_14341_14412[2] = null);
(statearr_14341_14412[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 18))
{var inst_14213 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14342_14413 = state_14292__$1;(statearr_14342_14413[2] = inst_14213);
(statearr_14342_14413[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 19))
{var inst_14189 = (state_14292[25]);var inst_14193 = cljs.core.chunk_first.call(null,inst_14189);var inst_14194 = cljs.core.chunk_rest.call(null,inst_14189);var inst_14195 = cljs.core.count.call(null,inst_14193);var inst_14169 = inst_14194;var inst_14170 = inst_14193;var inst_14171 = inst_14195;var inst_14172 = 0;var state_14292__$1 = (function (){var statearr_14343 = state_14292;(statearr_14343[14] = inst_14172);
(statearr_14343[15] = inst_14169);
(statearr_14343[16] = inst_14170);
(statearr_14343[17] = inst_14171);
return statearr_14343;
})();var statearr_14344_14414 = state_14292__$1;(statearr_14344_14414[2] = null);
(statearr_14344_14414[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 20))
{var inst_14189 = (state_14292[25]);var inst_14199 = cljs.core.first.call(null,inst_14189);var inst_14200 = cljs.core.nth.call(null,inst_14199,0,null);var inst_14201 = cljs.core.nth.call(null,inst_14199,1,null);var state_14292__$1 = (function (){var statearr_14345 = state_14292;(statearr_14345[28] = inst_14200);
return statearr_14345;
})();if(cljs.core.truth_(inst_14201))
{var statearr_14346_14415 = state_14292__$1;(statearr_14346_14415[1] = 22);
} else
{var statearr_14347_14416 = state_14292__$1;(statearr_14347_14416[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 21))
{var inst_14210 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14348_14417 = state_14292__$1;(statearr_14348_14417[2] = inst_14210);
(statearr_14348_14417[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 22))
{var inst_14200 = (state_14292[28]);var inst_14203 = cljs.core.async.close_BANG_.call(null,inst_14200);var state_14292__$1 = state_14292;var statearr_14349_14418 = state_14292__$1;(statearr_14349_14418[2] = inst_14203);
(statearr_14349_14418[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 23))
{var state_14292__$1 = state_14292;var statearr_14350_14419 = state_14292__$1;(statearr_14350_14419[2] = null);
(statearr_14350_14419[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 24))
{var inst_14189 = (state_14292[25]);var inst_14206 = (state_14292[2]);var inst_14207 = cljs.core.next.call(null,inst_14189);var inst_14169 = inst_14207;var inst_14170 = null;var inst_14171 = 0;var inst_14172 = 0;var state_14292__$1 = (function (){var statearr_14351 = state_14292;(statearr_14351[29] = inst_14206);
(statearr_14351[14] = inst_14172);
(statearr_14351[15] = inst_14169);
(statearr_14351[16] = inst_14170);
(statearr_14351[17] = inst_14171);
return statearr_14351;
})();var statearr_14352_14420 = state_14292__$1;(statearr_14352_14420[2] = null);
(statearr_14352_14420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 25))
{var inst_14231 = (state_14292[12]);var inst_14230 = (state_14292[13]);var inst_14233 = (inst_14231 < inst_14230);var inst_14234 = inst_14233;var state_14292__$1 = state_14292;if(cljs.core.truth_(inst_14234))
{var statearr_14353_14421 = state_14292__$1;(statearr_14353_14421[1] = 27);
} else
{var statearr_14354_14422 = state_14292__$1;(statearr_14354_14422[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 26))
{var inst_14220 = (state_14292[19]);var inst_14278 = (state_14292[2]);var inst_14279 = cljs.core.seq.call(null,inst_14220);var state_14292__$1 = (function (){var statearr_14355 = state_14292;(statearr_14355[30] = inst_14278);
return statearr_14355;
})();if(inst_14279)
{var statearr_14356_14423 = state_14292__$1;(statearr_14356_14423[1] = 42);
} else
{var statearr_14357_14424 = state_14292__$1;(statearr_14357_14424[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 27))
{var inst_14229 = (state_14292[11]);var inst_14231 = (state_14292[12]);var inst_14236 = cljs.core._nth.call(null,inst_14229,inst_14231);var state_14292__$1 = (function (){var statearr_14358 = state_14292;(statearr_14358[7] = inst_14236);
return statearr_14358;
})();var statearr_14359_14425 = state_14292__$1;(statearr_14359_14425[2] = null);
(statearr_14359_14425[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 28))
{var inst_14249 = (state_14292[9]);var inst_14228 = (state_14292[10]);var inst_14249__$1 = cljs.core.seq.call(null,inst_14228);var state_14292__$1 = (function (){var statearr_14363 = state_14292;(statearr_14363[9] = inst_14249__$1);
return statearr_14363;
})();if(inst_14249__$1)
{var statearr_14364_14426 = state_14292__$1;(statearr_14364_14426[1] = 33);
} else
{var statearr_14365_14427 = state_14292__$1;(statearr_14365_14427[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 29))
{var inst_14276 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14366_14428 = state_14292__$1;(statearr_14366_14428[2] = inst_14276);
(statearr_14366_14428[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 30))
{var inst_14228 = (state_14292[10]);var inst_14229 = (state_14292[11]);var inst_14231 = (state_14292[12]);var inst_14230 = (state_14292[13]);var inst_14245 = (state_14292[2]);var inst_14246 = (inst_14231 + 1);var tmp14360 = inst_14228;var tmp14361 = inst_14229;var tmp14362 = inst_14230;var inst_14228__$1 = tmp14360;var inst_14229__$1 = tmp14361;var inst_14230__$1 = tmp14362;var inst_14231__$1 = inst_14246;var state_14292__$1 = (function (){var statearr_14367 = state_14292;(statearr_14367[31] = inst_14245);
(statearr_14367[10] = inst_14228__$1);
(statearr_14367[11] = inst_14229__$1);
(statearr_14367[12] = inst_14231__$1);
(statearr_14367[13] = inst_14230__$1);
return statearr_14367;
})();var statearr_14368_14429 = state_14292__$1;(statearr_14368_14429[2] = null);
(statearr_14368_14429[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 31))
{var inst_14236 = (state_14292[7]);var inst_14237 = (state_14292[2]);var inst_14238 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14239 = cljs.core.async.untap_STAR_.call(null,m,inst_14236);var state_14292__$1 = (function (){var statearr_14369 = state_14292;(statearr_14369[32] = inst_14238);
(statearr_14369[33] = inst_14237);
return statearr_14369;
})();var statearr_14370_14430 = state_14292__$1;(statearr_14370_14430[2] = inst_14239);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14374[0] = state_machine__5507__auto__);
(statearr_14374[1] = 1);
return statearr_14374;
});
var state_machine__5507__auto____1 = (function (state_14292){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14292);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14375){if((e14375 instanceof Object))
{var ex__5510__auto__ = e14375;var statearr_14376_14431 = state_14292;(statearr_14376_14431[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14432 = state_14292;
state_14292 = G__14432;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14292){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14377 = f__5522__auto__.call(null);(statearr_14377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14378);
return statearr_14377;
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
cljs.core.async.Mix = (function (){var obj14434 = {};return obj14434;
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
;var m = (function (){if(typeof cljs.core.async.t14544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14544 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14545){
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
this.meta14545 = meta14545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14544.cljs$lang$type = true;
cljs.core.async.t14544.cljs$lang$ctorStr = "cljs.core.async/t14544";
cljs.core.async.t14544.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14544");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14544.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14546){var self__ = this;
var _14546__$1 = this;return self__.meta14545;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14546,meta14545__$1){var self__ = this;
var _14546__$1 = this;return (new cljs.core.async.t14544(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14545__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14544 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14544(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14545){return (new cljs.core.async.t14544(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14545));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14544(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14653 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14611){var state_val_14612 = (state_14611[1]);if((state_val_14612 === 1))
{var inst_14550 = (state_14611[7]);var inst_14550__$1 = calc_state.call(null);var inst_14551 = cljs.core.seq_QMARK_.call(null,inst_14550__$1);var state_14611__$1 = (function (){var statearr_14613 = state_14611;(statearr_14613[7] = inst_14550__$1);
return statearr_14613;
})();if(inst_14551)
{var statearr_14614_14654 = state_14611__$1;(statearr_14614_14654[1] = 2);
} else
{var statearr_14615_14655 = state_14611__$1;(statearr_14615_14655[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 2))
{var inst_14550 = (state_14611[7]);var inst_14553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14550);var state_14611__$1 = state_14611;var statearr_14616_14656 = state_14611__$1;(statearr_14616_14656[2] = inst_14553);
(statearr_14616_14656[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 3))
{var inst_14550 = (state_14611[7]);var state_14611__$1 = state_14611;var statearr_14617_14657 = state_14611__$1;(statearr_14617_14657[2] = inst_14550);
(statearr_14617_14657[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 4))
{var inst_14550 = (state_14611[7]);var inst_14556 = (state_14611[2]);var inst_14557 = cljs.core.get.call(null,inst_14556,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14558 = cljs.core.get.call(null,inst_14556,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14559 = cljs.core.get.call(null,inst_14556,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14560 = inst_14550;var state_14611__$1 = (function (){var statearr_14618 = state_14611;(statearr_14618[8] = inst_14560);
(statearr_14618[9] = inst_14558);
(statearr_14618[10] = inst_14559);
(statearr_14618[11] = inst_14557);
return statearr_14618;
})();var statearr_14619_14658 = state_14611__$1;(statearr_14619_14658[2] = null);
(statearr_14619_14658[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 5))
{var inst_14560 = (state_14611[8]);var inst_14563 = cljs.core.seq_QMARK_.call(null,inst_14560);var state_14611__$1 = state_14611;if(inst_14563)
{var statearr_14620_14659 = state_14611__$1;(statearr_14620_14659[1] = 7);
} else
{var statearr_14621_14660 = state_14611__$1;(statearr_14621_14660[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 6))
{var inst_14609 = (state_14611[2]);var state_14611__$1 = state_14611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14611__$1,inst_14609);
} else
{if((state_val_14612 === 7))
{var inst_14560 = (state_14611[8]);var inst_14565 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14560);var state_14611__$1 = state_14611;var statearr_14622_14661 = state_14611__$1;(statearr_14622_14661[2] = inst_14565);
(statearr_14622_14661[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 8))
{var inst_14560 = (state_14611[8]);var state_14611__$1 = state_14611;var statearr_14623_14662 = state_14611__$1;(statearr_14623_14662[2] = inst_14560);
(statearr_14623_14662[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 9))
{var inst_14568 = (state_14611[12]);var inst_14568__$1 = (state_14611[2]);var inst_14569 = cljs.core.get.call(null,inst_14568__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14570 = cljs.core.get.call(null,inst_14568__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14571 = cljs.core.get.call(null,inst_14568__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14611__$1 = (function (){var statearr_14624 = state_14611;(statearr_14624[12] = inst_14568__$1);
(statearr_14624[13] = inst_14571);
(statearr_14624[14] = inst_14570);
return statearr_14624;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14611__$1,10,inst_14569);
} else
{if((state_val_14612 === 10))
{var inst_14576 = (state_14611[15]);var inst_14575 = (state_14611[16]);var inst_14574 = (state_14611[2]);var inst_14575__$1 = cljs.core.nth.call(null,inst_14574,0,null);var inst_14576__$1 = cljs.core.nth.call(null,inst_14574,1,null);var inst_14577 = (inst_14575__$1 == null);var inst_14578 = cljs.core._EQ_.call(null,inst_14576__$1,change);var inst_14579 = (inst_14577) || (inst_14578);var state_14611__$1 = (function (){var statearr_14625 = state_14611;(statearr_14625[15] = inst_14576__$1);
(statearr_14625[16] = inst_14575__$1);
return statearr_14625;
})();if(cljs.core.truth_(inst_14579))
{var statearr_14626_14663 = state_14611__$1;(statearr_14626_14663[1] = 11);
} else
{var statearr_14627_14664 = state_14611__$1;(statearr_14627_14664[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 11))
{var inst_14575 = (state_14611[16]);var inst_14581 = (inst_14575 == null);var state_14611__$1 = state_14611;if(cljs.core.truth_(inst_14581))
{var statearr_14628_14665 = state_14611__$1;(statearr_14628_14665[1] = 14);
} else
{var statearr_14629_14666 = state_14611__$1;(statearr_14629_14666[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 12))
{var inst_14576 = (state_14611[15]);var inst_14571 = (state_14611[13]);var inst_14590 = (state_14611[17]);var inst_14590__$1 = inst_14571.call(null,inst_14576);var state_14611__$1 = (function (){var statearr_14630 = state_14611;(statearr_14630[17] = inst_14590__$1);
return statearr_14630;
})();if(cljs.core.truth_(inst_14590__$1))
{var statearr_14631_14667 = state_14611__$1;(statearr_14631_14667[1] = 17);
} else
{var statearr_14632_14668 = state_14611__$1;(statearr_14632_14668[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 13))
{var inst_14607 = (state_14611[2]);var state_14611__$1 = state_14611;var statearr_14633_14669 = state_14611__$1;(statearr_14633_14669[2] = inst_14607);
(statearr_14633_14669[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 14))
{var inst_14576 = (state_14611[15]);var inst_14583 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14576);var state_14611__$1 = state_14611;var statearr_14634_14670 = state_14611__$1;(statearr_14634_14670[2] = inst_14583);
(statearr_14634_14670[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 15))
{var state_14611__$1 = state_14611;var statearr_14635_14671 = state_14611__$1;(statearr_14635_14671[2] = null);
(statearr_14635_14671[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 16))
{var inst_14586 = (state_14611[2]);var inst_14587 = calc_state.call(null);var inst_14560 = inst_14587;var state_14611__$1 = (function (){var statearr_14636 = state_14611;(statearr_14636[8] = inst_14560);
(statearr_14636[18] = inst_14586);
return statearr_14636;
})();var statearr_14637_14672 = state_14611__$1;(statearr_14637_14672[2] = null);
(statearr_14637_14672[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 17))
{var inst_14590 = (state_14611[17]);var state_14611__$1 = state_14611;var statearr_14638_14673 = state_14611__$1;(statearr_14638_14673[2] = inst_14590);
(statearr_14638_14673[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 18))
{var inst_14576 = (state_14611[15]);var inst_14571 = (state_14611[13]);var inst_14570 = (state_14611[14]);var inst_14593 = cljs.core.empty_QMARK_.call(null,inst_14571);var inst_14594 = inst_14570.call(null,inst_14576);var inst_14595 = cljs.core.not.call(null,inst_14594);var inst_14596 = (inst_14593) && (inst_14595);var state_14611__$1 = state_14611;var statearr_14639_14674 = state_14611__$1;(statearr_14639_14674[2] = inst_14596);
(statearr_14639_14674[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 19))
{var inst_14598 = (state_14611[2]);var state_14611__$1 = state_14611;if(cljs.core.truth_(inst_14598))
{var statearr_14640_14675 = state_14611__$1;(statearr_14640_14675[1] = 20);
} else
{var statearr_14641_14676 = state_14611__$1;(statearr_14641_14676[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 20))
{var inst_14575 = (state_14611[16]);var state_14611__$1 = state_14611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14611__$1,23,out,inst_14575);
} else
{if((state_val_14612 === 21))
{var state_14611__$1 = state_14611;var statearr_14642_14677 = state_14611__$1;(statearr_14642_14677[2] = null);
(statearr_14642_14677[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 22))
{var inst_14568 = (state_14611[12]);var inst_14604 = (state_14611[2]);var inst_14560 = inst_14568;var state_14611__$1 = (function (){var statearr_14643 = state_14611;(statearr_14643[8] = inst_14560);
(statearr_14643[19] = inst_14604);
return statearr_14643;
})();var statearr_14644_14678 = state_14611__$1;(statearr_14644_14678[2] = null);
(statearr_14644_14678[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14612 === 23))
{var inst_14601 = (state_14611[2]);var state_14611__$1 = state_14611;var statearr_14645_14679 = state_14611__$1;(statearr_14645_14679[2] = inst_14601);
(statearr_14645_14679[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14649[0] = state_machine__5507__auto__);
(statearr_14649[1] = 1);
return statearr_14649;
});
var state_machine__5507__auto____1 = (function (state_14611){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14611);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14650){if((e14650 instanceof Object))
{var ex__5510__auto__ = e14650;var statearr_14651_14680 = state_14611;(statearr_14651_14680[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14611);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14681 = state_14611;
state_14611 = G__14681;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14611){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14652 = f__5522__auto__.call(null);(statearr_14652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14653);
return statearr_14652;
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
cljs.core.async.Pub = (function (){var obj14683 = {};return obj14683;
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
return (function (p1__14684_SHARP_){if(cljs.core.truth_(p1__14684_SHARP_.call(null,topic)))
{return p1__14684_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14684_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14809 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14810){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14810 = meta14810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14809.cljs$lang$type = true;
cljs.core.async.t14809.cljs$lang$ctorStr = "cljs.core.async/t14809";
cljs.core.async.t14809.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14809");
});})(mults,ensure_mult))
;
cljs.core.async.t14809.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14809.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14809.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14809.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14811){var self__ = this;
var _14811__$1 = this;return self__.meta14810;
});})(mults,ensure_mult))
;
cljs.core.async.t14809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14811,meta14810__$1){var self__ = this;
var _14811__$1 = this;return (new cljs.core.async.t14809(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14810__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14809 = ((function (mults,ensure_mult){
return (function __GT_t14809(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14810){return (new cljs.core.async.t14809(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14810));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14809(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14885){var state_val_14886 = (state_14885[1]);if((state_val_14886 === 1))
{var state_14885__$1 = state_14885;var statearr_14887_14934 = state_14885__$1;(statearr_14887_14934[2] = null);
(statearr_14887_14934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 2))
{var state_14885__$1 = state_14885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14885__$1,4,ch);
} else
{if((state_val_14886 === 3))
{var inst_14883 = (state_14885[2]);var state_14885__$1 = state_14885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14885__$1,inst_14883);
} else
{if((state_val_14886 === 4))
{var inst_14814 = (state_14885[7]);var inst_14814__$1 = (state_14885[2]);var inst_14815 = (inst_14814__$1 == null);var state_14885__$1 = (function (){var statearr_14888 = state_14885;(statearr_14888[7] = inst_14814__$1);
return statearr_14888;
})();if(cljs.core.truth_(inst_14815))
{var statearr_14889_14935 = state_14885__$1;(statearr_14889_14935[1] = 5);
} else
{var statearr_14890_14936 = state_14885__$1;(statearr_14890_14936[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 5))
{var inst_14821 = cljs.core.deref.call(null,mults);var inst_14822 = cljs.core.vals.call(null,inst_14821);var inst_14823 = cljs.core.seq.call(null,inst_14822);var inst_14824 = inst_14823;var inst_14825 = null;var inst_14826 = 0;var inst_14827 = 0;var state_14885__$1 = (function (){var statearr_14891 = state_14885;(statearr_14891[8] = inst_14827);
(statearr_14891[9] = inst_14826);
(statearr_14891[10] = inst_14824);
(statearr_14891[11] = inst_14825);
return statearr_14891;
})();var statearr_14892_14937 = state_14885__$1;(statearr_14892_14937[2] = null);
(statearr_14892_14937[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 6))
{var inst_14864 = (state_14885[12]);var inst_14862 = (state_14885[13]);var inst_14814 = (state_14885[7]);var inst_14862__$1 = topic_fn.call(null,inst_14814);var inst_14863 = cljs.core.deref.call(null,mults);var inst_14864__$1 = cljs.core.get.call(null,inst_14863,inst_14862__$1);var state_14885__$1 = (function (){var statearr_14893 = state_14885;(statearr_14893[12] = inst_14864__$1);
(statearr_14893[13] = inst_14862__$1);
return statearr_14893;
})();if(cljs.core.truth_(inst_14864__$1))
{var statearr_14894_14938 = state_14885__$1;(statearr_14894_14938[1] = 19);
} else
{var statearr_14895_14939 = state_14885__$1;(statearr_14895_14939[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 7))
{var inst_14881 = (state_14885[2]);var state_14885__$1 = state_14885;var statearr_14896_14940 = state_14885__$1;(statearr_14896_14940[2] = inst_14881);
(statearr_14896_14940[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 8))
{var inst_14827 = (state_14885[8]);var inst_14826 = (state_14885[9]);var inst_14829 = (inst_14827 < inst_14826);var inst_14830 = inst_14829;var state_14885__$1 = state_14885;if(cljs.core.truth_(inst_14830))
{var statearr_14900_14941 = state_14885__$1;(statearr_14900_14941[1] = 10);
} else
{var statearr_14901_14942 = state_14885__$1;(statearr_14901_14942[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 9))
{var inst_14860 = (state_14885[2]);var state_14885__$1 = state_14885;var statearr_14902_14943 = state_14885__$1;(statearr_14902_14943[2] = inst_14860);
(statearr_14902_14943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 10))
{var inst_14827 = (state_14885[8]);var inst_14826 = (state_14885[9]);var inst_14824 = (state_14885[10]);var inst_14825 = (state_14885[11]);var inst_14832 = cljs.core._nth.call(null,inst_14825,inst_14827);var inst_14833 = cljs.core.async.muxch_STAR_.call(null,inst_14832);var inst_14834 = cljs.core.async.close_BANG_.call(null,inst_14833);var inst_14835 = (inst_14827 + 1);var tmp14897 = inst_14826;var tmp14898 = inst_14824;var tmp14899 = inst_14825;var inst_14824__$1 = tmp14898;var inst_14825__$1 = tmp14899;var inst_14826__$1 = tmp14897;var inst_14827__$1 = inst_14835;var state_14885__$1 = (function (){var statearr_14903 = state_14885;(statearr_14903[8] = inst_14827__$1);
(statearr_14903[9] = inst_14826__$1);
(statearr_14903[14] = inst_14834);
(statearr_14903[10] = inst_14824__$1);
(statearr_14903[11] = inst_14825__$1);
return statearr_14903;
})();var statearr_14904_14944 = state_14885__$1;(statearr_14904_14944[2] = null);
(statearr_14904_14944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 11))
{var inst_14838 = (state_14885[15]);var inst_14824 = (state_14885[10]);var inst_14838__$1 = cljs.core.seq.call(null,inst_14824);var state_14885__$1 = (function (){var statearr_14905 = state_14885;(statearr_14905[15] = inst_14838__$1);
return statearr_14905;
})();if(inst_14838__$1)
{var statearr_14906_14945 = state_14885__$1;(statearr_14906_14945[1] = 13);
} else
{var statearr_14907_14946 = state_14885__$1;(statearr_14907_14946[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 12))
{var inst_14858 = (state_14885[2]);var state_14885__$1 = state_14885;var statearr_14908_14947 = state_14885__$1;(statearr_14908_14947[2] = inst_14858);
(statearr_14908_14947[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 13))
{var inst_14838 = (state_14885[15]);var inst_14840 = cljs.core.chunked_seq_QMARK_.call(null,inst_14838);var state_14885__$1 = state_14885;if(inst_14840)
{var statearr_14909_14948 = state_14885__$1;(statearr_14909_14948[1] = 16);
} else
{var statearr_14910_14949 = state_14885__$1;(statearr_14910_14949[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 14))
{var state_14885__$1 = state_14885;var statearr_14911_14950 = state_14885__$1;(statearr_14911_14950[2] = null);
(statearr_14911_14950[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 15))
{var inst_14856 = (state_14885[2]);var state_14885__$1 = state_14885;var statearr_14912_14951 = state_14885__$1;(statearr_14912_14951[2] = inst_14856);
(statearr_14912_14951[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 16))
{var inst_14838 = (state_14885[15]);var inst_14842 = cljs.core.chunk_first.call(null,inst_14838);var inst_14843 = cljs.core.chunk_rest.call(null,inst_14838);var inst_14844 = cljs.core.count.call(null,inst_14842);var inst_14824 = inst_14843;var inst_14825 = inst_14842;var inst_14826 = inst_14844;var inst_14827 = 0;var state_14885__$1 = (function (){var statearr_14913 = state_14885;(statearr_14913[8] = inst_14827);
(statearr_14913[9] = inst_14826);
(statearr_14913[10] = inst_14824);
(statearr_14913[11] = inst_14825);
return statearr_14913;
})();var statearr_14914_14952 = state_14885__$1;(statearr_14914_14952[2] = null);
(statearr_14914_14952[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 17))
{var inst_14838 = (state_14885[15]);var inst_14847 = cljs.core.first.call(null,inst_14838);var inst_14848 = cljs.core.async.muxch_STAR_.call(null,inst_14847);var inst_14849 = cljs.core.async.close_BANG_.call(null,inst_14848);var inst_14850 = cljs.core.next.call(null,inst_14838);var inst_14824 = inst_14850;var inst_14825 = null;var inst_14826 = 0;var inst_14827 = 0;var state_14885__$1 = (function (){var statearr_14915 = state_14885;(statearr_14915[8] = inst_14827);
(statearr_14915[9] = inst_14826);
(statearr_14915[10] = inst_14824);
(statearr_14915[11] = inst_14825);
(statearr_14915[16] = inst_14849);
return statearr_14915;
})();var statearr_14916_14953 = state_14885__$1;(statearr_14916_14953[2] = null);
(statearr_14916_14953[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 18))
{var inst_14853 = (state_14885[2]);var state_14885__$1 = state_14885;var statearr_14917_14954 = state_14885__$1;(statearr_14917_14954[2] = inst_14853);
(statearr_14917_14954[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 19))
{var state_14885__$1 = state_14885;var statearr_14918_14955 = state_14885__$1;(statearr_14918_14955[2] = null);
(statearr_14918_14955[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 20))
{var state_14885__$1 = state_14885;var statearr_14919_14956 = state_14885__$1;(statearr_14919_14956[2] = null);
(statearr_14919_14956[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 21))
{var inst_14878 = (state_14885[2]);var state_14885__$1 = (function (){var statearr_14920 = state_14885;(statearr_14920[17] = inst_14878);
return statearr_14920;
})();var statearr_14921_14957 = state_14885__$1;(statearr_14921_14957[2] = null);
(statearr_14921_14957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 22))
{var inst_14875 = (state_14885[2]);var state_14885__$1 = state_14885;var statearr_14922_14958 = state_14885__$1;(statearr_14922_14958[2] = inst_14875);
(statearr_14922_14958[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 23))
{var inst_14862 = (state_14885[13]);var inst_14866 = (state_14885[2]);var inst_14867 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14862);var state_14885__$1 = (function (){var statearr_14923 = state_14885;(statearr_14923[18] = inst_14866);
return statearr_14923;
})();var statearr_14924_14959 = state_14885__$1;(statearr_14924_14959[2] = inst_14867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14885__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14886 === 24))
{var inst_14864 = (state_14885[12]);var inst_14814 = (state_14885[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14885,23,Object,null,22);var inst_14871 = cljs.core.async.muxch_STAR_.call(null,inst_14864);var state_14885__$1 = state_14885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14885__$1,25,inst_14871,inst_14814);
} else
{if((state_val_14886 === 25))
{var inst_14873 = (state_14885[2]);var state_14885__$1 = state_14885;var statearr_14925_14960 = state_14885__$1;(statearr_14925_14960[2] = inst_14873);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14885__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14929[0] = state_machine__5507__auto__);
(statearr_14929[1] = 1);
return statearr_14929;
});
var state_machine__5507__auto____1 = (function (state_14885){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14930){if((e14930 instanceof Object))
{var ex__5510__auto__ = e14930;var statearr_14931_14961 = state_14885;(statearr_14931_14961[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14962 = state_14885;
state_14885 = G__14962;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14885){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14932 = f__5522__auto__.call(null);(statearr_14932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14933);
return statearr_14932;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15069){var state_val_15070 = (state_15069[1]);if((state_val_15070 === 1))
{var state_15069__$1 = state_15069;var statearr_15071_15100 = state_15069__$1;(statearr_15071_15100[2] = null);
(statearr_15071_15100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 2))
{var inst_15032 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15033 = 0;var state_15069__$1 = (function (){var statearr_15072 = state_15069;(statearr_15072[7] = inst_15033);
(statearr_15072[8] = inst_15032);
return statearr_15072;
})();var statearr_15073_15101 = state_15069__$1;(statearr_15073_15101[2] = null);
(statearr_15073_15101[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 3))
{var inst_15067 = (state_15069[2]);var state_15069__$1 = state_15069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15069__$1,inst_15067);
} else
{if((state_val_15070 === 4))
{var inst_15033 = (state_15069[7]);var inst_15035 = (inst_15033 < cnt);var state_15069__$1 = state_15069;if(cljs.core.truth_(inst_15035))
{var statearr_15074_15102 = state_15069__$1;(statearr_15074_15102[1] = 6);
} else
{var statearr_15075_15103 = state_15069__$1;(statearr_15075_15103[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 5))
{var inst_15053 = (state_15069[2]);var state_15069__$1 = (function (){var statearr_15076 = state_15069;(statearr_15076[9] = inst_15053);
return statearr_15076;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15069__$1,12,dchan);
} else
{if((state_val_15070 === 6))
{var state_15069__$1 = state_15069;var statearr_15077_15104 = state_15069__$1;(statearr_15077_15104[2] = null);
(statearr_15077_15104[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 7))
{var state_15069__$1 = state_15069;var statearr_15078_15105 = state_15069__$1;(statearr_15078_15105[2] = null);
(statearr_15078_15105[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 8))
{var inst_15051 = (state_15069[2]);var state_15069__$1 = state_15069;var statearr_15079_15106 = state_15069__$1;(statearr_15079_15106[2] = inst_15051);
(statearr_15079_15106[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 9))
{var inst_15033 = (state_15069[7]);var inst_15046 = (state_15069[2]);var inst_15047 = (inst_15033 + 1);var inst_15033__$1 = inst_15047;var state_15069__$1 = (function (){var statearr_15080 = state_15069;(statearr_15080[7] = inst_15033__$1);
(statearr_15080[10] = inst_15046);
return statearr_15080;
})();var statearr_15081_15107 = state_15069__$1;(statearr_15081_15107[2] = null);
(statearr_15081_15107[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 10))
{var inst_15037 = (state_15069[2]);var inst_15038 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15069__$1 = (function (){var statearr_15082 = state_15069;(statearr_15082[11] = inst_15037);
return statearr_15082;
})();var statearr_15083_15108 = state_15069__$1;(statearr_15083_15108[2] = inst_15038);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15069__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 11))
{var inst_15033 = (state_15069[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15069,10,Object,null,9);var inst_15042 = chs__$1.call(null,inst_15033);var inst_15043 = done.call(null,inst_15033);var inst_15044 = cljs.core.async.take_BANG_.call(null,inst_15042,inst_15043);var state_15069__$1 = state_15069;var statearr_15084_15109 = state_15069__$1;(statearr_15084_15109[2] = inst_15044);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15069__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 12))
{var inst_15055 = (state_15069[12]);var inst_15055__$1 = (state_15069[2]);var inst_15056 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15055__$1);var state_15069__$1 = (function (){var statearr_15085 = state_15069;(statearr_15085[12] = inst_15055__$1);
return statearr_15085;
})();if(cljs.core.truth_(inst_15056))
{var statearr_15086_15110 = state_15069__$1;(statearr_15086_15110[1] = 13);
} else
{var statearr_15087_15111 = state_15069__$1;(statearr_15087_15111[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 13))
{var inst_15058 = cljs.core.async.close_BANG_.call(null,out);var state_15069__$1 = state_15069;var statearr_15088_15112 = state_15069__$1;(statearr_15088_15112[2] = inst_15058);
(statearr_15088_15112[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 14))
{var inst_15055 = (state_15069[12]);var inst_15060 = cljs.core.apply.call(null,f,inst_15055);var state_15069__$1 = state_15069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15069__$1,16,out,inst_15060);
} else
{if((state_val_15070 === 15))
{var inst_15065 = (state_15069[2]);var state_15069__$1 = state_15069;var statearr_15089_15113 = state_15069__$1;(statearr_15089_15113[2] = inst_15065);
(statearr_15089_15113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15070 === 16))
{var inst_15062 = (state_15069[2]);var state_15069__$1 = (function (){var statearr_15090 = state_15069;(statearr_15090[13] = inst_15062);
return statearr_15090;
})();var statearr_15091_15114 = state_15069__$1;(statearr_15091_15114[2] = null);
(statearr_15091_15114[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15095[0] = state_machine__5507__auto__);
(statearr_15095[1] = 1);
return statearr_15095;
});
var state_machine__5507__auto____1 = (function (state_15069){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15069);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15096){if((e15096 instanceof Object))
{var ex__5510__auto__ = e15096;var statearr_15097_15115 = state_15069;(statearr_15097_15115[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15116 = state_15069;
state_15069 = G__15116;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15069){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15098 = f__5522__auto__.call(null);(statearr_15098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15099);
return statearr_15098;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15224 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15200){var state_val_15201 = (state_15200[1]);if((state_val_15201 === 1))
{var inst_15171 = cljs.core.vec.call(null,chs);var inst_15172 = inst_15171;var state_15200__$1 = (function (){var statearr_15202 = state_15200;(statearr_15202[7] = inst_15172);
return statearr_15202;
})();var statearr_15203_15225 = state_15200__$1;(statearr_15203_15225[2] = null);
(statearr_15203_15225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 2))
{var inst_15172 = (state_15200[7]);var inst_15174 = cljs.core.count.call(null,inst_15172);var inst_15175 = (inst_15174 > 0);var state_15200__$1 = state_15200;if(cljs.core.truth_(inst_15175))
{var statearr_15204_15226 = state_15200__$1;(statearr_15204_15226[1] = 4);
} else
{var statearr_15205_15227 = state_15200__$1;(statearr_15205_15227[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 3))
{var inst_15198 = (state_15200[2]);var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15200__$1,inst_15198);
} else
{if((state_val_15201 === 4))
{var inst_15172 = (state_15200[7]);var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15200__$1,7,inst_15172);
} else
{if((state_val_15201 === 5))
{var inst_15194 = cljs.core.async.close_BANG_.call(null,out);var state_15200__$1 = state_15200;var statearr_15206_15228 = state_15200__$1;(statearr_15206_15228[2] = inst_15194);
(statearr_15206_15228[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 6))
{var inst_15196 = (state_15200[2]);var state_15200__$1 = state_15200;var statearr_15207_15229 = state_15200__$1;(statearr_15207_15229[2] = inst_15196);
(statearr_15207_15229[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 7))
{var inst_15179 = (state_15200[8]);var inst_15180 = (state_15200[9]);var inst_15179__$1 = (state_15200[2]);var inst_15180__$1 = cljs.core.nth.call(null,inst_15179__$1,0,null);var inst_15181 = cljs.core.nth.call(null,inst_15179__$1,1,null);var inst_15182 = (inst_15180__$1 == null);var state_15200__$1 = (function (){var statearr_15208 = state_15200;(statearr_15208[8] = inst_15179__$1);
(statearr_15208[9] = inst_15180__$1);
(statearr_15208[10] = inst_15181);
return statearr_15208;
})();if(cljs.core.truth_(inst_15182))
{var statearr_15209_15230 = state_15200__$1;(statearr_15209_15230[1] = 8);
} else
{var statearr_15210_15231 = state_15200__$1;(statearr_15210_15231[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 8))
{var inst_15179 = (state_15200[8]);var inst_15180 = (state_15200[9]);var inst_15181 = (state_15200[10]);var inst_15172 = (state_15200[7]);var inst_15184 = (function (){var c = inst_15181;var v = inst_15180;var vec__15177 = inst_15179;var cs = inst_15172;return ((function (c,v,vec__15177,cs,inst_15179,inst_15180,inst_15181,inst_15172,state_val_15201){
return (function (p1__15117_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15117_SHARP_);
});
;})(c,v,vec__15177,cs,inst_15179,inst_15180,inst_15181,inst_15172,state_val_15201))
})();var inst_15185 = cljs.core.filterv.call(null,inst_15184,inst_15172);var inst_15172__$1 = inst_15185;var state_15200__$1 = (function (){var statearr_15211 = state_15200;(statearr_15211[7] = inst_15172__$1);
return statearr_15211;
})();var statearr_15212_15232 = state_15200__$1;(statearr_15212_15232[2] = null);
(statearr_15212_15232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 9))
{var inst_15180 = (state_15200[9]);var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15200__$1,11,out,inst_15180);
} else
{if((state_val_15201 === 10))
{var inst_15192 = (state_15200[2]);var state_15200__$1 = state_15200;var statearr_15214_15233 = state_15200__$1;(statearr_15214_15233[2] = inst_15192);
(statearr_15214_15233[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 11))
{var inst_15172 = (state_15200[7]);var inst_15189 = (state_15200[2]);var tmp15213 = inst_15172;var inst_15172__$1 = tmp15213;var state_15200__$1 = (function (){var statearr_15215 = state_15200;(statearr_15215[11] = inst_15189);
(statearr_15215[7] = inst_15172__$1);
return statearr_15215;
})();var statearr_15216_15234 = state_15200__$1;(statearr_15216_15234[2] = null);
(statearr_15216_15234[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15220 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15220[0] = state_machine__5507__auto__);
(statearr_15220[1] = 1);
return statearr_15220;
});
var state_machine__5507__auto____1 = (function (state_15200){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15200);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15221){if((e15221 instanceof Object))
{var ex__5510__auto__ = e15221;var statearr_15222_15235 = state_15200;(statearr_15222_15235[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15236 = state_15200;
state_15200 = G__15236;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15200){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15223 = f__5522__auto__.call(null);(statearr_15223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15224);
return statearr_15223;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15329 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15306){var state_val_15307 = (state_15306[1]);if((state_val_15307 === 1))
{var inst_15283 = 0;var state_15306__$1 = (function (){var statearr_15308 = state_15306;(statearr_15308[7] = inst_15283);
return statearr_15308;
})();var statearr_15309_15330 = state_15306__$1;(statearr_15309_15330[2] = null);
(statearr_15309_15330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15307 === 2))
{var inst_15283 = (state_15306[7]);var inst_15285 = (inst_15283 < n);var state_15306__$1 = state_15306;if(cljs.core.truth_(inst_15285))
{var statearr_15310_15331 = state_15306__$1;(statearr_15310_15331[1] = 4);
} else
{var statearr_15311_15332 = state_15306__$1;(statearr_15311_15332[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15307 === 3))
{var inst_15303 = (state_15306[2]);var inst_15304 = cljs.core.async.close_BANG_.call(null,out);var state_15306__$1 = (function (){var statearr_15312 = state_15306;(statearr_15312[8] = inst_15303);
return statearr_15312;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15306__$1,inst_15304);
} else
{if((state_val_15307 === 4))
{var state_15306__$1 = state_15306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15306__$1,7,ch);
} else
{if((state_val_15307 === 5))
{var state_15306__$1 = state_15306;var statearr_15313_15333 = state_15306__$1;(statearr_15313_15333[2] = null);
(statearr_15313_15333[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15307 === 6))
{var inst_15301 = (state_15306[2]);var state_15306__$1 = state_15306;var statearr_15314_15334 = state_15306__$1;(statearr_15314_15334[2] = inst_15301);
(statearr_15314_15334[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15307 === 7))
{var inst_15288 = (state_15306[9]);var inst_15288__$1 = (state_15306[2]);var inst_15289 = (inst_15288__$1 == null);var inst_15290 = cljs.core.not.call(null,inst_15289);var state_15306__$1 = (function (){var statearr_15315 = state_15306;(statearr_15315[9] = inst_15288__$1);
return statearr_15315;
})();if(inst_15290)
{var statearr_15316_15335 = state_15306__$1;(statearr_15316_15335[1] = 8);
} else
{var statearr_15317_15336 = state_15306__$1;(statearr_15317_15336[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15307 === 8))
{var inst_15288 = (state_15306[9]);var state_15306__$1 = state_15306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15306__$1,11,out,inst_15288);
} else
{if((state_val_15307 === 9))
{var state_15306__$1 = state_15306;var statearr_15318_15337 = state_15306__$1;(statearr_15318_15337[2] = null);
(statearr_15318_15337[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15307 === 10))
{var inst_15298 = (state_15306[2]);var state_15306__$1 = state_15306;var statearr_15319_15338 = state_15306__$1;(statearr_15319_15338[2] = inst_15298);
(statearr_15319_15338[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15307 === 11))
{var inst_15283 = (state_15306[7]);var inst_15293 = (state_15306[2]);var inst_15294 = (inst_15283 + 1);var inst_15283__$1 = inst_15294;var state_15306__$1 = (function (){var statearr_15320 = state_15306;(statearr_15320[10] = inst_15293);
(statearr_15320[7] = inst_15283__$1);
return statearr_15320;
})();var statearr_15321_15339 = state_15306__$1;(statearr_15321_15339[2] = null);
(statearr_15321_15339[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15325 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15325[0] = state_machine__5507__auto__);
(statearr_15325[1] = 1);
return statearr_15325;
});
var state_machine__5507__auto____1 = (function (state_15306){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15306);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15326){if((e15326 instanceof Object))
{var ex__5510__auto__ = e15326;var statearr_15327_15340 = state_15306;(statearr_15327_15340[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15306);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15326;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15341 = state_15306;
state_15306 = G__15341;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15306){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15328 = f__5522__auto__.call(null);(statearr_15328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15329);
return statearr_15328;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15438 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15413){var state_val_15414 = (state_15413[1]);if((state_val_15414 === 1))
{var inst_15390 = null;var state_15413__$1 = (function (){var statearr_15415 = state_15413;(statearr_15415[7] = inst_15390);
return statearr_15415;
})();var statearr_15416_15439 = state_15413__$1;(statearr_15416_15439[2] = null);
(statearr_15416_15439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15414 === 2))
{var state_15413__$1 = state_15413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15413__$1,4,ch);
} else
{if((state_val_15414 === 3))
{var inst_15410 = (state_15413[2]);var inst_15411 = cljs.core.async.close_BANG_.call(null,out);var state_15413__$1 = (function (){var statearr_15417 = state_15413;(statearr_15417[8] = inst_15410);
return statearr_15417;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15413__$1,inst_15411);
} else
{if((state_val_15414 === 4))
{var inst_15393 = (state_15413[9]);var inst_15393__$1 = (state_15413[2]);var inst_15394 = (inst_15393__$1 == null);var inst_15395 = cljs.core.not.call(null,inst_15394);var state_15413__$1 = (function (){var statearr_15418 = state_15413;(statearr_15418[9] = inst_15393__$1);
return statearr_15418;
})();if(inst_15395)
{var statearr_15419_15440 = state_15413__$1;(statearr_15419_15440[1] = 5);
} else
{var statearr_15420_15441 = state_15413__$1;(statearr_15420_15441[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15414 === 5))
{var inst_15390 = (state_15413[7]);var inst_15393 = (state_15413[9]);var inst_15397 = cljs.core._EQ_.call(null,inst_15393,inst_15390);var state_15413__$1 = state_15413;if(inst_15397)
{var statearr_15421_15442 = state_15413__$1;(statearr_15421_15442[1] = 8);
} else
{var statearr_15422_15443 = state_15413__$1;(statearr_15422_15443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15414 === 6))
{var state_15413__$1 = state_15413;var statearr_15424_15444 = state_15413__$1;(statearr_15424_15444[2] = null);
(statearr_15424_15444[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15414 === 7))
{var inst_15408 = (state_15413[2]);var state_15413__$1 = state_15413;var statearr_15425_15445 = state_15413__$1;(statearr_15425_15445[2] = inst_15408);
(statearr_15425_15445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15414 === 8))
{var inst_15390 = (state_15413[7]);var tmp15423 = inst_15390;var inst_15390__$1 = tmp15423;var state_15413__$1 = (function (){var statearr_15426 = state_15413;(statearr_15426[7] = inst_15390__$1);
return statearr_15426;
})();var statearr_15427_15446 = state_15413__$1;(statearr_15427_15446[2] = null);
(statearr_15427_15446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15414 === 9))
{var inst_15393 = (state_15413[9]);var state_15413__$1 = state_15413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15413__$1,11,out,inst_15393);
} else
{if((state_val_15414 === 10))
{var inst_15405 = (state_15413[2]);var state_15413__$1 = state_15413;var statearr_15428_15447 = state_15413__$1;(statearr_15428_15447[2] = inst_15405);
(statearr_15428_15447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15414 === 11))
{var inst_15393 = (state_15413[9]);var inst_15402 = (state_15413[2]);var inst_15390 = inst_15393;var state_15413__$1 = (function (){var statearr_15429 = state_15413;(statearr_15429[7] = inst_15390);
(statearr_15429[10] = inst_15402);
return statearr_15429;
})();var statearr_15430_15448 = state_15413__$1;(statearr_15430_15448[2] = null);
(statearr_15430_15448[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15434 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15434[0] = state_machine__5507__auto__);
(statearr_15434[1] = 1);
return statearr_15434;
});
var state_machine__5507__auto____1 = (function (state_15413){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15413);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15435){if((e15435 instanceof Object))
{var ex__5510__auto__ = e15435;var statearr_15436_15449 = state_15413;(statearr_15436_15449[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15450 = state_15413;
state_15413 = G__15450;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15413){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15437 = f__5522__auto__.call(null);(statearr_15437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15438);
return statearr_15437;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15585 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15555){var state_val_15556 = (state_15555[1]);if((state_val_15556 === 1))
{var inst_15518 = (new Array(n));var inst_15519 = inst_15518;var inst_15520 = 0;var state_15555__$1 = (function (){var statearr_15557 = state_15555;(statearr_15557[7] = inst_15519);
(statearr_15557[8] = inst_15520);
return statearr_15557;
})();var statearr_15558_15586 = state_15555__$1;(statearr_15558_15586[2] = null);
(statearr_15558_15586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 2))
{var state_15555__$1 = state_15555;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15555__$1,4,ch);
} else
{if((state_val_15556 === 3))
{var inst_15553 = (state_15555[2]);var state_15555__$1 = state_15555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15555__$1,inst_15553);
} else
{if((state_val_15556 === 4))
{var inst_15523 = (state_15555[9]);var inst_15523__$1 = (state_15555[2]);var inst_15524 = (inst_15523__$1 == null);var inst_15525 = cljs.core.not.call(null,inst_15524);var state_15555__$1 = (function (){var statearr_15559 = state_15555;(statearr_15559[9] = inst_15523__$1);
return statearr_15559;
})();if(inst_15525)
{var statearr_15560_15587 = state_15555__$1;(statearr_15560_15587[1] = 5);
} else
{var statearr_15561_15588 = state_15555__$1;(statearr_15561_15588[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 5))
{var inst_15519 = (state_15555[7]);var inst_15528 = (state_15555[10]);var inst_15523 = (state_15555[9]);var inst_15520 = (state_15555[8]);var inst_15527 = (inst_15519[inst_15520] = inst_15523);var inst_15528__$1 = (inst_15520 + 1);var inst_15529 = (inst_15528__$1 < n);var state_15555__$1 = (function (){var statearr_15562 = state_15555;(statearr_15562[11] = inst_15527);
(statearr_15562[10] = inst_15528__$1);
return statearr_15562;
})();if(cljs.core.truth_(inst_15529))
{var statearr_15563_15589 = state_15555__$1;(statearr_15563_15589[1] = 8);
} else
{var statearr_15564_15590 = state_15555__$1;(statearr_15564_15590[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 6))
{var inst_15520 = (state_15555[8]);var inst_15541 = (inst_15520 > 0);var state_15555__$1 = state_15555;if(cljs.core.truth_(inst_15541))
{var statearr_15566_15591 = state_15555__$1;(statearr_15566_15591[1] = 12);
} else
{var statearr_15567_15592 = state_15555__$1;(statearr_15567_15592[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 7))
{var inst_15551 = (state_15555[2]);var state_15555__$1 = state_15555;var statearr_15568_15593 = state_15555__$1;(statearr_15568_15593[2] = inst_15551);
(statearr_15568_15593[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 8))
{var inst_15519 = (state_15555[7]);var inst_15528 = (state_15555[10]);var tmp15565 = inst_15519;var inst_15519__$1 = tmp15565;var inst_15520 = inst_15528;var state_15555__$1 = (function (){var statearr_15569 = state_15555;(statearr_15569[7] = inst_15519__$1);
(statearr_15569[8] = inst_15520);
return statearr_15569;
})();var statearr_15570_15594 = state_15555__$1;(statearr_15570_15594[2] = null);
(statearr_15570_15594[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 9))
{var inst_15519 = (state_15555[7]);var inst_15533 = cljs.core.vec.call(null,inst_15519);var state_15555__$1 = state_15555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15555__$1,11,out,inst_15533);
} else
{if((state_val_15556 === 10))
{var inst_15539 = (state_15555[2]);var state_15555__$1 = state_15555;var statearr_15571_15595 = state_15555__$1;(statearr_15571_15595[2] = inst_15539);
(statearr_15571_15595[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 11))
{var inst_15535 = (state_15555[2]);var inst_15536 = (new Array(n));var inst_15519 = inst_15536;var inst_15520 = 0;var state_15555__$1 = (function (){var statearr_15572 = state_15555;(statearr_15572[7] = inst_15519);
(statearr_15572[12] = inst_15535);
(statearr_15572[8] = inst_15520);
return statearr_15572;
})();var statearr_15573_15596 = state_15555__$1;(statearr_15573_15596[2] = null);
(statearr_15573_15596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 12))
{var inst_15519 = (state_15555[7]);var inst_15543 = cljs.core.vec.call(null,inst_15519);var state_15555__$1 = state_15555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15555__$1,15,out,inst_15543);
} else
{if((state_val_15556 === 13))
{var state_15555__$1 = state_15555;var statearr_15574_15597 = state_15555__$1;(statearr_15574_15597[2] = null);
(statearr_15574_15597[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 14))
{var inst_15548 = (state_15555[2]);var inst_15549 = cljs.core.async.close_BANG_.call(null,out);var state_15555__$1 = (function (){var statearr_15575 = state_15555;(statearr_15575[13] = inst_15548);
return statearr_15575;
})();var statearr_15576_15598 = state_15555__$1;(statearr_15576_15598[2] = inst_15549);
(statearr_15576_15598[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 15))
{var inst_15545 = (state_15555[2]);var state_15555__$1 = state_15555;var statearr_15577_15599 = state_15555__$1;(statearr_15577_15599[2] = inst_15545);
(statearr_15577_15599[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15581[0] = state_machine__5507__auto__);
(statearr_15581[1] = 1);
return statearr_15581;
});
var state_machine__5507__auto____1 = (function (state_15555){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15555);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15582){if((e15582 instanceof Object))
{var ex__5510__auto__ = e15582;var statearr_15583_15600 = state_15555;(statearr_15583_15600[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15555);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15601 = state_15555;
state_15555 = G__15601;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15555){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15584 = f__5522__auto__.call(null);(statearr_15584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15585);
return statearr_15584;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15714){var state_val_15715 = (state_15714[1]);if((state_val_15715 === 1))
{var inst_15673 = [];var inst_15674 = inst_15673;var inst_15675 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15714__$1 = (function (){var statearr_15716 = state_15714;(statearr_15716[7] = inst_15674);
(statearr_15716[8] = inst_15675);
return statearr_15716;
})();var statearr_15717_15745 = state_15714__$1;(statearr_15717_15745[2] = null);
(statearr_15717_15745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 2))
{var state_15714__$1 = state_15714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15714__$1,4,ch);
} else
{if((state_val_15715 === 3))
{var inst_15712 = (state_15714[2]);var state_15714__$1 = state_15714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15714__$1,inst_15712);
} else
{if((state_val_15715 === 4))
{var inst_15678 = (state_15714[9]);var inst_15678__$1 = (state_15714[2]);var inst_15679 = (inst_15678__$1 == null);var inst_15680 = cljs.core.not.call(null,inst_15679);var state_15714__$1 = (function (){var statearr_15718 = state_15714;(statearr_15718[9] = inst_15678__$1);
return statearr_15718;
})();if(inst_15680)
{var statearr_15719_15746 = state_15714__$1;(statearr_15719_15746[1] = 5);
} else
{var statearr_15720_15747 = state_15714__$1;(statearr_15720_15747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 5))
{var inst_15675 = (state_15714[8]);var inst_15678 = (state_15714[9]);var inst_15682 = (state_15714[10]);var inst_15682__$1 = f.call(null,inst_15678);var inst_15683 = cljs.core._EQ_.call(null,inst_15682__$1,inst_15675);var inst_15684 = cljs.core.keyword_identical_QMARK_.call(null,inst_15675,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15685 = (inst_15683) || (inst_15684);var state_15714__$1 = (function (){var statearr_15721 = state_15714;(statearr_15721[10] = inst_15682__$1);
return statearr_15721;
})();if(cljs.core.truth_(inst_15685))
{var statearr_15722_15748 = state_15714__$1;(statearr_15722_15748[1] = 8);
} else
{var statearr_15723_15749 = state_15714__$1;(statearr_15723_15749[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 6))
{var inst_15674 = (state_15714[7]);var inst_15699 = inst_15674.length;var inst_15700 = (inst_15699 > 0);var state_15714__$1 = state_15714;if(cljs.core.truth_(inst_15700))
{var statearr_15725_15750 = state_15714__$1;(statearr_15725_15750[1] = 12);
} else
{var statearr_15726_15751 = state_15714__$1;(statearr_15726_15751[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 7))
{var inst_15710 = (state_15714[2]);var state_15714__$1 = state_15714;var statearr_15727_15752 = state_15714__$1;(statearr_15727_15752[2] = inst_15710);
(statearr_15727_15752[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 8))
{var inst_15674 = (state_15714[7]);var inst_15678 = (state_15714[9]);var inst_15682 = (state_15714[10]);var inst_15687 = inst_15674.push(inst_15678);var tmp15724 = inst_15674;var inst_15674__$1 = tmp15724;var inst_15675 = inst_15682;var state_15714__$1 = (function (){var statearr_15728 = state_15714;(statearr_15728[7] = inst_15674__$1);
(statearr_15728[8] = inst_15675);
(statearr_15728[11] = inst_15687);
return statearr_15728;
})();var statearr_15729_15753 = state_15714__$1;(statearr_15729_15753[2] = null);
(statearr_15729_15753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 9))
{var inst_15674 = (state_15714[7]);var inst_15690 = cljs.core.vec.call(null,inst_15674);var state_15714__$1 = state_15714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15714__$1,11,out,inst_15690);
} else
{if((state_val_15715 === 10))
{var inst_15697 = (state_15714[2]);var state_15714__$1 = state_15714;var statearr_15730_15754 = state_15714__$1;(statearr_15730_15754[2] = inst_15697);
(statearr_15730_15754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 11))
{var inst_15678 = (state_15714[9]);var inst_15682 = (state_15714[10]);var inst_15692 = (state_15714[2]);var inst_15693 = [];var inst_15694 = inst_15693.push(inst_15678);var inst_15674 = inst_15693;var inst_15675 = inst_15682;var state_15714__$1 = (function (){var statearr_15731 = state_15714;(statearr_15731[12] = inst_15694);
(statearr_15731[13] = inst_15692);
(statearr_15731[7] = inst_15674);
(statearr_15731[8] = inst_15675);
return statearr_15731;
})();var statearr_15732_15755 = state_15714__$1;(statearr_15732_15755[2] = null);
(statearr_15732_15755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 12))
{var inst_15674 = (state_15714[7]);var inst_15702 = cljs.core.vec.call(null,inst_15674);var state_15714__$1 = state_15714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15714__$1,15,out,inst_15702);
} else
{if((state_val_15715 === 13))
{var state_15714__$1 = state_15714;var statearr_15733_15756 = state_15714__$1;(statearr_15733_15756[2] = null);
(statearr_15733_15756[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 14))
{var inst_15707 = (state_15714[2]);var inst_15708 = cljs.core.async.close_BANG_.call(null,out);var state_15714__$1 = (function (){var statearr_15734 = state_15714;(statearr_15734[14] = inst_15707);
return statearr_15734;
})();var statearr_15735_15757 = state_15714__$1;(statearr_15735_15757[2] = inst_15708);
(statearr_15735_15757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15715 === 15))
{var inst_15704 = (state_15714[2]);var state_15714__$1 = state_15714;var statearr_15736_15758 = state_15714__$1;(statearr_15736_15758[2] = inst_15704);
(statearr_15736_15758[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15740[0] = state_machine__5507__auto__);
(statearr_15740[1] = 1);
return statearr_15740;
});
var state_machine__5507__auto____1 = (function (state_15714){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15714);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15741){if((e15741 instanceof Object))
{var ex__5510__auto__ = e15741;var statearr_15742_15759 = state_15714;(statearr_15742_15759[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15760 = state_15714;
state_15714 = G__15760;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15743 = f__5522__auto__.call(null);(statearr_15743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15744);
return statearr_15743;
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