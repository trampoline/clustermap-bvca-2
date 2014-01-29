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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13099 = (function (f,fn_handler,meta13100){
this.f = f;
this.fn_handler = fn_handler;
this.meta13100 = meta13100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13099.cljs$lang$type = true;
cljs.core.async.t13099.cljs$lang$ctorStr = "cljs.core.async/t13099";
cljs.core.async.t13099.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13099");
});
cljs.core.async.t13099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13101){var self__ = this;
var _13101__$1 = this;return self__.meta13100;
});
cljs.core.async.t13099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13101,meta13100__$1){var self__ = this;
var _13101__$1 = this;return (new cljs.core.async.t13099(self__.f,self__.fn_handler,meta13100__$1));
});
cljs.core.async.__GT_t13099 = (function __GT_t13099(f__$1,fn_handler__$1,meta13100){return (new cljs.core.async.t13099(f__$1,fn_handler__$1,meta13100));
});
}
return (new cljs.core.async.t13099(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13103 = buff;if(G__13103)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13103.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13103.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13103);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13103);
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
{var val_13104 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13104);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13104);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13105 = n;var x_13106 = 0;while(true){
if((x_13106 < n__4248__auto___13105))
{(a[x_13106] = 0);
{
var G__13107 = (x_13106 + 1);
x_13106 = G__13107;
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
var G__13108 = (i + 1);
i = G__13108;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13112 = (function (flag,alt_flag,meta13113){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13113 = meta13113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13112.cljs$lang$type = true;
cljs.core.async.t13112.cljs$lang$ctorStr = "cljs.core.async/t13112";
cljs.core.async.t13112.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13112");
});
cljs.core.async.t13112.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13114){var self__ = this;
var _13114__$1 = this;return self__.meta13113;
});
cljs.core.async.t13112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13114,meta13113__$1){var self__ = this;
var _13114__$1 = this;return (new cljs.core.async.t13112(self__.flag,self__.alt_flag,meta13113__$1));
});
cljs.core.async.__GT_t13112 = (function __GT_t13112(flag__$1,alt_flag__$1,meta13113){return (new cljs.core.async.t13112(flag__$1,alt_flag__$1,meta13113));
});
}
return (new cljs.core.async.t13112(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13118 = (function (cb,flag,alt_handler,meta13119){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13119 = meta13119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13118.cljs$lang$type = true;
cljs.core.async.t13118.cljs$lang$ctorStr = "cljs.core.async/t13118";
cljs.core.async.t13118.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13118");
});
cljs.core.async.t13118.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13120){var self__ = this;
var _13120__$1 = this;return self__.meta13119;
});
cljs.core.async.t13118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13120,meta13119__$1){var self__ = this;
var _13120__$1 = this;return (new cljs.core.async.t13118(self__.cb,self__.flag,self__.alt_handler,meta13119__$1));
});
cljs.core.async.__GT_t13118 = (function __GT_t13118(cb__$1,flag__$1,alt_handler__$1,meta13119){return (new cljs.core.async.t13118(cb__$1,flag__$1,alt_handler__$1,meta13119));
});
}
return (new cljs.core.async.t13118(cb,flag,alt_handler,null));
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
return (function (p1__13121_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13121_SHARP_,port], null));
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
var G__13122 = (i + 1);
i = G__13122;
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
var alts_BANG___delegate = function (ports,p__13123){var map__13125 = p__13123;var map__13125__$1 = ((cljs.core.seq_QMARK_.call(null,map__13125))?cljs.core.apply.call(null,cljs.core.hash_map,map__13125):map__13125);var opts = map__13125__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13123 = null;if (arguments.length > 1) {
  p__13123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13123);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13126){
var ports = cljs.core.first(arglist__13126);
var p__13123 = cljs.core.rest(arglist__13126);
return alts_BANG___delegate(ports,p__13123);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13134 = (function (ch,f,map_LT_,meta13135){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13135 = meta13135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13134.cljs$lang$type = true;
cljs.core.async.t13134.cljs$lang$ctorStr = "cljs.core.async/t13134";
cljs.core.async.t13134.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13134");
});
cljs.core.async.t13134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13137 = (function (fn1,_,meta13135,ch,f,map_LT_,meta13138){
this.fn1 = fn1;
this._ = _;
this.meta13135 = meta13135;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13138 = meta13138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13137.cljs$lang$type = true;
cljs.core.async.t13137.cljs$lang$ctorStr = "cljs.core.async/t13137";
cljs.core.async.t13137.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13137");
});
cljs.core.async.t13137.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13137.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13127_SHARP_){return f1.call(null,(((p1__13127_SHARP_ == null))?null:self__.f.call(null,p1__13127_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13139){var self__ = this;
var _13139__$1 = this;return self__.meta13138;
});
cljs.core.async.t13137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13139,meta13138__$1){var self__ = this;
var _13139__$1 = this;return (new cljs.core.async.t13137(self__.fn1,self__._,self__.meta13135,self__.ch,self__.f,self__.map_LT_,meta13138__$1));
});
cljs.core.async.__GT_t13137 = (function __GT_t13137(fn1__$1,___$2,meta13135__$1,ch__$2,f__$2,map_LT___$2,meta13138){return (new cljs.core.async.t13137(fn1__$1,___$2,meta13135__$1,ch__$2,f__$2,map_LT___$2,meta13138));
});
}
return (new cljs.core.async.t13137(fn1,___$1,self__.meta13135,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13134.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13136){var self__ = this;
var _13136__$1 = this;return self__.meta13135;
});
cljs.core.async.t13134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13136,meta13135__$1){var self__ = this;
var _13136__$1 = this;return (new cljs.core.async.t13134(self__.ch,self__.f,self__.map_LT_,meta13135__$1));
});
cljs.core.async.__GT_t13134 = (function __GT_t13134(ch__$1,f__$1,map_LT___$1,meta13135){return (new cljs.core.async.t13134(ch__$1,f__$1,map_LT___$1,meta13135));
});
}
return (new cljs.core.async.t13134(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13143 = (function (ch,f,map_GT_,meta13144){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13144 = meta13144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13143.cljs$lang$type = true;
cljs.core.async.t13143.cljs$lang$ctorStr = "cljs.core.async/t13143";
cljs.core.async.t13143.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13143");
});
cljs.core.async.t13143.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13143.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13143.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13145){var self__ = this;
var _13145__$1 = this;return self__.meta13144;
});
cljs.core.async.t13143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13145,meta13144__$1){var self__ = this;
var _13145__$1 = this;return (new cljs.core.async.t13143(self__.ch,self__.f,self__.map_GT_,meta13144__$1));
});
cljs.core.async.__GT_t13143 = (function __GT_t13143(ch__$1,f__$1,map_GT___$1,meta13144){return (new cljs.core.async.t13143(ch__$1,f__$1,map_GT___$1,meta13144));
});
}
return (new cljs.core.async.t13143(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13149 = (function (ch,p,filter_GT_,meta13150){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13150 = meta13150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13149.cljs$lang$type = true;
cljs.core.async.t13149.cljs$lang$ctorStr = "cljs.core.async/t13149";
cljs.core.async.t13149.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13149");
});
cljs.core.async.t13149.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13149.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13149.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13151){var self__ = this;
var _13151__$1 = this;return self__.meta13150;
});
cljs.core.async.t13149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13151,meta13150__$1){var self__ = this;
var _13151__$1 = this;return (new cljs.core.async.t13149(self__.ch,self__.p,self__.filter_GT_,meta13150__$1));
});
cljs.core.async.__GT_t13149 = (function __GT_t13149(ch__$1,p__$1,filter_GT___$1,meta13150){return (new cljs.core.async.t13149(ch__$1,p__$1,filter_GT___$1,meta13150));
});
}
return (new cljs.core.async.t13149(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13234 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13213){var state_val_13214 = (state_13213[1]);if((state_val_13214 === 1))
{var state_13213__$1 = state_13213;var statearr_13215_13235 = state_13213__$1;(statearr_13215_13235[2] = null);
(statearr_13215_13235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13214 === 2))
{var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13213__$1,4,ch);
} else
{if((state_val_13214 === 3))
{var inst_13211 = (state_13213[2]);var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13213__$1,inst_13211);
} else
{if((state_val_13214 === 4))
{var inst_13195 = (state_13213[7]);var inst_13195__$1 = (state_13213[2]);var inst_13196 = (inst_13195__$1 == null);var state_13213__$1 = (function (){var statearr_13216 = state_13213;(statearr_13216[7] = inst_13195__$1);
return statearr_13216;
})();if(cljs.core.truth_(inst_13196))
{var statearr_13217_13236 = state_13213__$1;(statearr_13217_13236[1] = 5);
} else
{var statearr_13218_13237 = state_13213__$1;(statearr_13218_13237[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13214 === 5))
{var inst_13198 = cljs.core.async.close_BANG_.call(null,out);var state_13213__$1 = state_13213;var statearr_13219_13238 = state_13213__$1;(statearr_13219_13238[2] = inst_13198);
(statearr_13219_13238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13214 === 6))
{var inst_13195 = (state_13213[7]);var inst_13200 = p.call(null,inst_13195);var state_13213__$1 = state_13213;if(cljs.core.truth_(inst_13200))
{var statearr_13220_13239 = state_13213__$1;(statearr_13220_13239[1] = 8);
} else
{var statearr_13221_13240 = state_13213__$1;(statearr_13221_13240[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13214 === 7))
{var inst_13209 = (state_13213[2]);var state_13213__$1 = state_13213;var statearr_13222_13241 = state_13213__$1;(statearr_13222_13241[2] = inst_13209);
(statearr_13222_13241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13214 === 8))
{var inst_13195 = (state_13213[7]);var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13213__$1,11,out,inst_13195);
} else
{if((state_val_13214 === 9))
{var state_13213__$1 = state_13213;var statearr_13223_13242 = state_13213__$1;(statearr_13223_13242[2] = null);
(statearr_13223_13242[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13214 === 10))
{var inst_13206 = (state_13213[2]);var state_13213__$1 = (function (){var statearr_13224 = state_13213;(statearr_13224[8] = inst_13206);
return statearr_13224;
})();var statearr_13225_13243 = state_13213__$1;(statearr_13225_13243[2] = null);
(statearr_13225_13243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13214 === 11))
{var inst_13203 = (state_13213[2]);var state_13213__$1 = state_13213;var statearr_13226_13244 = state_13213__$1;(statearr_13226_13244[2] = inst_13203);
(statearr_13226_13244[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13230 = [null,null,null,null,null,null,null,null,null];(statearr_13230[0] = state_machine__5507__auto__);
(statearr_13230[1] = 1);
return statearr_13230;
});
var state_machine__5507__auto____1 = (function (state_13213){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13231){if((e13231 instanceof Object))
{var ex__5510__auto__ = e13231;var statearr_13232_13245 = state_13213;(statearr_13232_13245[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13246 = state_13213;
state_13213 = G__13246;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13213){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13233 = f__5522__auto__.call(null);(statearr_13233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13234);
return statearr_13233;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13398){var state_val_13399 = (state_13398[1]);if((state_val_13399 === 1))
{var state_13398__$1 = state_13398;var statearr_13400_13437 = state_13398__$1;(statearr_13400_13437[2] = null);
(statearr_13400_13437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 2))
{var state_13398__$1 = state_13398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13398__$1,4,in$);
} else
{if((state_val_13399 === 3))
{var inst_13396 = (state_13398[2]);var state_13398__$1 = state_13398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13398__$1,inst_13396);
} else
{if((state_val_13399 === 4))
{var inst_13344 = (state_13398[7]);var inst_13344__$1 = (state_13398[2]);var inst_13345 = (inst_13344__$1 == null);var state_13398__$1 = (function (){var statearr_13401 = state_13398;(statearr_13401[7] = inst_13344__$1);
return statearr_13401;
})();if(cljs.core.truth_(inst_13345))
{var statearr_13402_13438 = state_13398__$1;(statearr_13402_13438[1] = 5);
} else
{var statearr_13403_13439 = state_13398__$1;(statearr_13403_13439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 5))
{var inst_13347 = cljs.core.async.close_BANG_.call(null,out);var state_13398__$1 = state_13398;var statearr_13404_13440 = state_13398__$1;(statearr_13404_13440[2] = inst_13347);
(statearr_13404_13440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 6))
{var inst_13344 = (state_13398[7]);var inst_13349 = f.call(null,inst_13344);var inst_13354 = cljs.core.seq.call(null,inst_13349);var inst_13355 = inst_13354;var inst_13356 = null;var inst_13357 = 0;var inst_13358 = 0;var state_13398__$1 = (function (){var statearr_13405 = state_13398;(statearr_13405[8] = inst_13358);
(statearr_13405[9] = inst_13357);
(statearr_13405[10] = inst_13356);
(statearr_13405[11] = inst_13355);
return statearr_13405;
})();var statearr_13406_13441 = state_13398__$1;(statearr_13406_13441[2] = null);
(statearr_13406_13441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 7))
{var inst_13394 = (state_13398[2]);var state_13398__$1 = state_13398;var statearr_13407_13442 = state_13398__$1;(statearr_13407_13442[2] = inst_13394);
(statearr_13407_13442[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 8))
{var inst_13358 = (state_13398[8]);var inst_13357 = (state_13398[9]);var inst_13360 = (inst_13358 < inst_13357);var inst_13361 = inst_13360;var state_13398__$1 = state_13398;if(cljs.core.truth_(inst_13361))
{var statearr_13408_13443 = state_13398__$1;(statearr_13408_13443[1] = 10);
} else
{var statearr_13409_13444 = state_13398__$1;(statearr_13409_13444[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 9))
{var inst_13391 = (state_13398[2]);var state_13398__$1 = (function (){var statearr_13410 = state_13398;(statearr_13410[12] = inst_13391);
return statearr_13410;
})();var statearr_13411_13445 = state_13398__$1;(statearr_13411_13445[2] = null);
(statearr_13411_13445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 10))
{var inst_13358 = (state_13398[8]);var inst_13356 = (state_13398[10]);var inst_13363 = cljs.core._nth.call(null,inst_13356,inst_13358);var state_13398__$1 = state_13398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13398__$1,13,out,inst_13363);
} else
{if((state_val_13399 === 11))
{var inst_13369 = (state_13398[13]);var inst_13355 = (state_13398[11]);var inst_13369__$1 = cljs.core.seq.call(null,inst_13355);var state_13398__$1 = (function (){var statearr_13415 = state_13398;(statearr_13415[13] = inst_13369__$1);
return statearr_13415;
})();if(inst_13369__$1)
{var statearr_13416_13446 = state_13398__$1;(statearr_13416_13446[1] = 14);
} else
{var statearr_13417_13447 = state_13398__$1;(statearr_13417_13447[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 12))
{var inst_13389 = (state_13398[2]);var state_13398__$1 = state_13398;var statearr_13418_13448 = state_13398__$1;(statearr_13418_13448[2] = inst_13389);
(statearr_13418_13448[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 13))
{var inst_13358 = (state_13398[8]);var inst_13357 = (state_13398[9]);var inst_13356 = (state_13398[10]);var inst_13355 = (state_13398[11]);var inst_13365 = (state_13398[2]);var inst_13366 = (inst_13358 + 1);var tmp13412 = inst_13357;var tmp13413 = inst_13356;var tmp13414 = inst_13355;var inst_13355__$1 = tmp13414;var inst_13356__$1 = tmp13413;var inst_13357__$1 = tmp13412;var inst_13358__$1 = inst_13366;var state_13398__$1 = (function (){var statearr_13419 = state_13398;(statearr_13419[14] = inst_13365);
(statearr_13419[8] = inst_13358__$1);
(statearr_13419[9] = inst_13357__$1);
(statearr_13419[10] = inst_13356__$1);
(statearr_13419[11] = inst_13355__$1);
return statearr_13419;
})();var statearr_13420_13449 = state_13398__$1;(statearr_13420_13449[2] = null);
(statearr_13420_13449[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 14))
{var inst_13369 = (state_13398[13]);var inst_13371 = cljs.core.chunked_seq_QMARK_.call(null,inst_13369);var state_13398__$1 = state_13398;if(inst_13371)
{var statearr_13421_13450 = state_13398__$1;(statearr_13421_13450[1] = 17);
} else
{var statearr_13422_13451 = state_13398__$1;(statearr_13422_13451[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 15))
{var state_13398__$1 = state_13398;var statearr_13423_13452 = state_13398__$1;(statearr_13423_13452[2] = null);
(statearr_13423_13452[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 16))
{var inst_13387 = (state_13398[2]);var state_13398__$1 = state_13398;var statearr_13424_13453 = state_13398__$1;(statearr_13424_13453[2] = inst_13387);
(statearr_13424_13453[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 17))
{var inst_13369 = (state_13398[13]);var inst_13373 = cljs.core.chunk_first.call(null,inst_13369);var inst_13374 = cljs.core.chunk_rest.call(null,inst_13369);var inst_13375 = cljs.core.count.call(null,inst_13373);var inst_13355 = inst_13374;var inst_13356 = inst_13373;var inst_13357 = inst_13375;var inst_13358 = 0;var state_13398__$1 = (function (){var statearr_13425 = state_13398;(statearr_13425[8] = inst_13358);
(statearr_13425[9] = inst_13357);
(statearr_13425[10] = inst_13356);
(statearr_13425[11] = inst_13355);
return statearr_13425;
})();var statearr_13426_13454 = state_13398__$1;(statearr_13426_13454[2] = null);
(statearr_13426_13454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 18))
{var inst_13369 = (state_13398[13]);var inst_13378 = cljs.core.first.call(null,inst_13369);var state_13398__$1 = state_13398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13398__$1,20,out,inst_13378);
} else
{if((state_val_13399 === 19))
{var inst_13384 = (state_13398[2]);var state_13398__$1 = state_13398;var statearr_13427_13455 = state_13398__$1;(statearr_13427_13455[2] = inst_13384);
(statearr_13427_13455[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13399 === 20))
{var inst_13369 = (state_13398[13]);var inst_13380 = (state_13398[2]);var inst_13381 = cljs.core.next.call(null,inst_13369);var inst_13355 = inst_13381;var inst_13356 = null;var inst_13357 = 0;var inst_13358 = 0;var state_13398__$1 = (function (){var statearr_13428 = state_13398;(statearr_13428[8] = inst_13358);
(statearr_13428[9] = inst_13357);
(statearr_13428[10] = inst_13356);
(statearr_13428[11] = inst_13355);
(statearr_13428[15] = inst_13380);
return statearr_13428;
})();var statearr_13429_13456 = state_13398__$1;(statearr_13429_13456[2] = null);
(statearr_13429_13456[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13433[0] = state_machine__5507__auto__);
(statearr_13433[1] = 1);
return statearr_13433;
});
var state_machine__5507__auto____1 = (function (state_13398){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13398);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13434){if((e13434 instanceof Object))
{var ex__5510__auto__ = e13434;var statearr_13435_13457 = state_13398;(statearr_13435_13457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13458 = state_13398;
state_13398 = G__13458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13398){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13436 = f__5522__auto__.call(null);(statearr_13436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13436;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13539 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13518){var state_val_13519 = (state_13518[1]);if((state_val_13519 === 1))
{var state_13518__$1 = state_13518;var statearr_13520_13540 = state_13518__$1;(statearr_13520_13540[2] = null);
(statearr_13520_13540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 2))
{var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13518__$1,4,from);
} else
{if((state_val_13519 === 3))
{var inst_13516 = (state_13518[2]);var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13518__$1,inst_13516);
} else
{if((state_val_13519 === 4))
{var inst_13501 = (state_13518[7]);var inst_13501__$1 = (state_13518[2]);var inst_13502 = (inst_13501__$1 == null);var state_13518__$1 = (function (){var statearr_13521 = state_13518;(statearr_13521[7] = inst_13501__$1);
return statearr_13521;
})();if(cljs.core.truth_(inst_13502))
{var statearr_13522_13541 = state_13518__$1;(statearr_13522_13541[1] = 5);
} else
{var statearr_13523_13542 = state_13518__$1;(statearr_13523_13542[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 5))
{var state_13518__$1 = state_13518;if(cljs.core.truth_(close_QMARK_))
{var statearr_13524_13543 = state_13518__$1;(statearr_13524_13543[1] = 8);
} else
{var statearr_13525_13544 = state_13518__$1;(statearr_13525_13544[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 6))
{var inst_13501 = (state_13518[7]);var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13518__$1,11,to,inst_13501);
} else
{if((state_val_13519 === 7))
{var inst_13514 = (state_13518[2]);var state_13518__$1 = state_13518;var statearr_13526_13545 = state_13518__$1;(statearr_13526_13545[2] = inst_13514);
(statearr_13526_13545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 8))
{var inst_13505 = cljs.core.async.close_BANG_.call(null,to);var state_13518__$1 = state_13518;var statearr_13527_13546 = state_13518__$1;(statearr_13527_13546[2] = inst_13505);
(statearr_13527_13546[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 9))
{var state_13518__$1 = state_13518;var statearr_13528_13547 = state_13518__$1;(statearr_13528_13547[2] = null);
(statearr_13528_13547[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 10))
{var inst_13508 = (state_13518[2]);var state_13518__$1 = state_13518;var statearr_13529_13548 = state_13518__$1;(statearr_13529_13548[2] = inst_13508);
(statearr_13529_13548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 11))
{var inst_13511 = (state_13518[2]);var state_13518__$1 = (function (){var statearr_13530 = state_13518;(statearr_13530[8] = inst_13511);
return statearr_13530;
})();var statearr_13531_13549 = state_13518__$1;(statearr_13531_13549[2] = null);
(statearr_13531_13549[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13535 = [null,null,null,null,null,null,null,null,null];(statearr_13535[0] = state_machine__5507__auto__);
(statearr_13535[1] = 1);
return statearr_13535;
});
var state_machine__5507__auto____1 = (function (state_13518){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13518);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13536){if((e13536 instanceof Object))
{var ex__5510__auto__ = e13536;var statearr_13537_13550 = state_13518;(statearr_13537_13550[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13551 = state_13518;
state_13518 = G__13551;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13518){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13538 = f__5522__auto__.call(null);(statearr_13538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13539);
return statearr_13538;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13616){var state_val_13617 = (state_13616[1]);if((state_val_13617 === 1))
{var state_13616__$1 = state_13616;var statearr_13618_13639 = state_13616__$1;(statearr_13618_13639[2] = null);
(statearr_13618_13639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 2))
{var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13616__$1,4,ch);
} else
{if((state_val_13617 === 3))
{var inst_13614 = (state_13616[2]);var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13616__$1,inst_13614);
} else
{if((state_val_13617 === 4))
{var inst_13597 = (state_13616[7]);var inst_13597__$1 = (state_13616[2]);var inst_13598 = (inst_13597__$1 == null);var state_13616__$1 = (function (){var statearr_13619 = state_13616;(statearr_13619[7] = inst_13597__$1);
return statearr_13619;
})();if(cljs.core.truth_(inst_13598))
{var statearr_13620_13640 = state_13616__$1;(statearr_13620_13640[1] = 5);
} else
{var statearr_13621_13641 = state_13616__$1;(statearr_13621_13641[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 5))
{var inst_13600 = cljs.core.async.close_BANG_.call(null,tc);var inst_13601 = cljs.core.async.close_BANG_.call(null,fc);var state_13616__$1 = (function (){var statearr_13622 = state_13616;(statearr_13622[8] = inst_13600);
return statearr_13622;
})();var statearr_13623_13642 = state_13616__$1;(statearr_13623_13642[2] = inst_13601);
(statearr_13623_13642[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 6))
{var inst_13597 = (state_13616[7]);var inst_13603 = p.call(null,inst_13597);var state_13616__$1 = state_13616;if(cljs.core.truth_(inst_13603))
{var statearr_13624_13643 = state_13616__$1;(statearr_13624_13643[1] = 9);
} else
{var statearr_13625_13644 = state_13616__$1;(statearr_13625_13644[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 7))
{var inst_13612 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13626_13645 = state_13616__$1;(statearr_13626_13645[2] = inst_13612);
(statearr_13626_13645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 8))
{var inst_13609 = (state_13616[2]);var state_13616__$1 = (function (){var statearr_13627 = state_13616;(statearr_13627[9] = inst_13609);
return statearr_13627;
})();var statearr_13628_13646 = state_13616__$1;(statearr_13628_13646[2] = null);
(statearr_13628_13646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 9))
{var state_13616__$1 = state_13616;var statearr_13629_13647 = state_13616__$1;(statearr_13629_13647[2] = tc);
(statearr_13629_13647[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 10))
{var state_13616__$1 = state_13616;var statearr_13630_13648 = state_13616__$1;(statearr_13630_13648[2] = fc);
(statearr_13630_13648[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 11))
{var inst_13597 = (state_13616[7]);var inst_13607 = (state_13616[2]);var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13616__$1,8,inst_13607,inst_13597);
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
var state_machine__5507__auto____0 = (function (){var statearr_13634 = [null,null,null,null,null,null,null,null,null,null];(statearr_13634[0] = state_machine__5507__auto__);
(statearr_13634[1] = 1);
return statearr_13634;
});
var state_machine__5507__auto____1 = (function (state_13616){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13616);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13635){if((e13635 instanceof Object))
{var ex__5510__auto__ = e13635;var statearr_13636_13649 = state_13616;(statearr_13636_13649[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13650 = state_13616;
state_13616 = G__13650;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13616){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13637 = f__5522__auto__.call(null);(statearr_13637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13638);
return statearr_13637;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13697){var state_val_13698 = (state_13697[1]);if((state_val_13698 === 7))
{var inst_13693 = (state_13697[2]);var state_13697__$1 = state_13697;var statearr_13699_13715 = state_13697__$1;(statearr_13699_13715[2] = inst_13693);
(statearr_13699_13715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13698 === 6))
{var inst_13686 = (state_13697[7]);var inst_13683 = (state_13697[8]);var inst_13690 = f.call(null,inst_13683,inst_13686);var inst_13683__$1 = inst_13690;var state_13697__$1 = (function (){var statearr_13700 = state_13697;(statearr_13700[8] = inst_13683__$1);
return statearr_13700;
})();var statearr_13701_13716 = state_13697__$1;(statearr_13701_13716[2] = null);
(statearr_13701_13716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13698 === 5))
{var inst_13683 = (state_13697[8]);var state_13697__$1 = state_13697;var statearr_13702_13717 = state_13697__$1;(statearr_13702_13717[2] = inst_13683);
(statearr_13702_13717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13698 === 4))
{var inst_13686 = (state_13697[7]);var inst_13686__$1 = (state_13697[2]);var inst_13687 = (inst_13686__$1 == null);var state_13697__$1 = (function (){var statearr_13703 = state_13697;(statearr_13703[7] = inst_13686__$1);
return statearr_13703;
})();if(cljs.core.truth_(inst_13687))
{var statearr_13704_13718 = state_13697__$1;(statearr_13704_13718[1] = 5);
} else
{var statearr_13705_13719 = state_13697__$1;(statearr_13705_13719[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13698 === 3))
{var inst_13695 = (state_13697[2]);var state_13697__$1 = state_13697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13697__$1,inst_13695);
} else
{if((state_val_13698 === 2))
{var state_13697__$1 = state_13697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13697__$1,4,ch);
} else
{if((state_val_13698 === 1))
{var inst_13683 = init;var state_13697__$1 = (function (){var statearr_13706 = state_13697;(statearr_13706[8] = inst_13683);
return statearr_13706;
})();var statearr_13707_13720 = state_13697__$1;(statearr_13707_13720[2] = null);
(statearr_13707_13720[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13711 = [null,null,null,null,null,null,null,null,null];(statearr_13711[0] = state_machine__5507__auto__);
(statearr_13711[1] = 1);
return statearr_13711;
});
var state_machine__5507__auto____1 = (function (state_13697){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13712){if((e13712 instanceof Object))
{var ex__5510__auto__ = e13712;var statearr_13713_13721 = state_13697;(statearr_13713_13721[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13722 = state_13697;
state_13697 = G__13722;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13697){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13714 = f__5522__auto__.call(null);(statearr_13714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13714;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13784){var state_val_13785 = (state_13784[1]);if((state_val_13785 === 1))
{var inst_13764 = cljs.core.seq.call(null,coll);var inst_13765 = inst_13764;var state_13784__$1 = (function (){var statearr_13786 = state_13784;(statearr_13786[7] = inst_13765);
return statearr_13786;
})();var statearr_13787_13805 = state_13784__$1;(statearr_13787_13805[2] = null);
(statearr_13787_13805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13785 === 2))
{var inst_13765 = (state_13784[7]);var state_13784__$1 = state_13784;if(cljs.core.truth_(inst_13765))
{var statearr_13788_13806 = state_13784__$1;(statearr_13788_13806[1] = 4);
} else
{var statearr_13789_13807 = state_13784__$1;(statearr_13789_13807[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13785 === 3))
{var inst_13782 = (state_13784[2]);var state_13784__$1 = state_13784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13784__$1,inst_13782);
} else
{if((state_val_13785 === 4))
{var inst_13765 = (state_13784[7]);var inst_13768 = cljs.core.first.call(null,inst_13765);var state_13784__$1 = state_13784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13784__$1,7,ch,inst_13768);
} else
{if((state_val_13785 === 5))
{var state_13784__$1 = state_13784;if(cljs.core.truth_(close_QMARK_))
{var statearr_13790_13808 = state_13784__$1;(statearr_13790_13808[1] = 8);
} else
{var statearr_13791_13809 = state_13784__$1;(statearr_13791_13809[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13785 === 6))
{var inst_13780 = (state_13784[2]);var state_13784__$1 = state_13784;var statearr_13792_13810 = state_13784__$1;(statearr_13792_13810[2] = inst_13780);
(statearr_13792_13810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13785 === 7))
{var inst_13765 = (state_13784[7]);var inst_13770 = (state_13784[2]);var inst_13771 = cljs.core.next.call(null,inst_13765);var inst_13765__$1 = inst_13771;var state_13784__$1 = (function (){var statearr_13793 = state_13784;(statearr_13793[7] = inst_13765__$1);
(statearr_13793[8] = inst_13770);
return statearr_13793;
})();var statearr_13794_13811 = state_13784__$1;(statearr_13794_13811[2] = null);
(statearr_13794_13811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13785 === 8))
{var inst_13775 = cljs.core.async.close_BANG_.call(null,ch);var state_13784__$1 = state_13784;var statearr_13795_13812 = state_13784__$1;(statearr_13795_13812[2] = inst_13775);
(statearr_13795_13812[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13785 === 9))
{var state_13784__$1 = state_13784;var statearr_13796_13813 = state_13784__$1;(statearr_13796_13813[2] = null);
(statearr_13796_13813[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13785 === 10))
{var inst_13778 = (state_13784[2]);var state_13784__$1 = state_13784;var statearr_13797_13814 = state_13784__$1;(statearr_13797_13814[2] = inst_13778);
(statearr_13797_13814[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13801 = [null,null,null,null,null,null,null,null,null];(statearr_13801[0] = state_machine__5507__auto__);
(statearr_13801[1] = 1);
return statearr_13801;
});
var state_machine__5507__auto____1 = (function (state_13784){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13784);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13802){if((e13802 instanceof Object))
{var ex__5510__auto__ = e13802;var statearr_13803_13815 = state_13784;(statearr_13803_13815[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13784);
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
var G__13816 = state_13784;
state_13784 = G__13816;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13784){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13784);
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
cljs.core.async.Mux = (function (){var obj13818 = {};return obj13818;
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
cljs.core.async.Mult = (function (){var obj13820 = {};return obj13820;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14044 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14044 = (function (cs,ch,mult,meta14045){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14045 = meta14045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14044.cljs$lang$type = true;
cljs.core.async.t14044.cljs$lang$ctorStr = "cljs.core.async/t14044";
cljs.core.async.t14044.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14044");
});})(cs))
;
cljs.core.async.t14044.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14044.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14044.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14044.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14044.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14046){var self__ = this;
var _14046__$1 = this;return self__.meta14045;
});})(cs))
;
cljs.core.async.t14044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14046,meta14045__$1){var self__ = this;
var _14046__$1 = this;return (new cljs.core.async.t14044(self__.cs,self__.ch,self__.mult,meta14045__$1));
});})(cs))
;
cljs.core.async.__GT_t14044 = ((function (cs){
return (function __GT_t14044(cs__$1,ch__$1,mult__$1,meta14045){return (new cljs.core.async.t14044(cs__$1,ch__$1,mult__$1,meta14045));
});})(cs))
;
}
return (new cljs.core.async.t14044(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14267 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14181){var state_val_14182 = (state_14181[1]);if((state_val_14182 === 32))
{var inst_14049 = (state_14181[7]);var inst_14125 = (state_14181[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14181,31,Object,null,30);var inst_14132 = cljs.core.async.put_BANG_.call(null,inst_14125,inst_14049,done);var state_14181__$1 = state_14181;var statearr_14183_14268 = state_14181__$1;(statearr_14183_14268[2] = inst_14132);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14181__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 1))
{var state_14181__$1 = state_14181;var statearr_14184_14269 = state_14181__$1;(statearr_14184_14269[2] = null);
(statearr_14184_14269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 33))
{var inst_14138 = (state_14181[9]);var inst_14140 = cljs.core.chunked_seq_QMARK_.call(null,inst_14138);var state_14181__$1 = state_14181;if(inst_14140)
{var statearr_14185_14270 = state_14181__$1;(statearr_14185_14270[1] = 36);
} else
{var statearr_14186_14271 = state_14181__$1;(statearr_14186_14271[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 2))
{var state_14181__$1 = state_14181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14181__$1,4,ch);
} else
{if((state_val_14182 === 34))
{var state_14181__$1 = state_14181;var statearr_14187_14272 = state_14181__$1;(statearr_14187_14272[2] = null);
(statearr_14187_14272[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 3))
{var inst_14179 = (state_14181[2]);var state_14181__$1 = state_14181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14181__$1,inst_14179);
} else
{if((state_val_14182 === 35))
{var inst_14163 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14188_14273 = state_14181__$1;(statearr_14188_14273[2] = inst_14163);
(statearr_14188_14273[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 4))
{var inst_14049 = (state_14181[7]);var inst_14049__$1 = (state_14181[2]);var inst_14050 = (inst_14049__$1 == null);var state_14181__$1 = (function (){var statearr_14189 = state_14181;(statearr_14189[7] = inst_14049__$1);
return statearr_14189;
})();if(cljs.core.truth_(inst_14050))
{var statearr_14190_14274 = state_14181__$1;(statearr_14190_14274[1] = 5);
} else
{var statearr_14191_14275 = state_14181__$1;(statearr_14191_14275[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 36))
{var inst_14138 = (state_14181[9]);var inst_14142 = cljs.core.chunk_first.call(null,inst_14138);var inst_14143 = cljs.core.chunk_rest.call(null,inst_14138);var inst_14144 = cljs.core.count.call(null,inst_14142);var inst_14117 = inst_14143;var inst_14118 = inst_14142;var inst_14119 = inst_14144;var inst_14120 = 0;var state_14181__$1 = (function (){var statearr_14192 = state_14181;(statearr_14192[10] = inst_14120);
(statearr_14192[11] = inst_14118);
(statearr_14192[12] = inst_14119);
(statearr_14192[13] = inst_14117);
return statearr_14192;
})();var statearr_14193_14276 = state_14181__$1;(statearr_14193_14276[2] = null);
(statearr_14193_14276[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 5))
{var inst_14056 = cljs.core.deref.call(null,cs);var inst_14057 = cljs.core.seq.call(null,inst_14056);var inst_14058 = inst_14057;var inst_14059 = null;var inst_14060 = 0;var inst_14061 = 0;var state_14181__$1 = (function (){var statearr_14194 = state_14181;(statearr_14194[14] = inst_14059);
(statearr_14194[15] = inst_14058);
(statearr_14194[16] = inst_14060);
(statearr_14194[17] = inst_14061);
return statearr_14194;
})();var statearr_14195_14277 = state_14181__$1;(statearr_14195_14277[2] = null);
(statearr_14195_14277[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 37))
{var inst_14138 = (state_14181[9]);var inst_14147 = cljs.core.first.call(null,inst_14138);var state_14181__$1 = (function (){var statearr_14196 = state_14181;(statearr_14196[18] = inst_14147);
return statearr_14196;
})();var statearr_14197_14278 = state_14181__$1;(statearr_14197_14278[2] = null);
(statearr_14197_14278[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 6))
{var inst_14109 = (state_14181[19]);var inst_14108 = cljs.core.deref.call(null,cs);var inst_14109__$1 = cljs.core.keys.call(null,inst_14108);var inst_14110 = cljs.core.count.call(null,inst_14109__$1);var inst_14111 = cljs.core.reset_BANG_.call(null,dctr,inst_14110);var inst_14116 = cljs.core.seq.call(null,inst_14109__$1);var inst_14117 = inst_14116;var inst_14118 = null;var inst_14119 = 0;var inst_14120 = 0;var state_14181__$1 = (function (){var statearr_14198 = state_14181;(statearr_14198[10] = inst_14120);
(statearr_14198[11] = inst_14118);
(statearr_14198[12] = inst_14119);
(statearr_14198[13] = inst_14117);
(statearr_14198[19] = inst_14109__$1);
(statearr_14198[20] = inst_14111);
return statearr_14198;
})();var statearr_14199_14279 = state_14181__$1;(statearr_14199_14279[2] = null);
(statearr_14199_14279[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 38))
{var inst_14160 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14200_14280 = state_14181__$1;(statearr_14200_14280[2] = inst_14160);
(statearr_14200_14280[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 7))
{var inst_14177 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14201_14281 = state_14181__$1;(statearr_14201_14281[2] = inst_14177);
(statearr_14201_14281[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 39))
{var inst_14138 = (state_14181[9]);var inst_14156 = (state_14181[2]);var inst_14157 = cljs.core.next.call(null,inst_14138);var inst_14117 = inst_14157;var inst_14118 = null;var inst_14119 = 0;var inst_14120 = 0;var state_14181__$1 = (function (){var statearr_14202 = state_14181;(statearr_14202[10] = inst_14120);
(statearr_14202[11] = inst_14118);
(statearr_14202[12] = inst_14119);
(statearr_14202[13] = inst_14117);
(statearr_14202[21] = inst_14156);
return statearr_14202;
})();var statearr_14203_14282 = state_14181__$1;(statearr_14203_14282[2] = null);
(statearr_14203_14282[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 8))
{var inst_14060 = (state_14181[16]);var inst_14061 = (state_14181[17]);var inst_14063 = (inst_14061 < inst_14060);var inst_14064 = inst_14063;var state_14181__$1 = state_14181;if(cljs.core.truth_(inst_14064))
{var statearr_14204_14283 = state_14181__$1;(statearr_14204_14283[1] = 10);
} else
{var statearr_14205_14284 = state_14181__$1;(statearr_14205_14284[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 40))
{var inst_14147 = (state_14181[18]);var inst_14148 = (state_14181[2]);var inst_14149 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14150 = cljs.core.async.untap_STAR_.call(null,m,inst_14147);var state_14181__$1 = (function (){var statearr_14206 = state_14181;(statearr_14206[22] = inst_14149);
(statearr_14206[23] = inst_14148);
return statearr_14206;
})();var statearr_14207_14285 = state_14181__$1;(statearr_14207_14285[2] = inst_14150);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14181__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 9))
{var inst_14106 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14208_14286 = state_14181__$1;(statearr_14208_14286[2] = inst_14106);
(statearr_14208_14286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 41))
{var inst_14049 = (state_14181[7]);var inst_14147 = (state_14181[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14181,40,Object,null,39);var inst_14154 = cljs.core.async.put_BANG_.call(null,inst_14147,inst_14049,done);var state_14181__$1 = state_14181;var statearr_14209_14287 = state_14181__$1;(statearr_14209_14287[2] = inst_14154);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14181__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 10))
{var inst_14059 = (state_14181[14]);var inst_14061 = (state_14181[17]);var inst_14067 = cljs.core._nth.call(null,inst_14059,inst_14061);var inst_14068 = cljs.core.nth.call(null,inst_14067,0,null);var inst_14069 = cljs.core.nth.call(null,inst_14067,1,null);var state_14181__$1 = (function (){var statearr_14210 = state_14181;(statearr_14210[24] = inst_14068);
return statearr_14210;
})();if(cljs.core.truth_(inst_14069))
{var statearr_14211_14288 = state_14181__$1;(statearr_14211_14288[1] = 13);
} else
{var statearr_14212_14289 = state_14181__$1;(statearr_14212_14289[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 42))
{var state_14181__$1 = state_14181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14181__$1,45,dchan);
} else
{if((state_val_14182 === 11))
{var inst_14058 = (state_14181[15]);var inst_14078 = (state_14181[25]);var inst_14078__$1 = cljs.core.seq.call(null,inst_14058);var state_14181__$1 = (function (){var statearr_14213 = state_14181;(statearr_14213[25] = inst_14078__$1);
return statearr_14213;
})();if(inst_14078__$1)
{var statearr_14214_14290 = state_14181__$1;(statearr_14214_14290[1] = 16);
} else
{var statearr_14215_14291 = state_14181__$1;(statearr_14215_14291[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 43))
{var state_14181__$1 = state_14181;var statearr_14216_14292 = state_14181__$1;(statearr_14216_14292[2] = null);
(statearr_14216_14292[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 12))
{var inst_14104 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14217_14293 = state_14181__$1;(statearr_14217_14293[2] = inst_14104);
(statearr_14217_14293[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 44))
{var inst_14174 = (state_14181[2]);var state_14181__$1 = (function (){var statearr_14218 = state_14181;(statearr_14218[26] = inst_14174);
return statearr_14218;
})();var statearr_14219_14294 = state_14181__$1;(statearr_14219_14294[2] = null);
(statearr_14219_14294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 13))
{var inst_14068 = (state_14181[24]);var inst_14071 = cljs.core.async.close_BANG_.call(null,inst_14068);var state_14181__$1 = state_14181;var statearr_14220_14295 = state_14181__$1;(statearr_14220_14295[2] = inst_14071);
(statearr_14220_14295[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 45))
{var inst_14171 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14224_14296 = state_14181__$1;(statearr_14224_14296[2] = inst_14171);
(statearr_14224_14296[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 14))
{var state_14181__$1 = state_14181;var statearr_14225_14297 = state_14181__$1;(statearr_14225_14297[2] = null);
(statearr_14225_14297[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 15))
{var inst_14059 = (state_14181[14]);var inst_14058 = (state_14181[15]);var inst_14060 = (state_14181[16]);var inst_14061 = (state_14181[17]);var inst_14074 = (state_14181[2]);var inst_14075 = (inst_14061 + 1);var tmp14221 = inst_14059;var tmp14222 = inst_14058;var tmp14223 = inst_14060;var inst_14058__$1 = tmp14222;var inst_14059__$1 = tmp14221;var inst_14060__$1 = tmp14223;var inst_14061__$1 = inst_14075;var state_14181__$1 = (function (){var statearr_14226 = state_14181;(statearr_14226[14] = inst_14059__$1);
(statearr_14226[15] = inst_14058__$1);
(statearr_14226[16] = inst_14060__$1);
(statearr_14226[17] = inst_14061__$1);
(statearr_14226[27] = inst_14074);
return statearr_14226;
})();var statearr_14227_14298 = state_14181__$1;(statearr_14227_14298[2] = null);
(statearr_14227_14298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 16))
{var inst_14078 = (state_14181[25]);var inst_14080 = cljs.core.chunked_seq_QMARK_.call(null,inst_14078);var state_14181__$1 = state_14181;if(inst_14080)
{var statearr_14228_14299 = state_14181__$1;(statearr_14228_14299[1] = 19);
} else
{var statearr_14229_14300 = state_14181__$1;(statearr_14229_14300[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 17))
{var state_14181__$1 = state_14181;var statearr_14230_14301 = state_14181__$1;(statearr_14230_14301[2] = null);
(statearr_14230_14301[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 18))
{var inst_14102 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14231_14302 = state_14181__$1;(statearr_14231_14302[2] = inst_14102);
(statearr_14231_14302[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 19))
{var inst_14078 = (state_14181[25]);var inst_14082 = cljs.core.chunk_first.call(null,inst_14078);var inst_14083 = cljs.core.chunk_rest.call(null,inst_14078);var inst_14084 = cljs.core.count.call(null,inst_14082);var inst_14058 = inst_14083;var inst_14059 = inst_14082;var inst_14060 = inst_14084;var inst_14061 = 0;var state_14181__$1 = (function (){var statearr_14232 = state_14181;(statearr_14232[14] = inst_14059);
(statearr_14232[15] = inst_14058);
(statearr_14232[16] = inst_14060);
(statearr_14232[17] = inst_14061);
return statearr_14232;
})();var statearr_14233_14303 = state_14181__$1;(statearr_14233_14303[2] = null);
(statearr_14233_14303[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 20))
{var inst_14078 = (state_14181[25]);var inst_14088 = cljs.core.first.call(null,inst_14078);var inst_14089 = cljs.core.nth.call(null,inst_14088,0,null);var inst_14090 = cljs.core.nth.call(null,inst_14088,1,null);var state_14181__$1 = (function (){var statearr_14234 = state_14181;(statearr_14234[28] = inst_14089);
return statearr_14234;
})();if(cljs.core.truth_(inst_14090))
{var statearr_14235_14304 = state_14181__$1;(statearr_14235_14304[1] = 22);
} else
{var statearr_14236_14305 = state_14181__$1;(statearr_14236_14305[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 21))
{var inst_14099 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14237_14306 = state_14181__$1;(statearr_14237_14306[2] = inst_14099);
(statearr_14237_14306[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 22))
{var inst_14089 = (state_14181[28]);var inst_14092 = cljs.core.async.close_BANG_.call(null,inst_14089);var state_14181__$1 = state_14181;var statearr_14238_14307 = state_14181__$1;(statearr_14238_14307[2] = inst_14092);
(statearr_14238_14307[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 23))
{var state_14181__$1 = state_14181;var statearr_14239_14308 = state_14181__$1;(statearr_14239_14308[2] = null);
(statearr_14239_14308[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 24))
{var inst_14078 = (state_14181[25]);var inst_14095 = (state_14181[2]);var inst_14096 = cljs.core.next.call(null,inst_14078);var inst_14058 = inst_14096;var inst_14059 = null;var inst_14060 = 0;var inst_14061 = 0;var state_14181__$1 = (function (){var statearr_14240 = state_14181;(statearr_14240[14] = inst_14059);
(statearr_14240[15] = inst_14058);
(statearr_14240[16] = inst_14060);
(statearr_14240[17] = inst_14061);
(statearr_14240[29] = inst_14095);
return statearr_14240;
})();var statearr_14241_14309 = state_14181__$1;(statearr_14241_14309[2] = null);
(statearr_14241_14309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 25))
{var inst_14120 = (state_14181[10]);var inst_14119 = (state_14181[12]);var inst_14122 = (inst_14120 < inst_14119);var inst_14123 = inst_14122;var state_14181__$1 = state_14181;if(cljs.core.truth_(inst_14123))
{var statearr_14242_14310 = state_14181__$1;(statearr_14242_14310[1] = 27);
} else
{var statearr_14243_14311 = state_14181__$1;(statearr_14243_14311[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 26))
{var inst_14109 = (state_14181[19]);var inst_14167 = (state_14181[2]);var inst_14168 = cljs.core.seq.call(null,inst_14109);var state_14181__$1 = (function (){var statearr_14244 = state_14181;(statearr_14244[30] = inst_14167);
return statearr_14244;
})();if(inst_14168)
{var statearr_14245_14312 = state_14181__$1;(statearr_14245_14312[1] = 42);
} else
{var statearr_14246_14313 = state_14181__$1;(statearr_14246_14313[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 27))
{var inst_14120 = (state_14181[10]);var inst_14118 = (state_14181[11]);var inst_14125 = cljs.core._nth.call(null,inst_14118,inst_14120);var state_14181__$1 = (function (){var statearr_14247 = state_14181;(statearr_14247[8] = inst_14125);
return statearr_14247;
})();var statearr_14248_14314 = state_14181__$1;(statearr_14248_14314[2] = null);
(statearr_14248_14314[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 28))
{var inst_14138 = (state_14181[9]);var inst_14117 = (state_14181[13]);var inst_14138__$1 = cljs.core.seq.call(null,inst_14117);var state_14181__$1 = (function (){var statearr_14252 = state_14181;(statearr_14252[9] = inst_14138__$1);
return statearr_14252;
})();if(inst_14138__$1)
{var statearr_14253_14315 = state_14181__$1;(statearr_14253_14315[1] = 33);
} else
{var statearr_14254_14316 = state_14181__$1;(statearr_14254_14316[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 29))
{var inst_14165 = (state_14181[2]);var state_14181__$1 = state_14181;var statearr_14255_14317 = state_14181__$1;(statearr_14255_14317[2] = inst_14165);
(statearr_14255_14317[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 30))
{var inst_14120 = (state_14181[10]);var inst_14118 = (state_14181[11]);var inst_14119 = (state_14181[12]);var inst_14117 = (state_14181[13]);var inst_14134 = (state_14181[2]);var inst_14135 = (inst_14120 + 1);var tmp14249 = inst_14118;var tmp14250 = inst_14119;var tmp14251 = inst_14117;var inst_14117__$1 = tmp14251;var inst_14118__$1 = tmp14249;var inst_14119__$1 = tmp14250;var inst_14120__$1 = inst_14135;var state_14181__$1 = (function (){var statearr_14256 = state_14181;(statearr_14256[10] = inst_14120__$1);
(statearr_14256[31] = inst_14134);
(statearr_14256[11] = inst_14118__$1);
(statearr_14256[12] = inst_14119__$1);
(statearr_14256[13] = inst_14117__$1);
return statearr_14256;
})();var statearr_14257_14318 = state_14181__$1;(statearr_14257_14318[2] = null);
(statearr_14257_14318[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14182 === 31))
{var inst_14125 = (state_14181[8]);var inst_14126 = (state_14181[2]);var inst_14127 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14128 = cljs.core.async.untap_STAR_.call(null,m,inst_14125);var state_14181__$1 = (function (){var statearr_14258 = state_14181;(statearr_14258[32] = inst_14127);
(statearr_14258[33] = inst_14126);
return statearr_14258;
})();var statearr_14259_14319 = state_14181__$1;(statearr_14259_14319[2] = inst_14128);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14181__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14263[0] = state_machine__5507__auto__);
(statearr_14263[1] = 1);
return statearr_14263;
});
var state_machine__5507__auto____1 = (function (state_14181){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14181);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14264){if((e14264 instanceof Object))
{var ex__5510__auto__ = e14264;var statearr_14265_14320 = state_14181;(statearr_14265_14320[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14321 = state_14181;
state_14181 = G__14321;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14181){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14266 = f__5522__auto__.call(null);(statearr_14266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14267);
return statearr_14266;
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
cljs.core.async.Mix = (function (){var obj14323 = {};return obj14323;
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
;var m = (function (){if(typeof cljs.core.async.t14433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14433 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14434){
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
this.meta14434 = meta14434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14433.cljs$lang$type = true;
cljs.core.async.t14433.cljs$lang$ctorStr = "cljs.core.async/t14433";
cljs.core.async.t14433.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14433");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14433.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14435){var self__ = this;
var _14435__$1 = this;return self__.meta14434;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14435,meta14434__$1){var self__ = this;
var _14435__$1 = this;return (new cljs.core.async.t14433(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14434__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14433 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14433(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14434){return (new cljs.core.async.t14433(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14434));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14433(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14500){var state_val_14501 = (state_14500[1]);if((state_val_14501 === 1))
{var inst_14439 = (state_14500[7]);var inst_14439__$1 = calc_state.call(null);var inst_14440 = cljs.core.seq_QMARK_.call(null,inst_14439__$1);var state_14500__$1 = (function (){var statearr_14502 = state_14500;(statearr_14502[7] = inst_14439__$1);
return statearr_14502;
})();if(inst_14440)
{var statearr_14503_14543 = state_14500__$1;(statearr_14503_14543[1] = 2);
} else
{var statearr_14504_14544 = state_14500__$1;(statearr_14504_14544[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 2))
{var inst_14439 = (state_14500[7]);var inst_14442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14439);var state_14500__$1 = state_14500;var statearr_14505_14545 = state_14500__$1;(statearr_14505_14545[2] = inst_14442);
(statearr_14505_14545[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 3))
{var inst_14439 = (state_14500[7]);var state_14500__$1 = state_14500;var statearr_14506_14546 = state_14500__$1;(statearr_14506_14546[2] = inst_14439);
(statearr_14506_14546[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 4))
{var inst_14439 = (state_14500[7]);var inst_14445 = (state_14500[2]);var inst_14446 = cljs.core.get.call(null,inst_14445,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14447 = cljs.core.get.call(null,inst_14445,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14448 = cljs.core.get.call(null,inst_14445,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14449 = inst_14439;var state_14500__$1 = (function (){var statearr_14507 = state_14500;(statearr_14507[8] = inst_14448);
(statearr_14507[9] = inst_14449);
(statearr_14507[10] = inst_14447);
(statearr_14507[11] = inst_14446);
return statearr_14507;
})();var statearr_14508_14547 = state_14500__$1;(statearr_14508_14547[2] = null);
(statearr_14508_14547[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 5))
{var inst_14449 = (state_14500[9]);var inst_14452 = cljs.core.seq_QMARK_.call(null,inst_14449);var state_14500__$1 = state_14500;if(inst_14452)
{var statearr_14509_14548 = state_14500__$1;(statearr_14509_14548[1] = 7);
} else
{var statearr_14510_14549 = state_14500__$1;(statearr_14510_14549[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 6))
{var inst_14498 = (state_14500[2]);var state_14500__$1 = state_14500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14500__$1,inst_14498);
} else
{if((state_val_14501 === 7))
{var inst_14449 = (state_14500[9]);var inst_14454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14449);var state_14500__$1 = state_14500;var statearr_14511_14550 = state_14500__$1;(statearr_14511_14550[2] = inst_14454);
(statearr_14511_14550[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 8))
{var inst_14449 = (state_14500[9]);var state_14500__$1 = state_14500;var statearr_14512_14551 = state_14500__$1;(statearr_14512_14551[2] = inst_14449);
(statearr_14512_14551[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 9))
{var inst_14457 = (state_14500[12]);var inst_14457__$1 = (state_14500[2]);var inst_14458 = cljs.core.get.call(null,inst_14457__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14459 = cljs.core.get.call(null,inst_14457__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14460 = cljs.core.get.call(null,inst_14457__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14500__$1 = (function (){var statearr_14513 = state_14500;(statearr_14513[12] = inst_14457__$1);
(statearr_14513[13] = inst_14460);
(statearr_14513[14] = inst_14459);
return statearr_14513;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14500__$1,10,inst_14458);
} else
{if((state_val_14501 === 10))
{var inst_14464 = (state_14500[15]);var inst_14465 = (state_14500[16]);var inst_14463 = (state_14500[2]);var inst_14464__$1 = cljs.core.nth.call(null,inst_14463,0,null);var inst_14465__$1 = cljs.core.nth.call(null,inst_14463,1,null);var inst_14466 = (inst_14464__$1 == null);var inst_14467 = cljs.core._EQ_.call(null,inst_14465__$1,change);var inst_14468 = (inst_14466) || (inst_14467);var state_14500__$1 = (function (){var statearr_14514 = state_14500;(statearr_14514[15] = inst_14464__$1);
(statearr_14514[16] = inst_14465__$1);
return statearr_14514;
})();if(cljs.core.truth_(inst_14468))
{var statearr_14515_14552 = state_14500__$1;(statearr_14515_14552[1] = 11);
} else
{var statearr_14516_14553 = state_14500__$1;(statearr_14516_14553[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 11))
{var inst_14464 = (state_14500[15]);var inst_14470 = (inst_14464 == null);var state_14500__$1 = state_14500;if(cljs.core.truth_(inst_14470))
{var statearr_14517_14554 = state_14500__$1;(statearr_14517_14554[1] = 14);
} else
{var statearr_14518_14555 = state_14500__$1;(statearr_14518_14555[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 12))
{var inst_14465 = (state_14500[16]);var inst_14479 = (state_14500[17]);var inst_14460 = (state_14500[13]);var inst_14479__$1 = inst_14460.call(null,inst_14465);var state_14500__$1 = (function (){var statearr_14519 = state_14500;(statearr_14519[17] = inst_14479__$1);
return statearr_14519;
})();if(cljs.core.truth_(inst_14479__$1))
{var statearr_14520_14556 = state_14500__$1;(statearr_14520_14556[1] = 17);
} else
{var statearr_14521_14557 = state_14500__$1;(statearr_14521_14557[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 13))
{var inst_14496 = (state_14500[2]);var state_14500__$1 = state_14500;var statearr_14522_14558 = state_14500__$1;(statearr_14522_14558[2] = inst_14496);
(statearr_14522_14558[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 14))
{var inst_14465 = (state_14500[16]);var inst_14472 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14465);var state_14500__$1 = state_14500;var statearr_14523_14559 = state_14500__$1;(statearr_14523_14559[2] = inst_14472);
(statearr_14523_14559[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 15))
{var state_14500__$1 = state_14500;var statearr_14524_14560 = state_14500__$1;(statearr_14524_14560[2] = null);
(statearr_14524_14560[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 16))
{var inst_14475 = (state_14500[2]);var inst_14476 = calc_state.call(null);var inst_14449 = inst_14476;var state_14500__$1 = (function (){var statearr_14525 = state_14500;(statearr_14525[9] = inst_14449);
(statearr_14525[18] = inst_14475);
return statearr_14525;
})();var statearr_14526_14561 = state_14500__$1;(statearr_14526_14561[2] = null);
(statearr_14526_14561[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 17))
{var inst_14479 = (state_14500[17]);var state_14500__$1 = state_14500;var statearr_14527_14562 = state_14500__$1;(statearr_14527_14562[2] = inst_14479);
(statearr_14527_14562[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 18))
{var inst_14465 = (state_14500[16]);var inst_14460 = (state_14500[13]);var inst_14459 = (state_14500[14]);var inst_14482 = cljs.core.empty_QMARK_.call(null,inst_14460);var inst_14483 = inst_14459.call(null,inst_14465);var inst_14484 = cljs.core.not.call(null,inst_14483);var inst_14485 = (inst_14482) && (inst_14484);var state_14500__$1 = state_14500;var statearr_14528_14563 = state_14500__$1;(statearr_14528_14563[2] = inst_14485);
(statearr_14528_14563[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 19))
{var inst_14487 = (state_14500[2]);var state_14500__$1 = state_14500;if(cljs.core.truth_(inst_14487))
{var statearr_14529_14564 = state_14500__$1;(statearr_14529_14564[1] = 20);
} else
{var statearr_14530_14565 = state_14500__$1;(statearr_14530_14565[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 20))
{var inst_14464 = (state_14500[15]);var state_14500__$1 = state_14500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14500__$1,23,out,inst_14464);
} else
{if((state_val_14501 === 21))
{var state_14500__$1 = state_14500;var statearr_14531_14566 = state_14500__$1;(statearr_14531_14566[2] = null);
(statearr_14531_14566[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 22))
{var inst_14457 = (state_14500[12]);var inst_14493 = (state_14500[2]);var inst_14449 = inst_14457;var state_14500__$1 = (function (){var statearr_14532 = state_14500;(statearr_14532[9] = inst_14449);
(statearr_14532[19] = inst_14493);
return statearr_14532;
})();var statearr_14533_14567 = state_14500__$1;(statearr_14533_14567[2] = null);
(statearr_14533_14567[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 23))
{var inst_14490 = (state_14500[2]);var state_14500__$1 = state_14500;var statearr_14534_14568 = state_14500__$1;(statearr_14534_14568[2] = inst_14490);
(statearr_14534_14568[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14538[0] = state_machine__5507__auto__);
(statearr_14538[1] = 1);
return statearr_14538;
});
var state_machine__5507__auto____1 = (function (state_14500){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14539){if((e14539 instanceof Object))
{var ex__5510__auto__ = e14539;var statearr_14540_14569 = state_14500;(statearr_14540_14569[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14570 = state_14500;
state_14500 = G__14570;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14500){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14541 = f__5522__auto__.call(null);(statearr_14541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14542);
return statearr_14541;
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
cljs.core.async.Pub = (function (){var obj14572 = {};return obj14572;
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
return (function (p1__14573_SHARP_){if(cljs.core.truth_(p1__14573_SHARP_.call(null,topic)))
{return p1__14573_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14573_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14698 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14699){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14699 = meta14699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14698.cljs$lang$type = true;
cljs.core.async.t14698.cljs$lang$ctorStr = "cljs.core.async/t14698";
cljs.core.async.t14698.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14698");
});})(mults,ensure_mult))
;
cljs.core.async.t14698.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14698.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14698.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14698.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14700){var self__ = this;
var _14700__$1 = this;return self__.meta14699;
});})(mults,ensure_mult))
;
cljs.core.async.t14698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14700,meta14699__$1){var self__ = this;
var _14700__$1 = this;return (new cljs.core.async.t14698(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14699__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14698 = ((function (mults,ensure_mult){
return (function __GT_t14698(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14699){return (new cljs.core.async.t14698(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14699));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14698(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14822 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14774){var state_val_14775 = (state_14774[1]);if((state_val_14775 === 1))
{var state_14774__$1 = state_14774;var statearr_14776_14823 = state_14774__$1;(statearr_14776_14823[2] = null);
(statearr_14776_14823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 2))
{var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14774__$1,4,ch);
} else
{if((state_val_14775 === 3))
{var inst_14772 = (state_14774[2]);var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14774__$1,inst_14772);
} else
{if((state_val_14775 === 4))
{var inst_14703 = (state_14774[7]);var inst_14703__$1 = (state_14774[2]);var inst_14704 = (inst_14703__$1 == null);var state_14774__$1 = (function (){var statearr_14777 = state_14774;(statearr_14777[7] = inst_14703__$1);
return statearr_14777;
})();if(cljs.core.truth_(inst_14704))
{var statearr_14778_14824 = state_14774__$1;(statearr_14778_14824[1] = 5);
} else
{var statearr_14779_14825 = state_14774__$1;(statearr_14779_14825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 5))
{var inst_14710 = cljs.core.deref.call(null,mults);var inst_14711 = cljs.core.vals.call(null,inst_14710);var inst_14712 = cljs.core.seq.call(null,inst_14711);var inst_14713 = inst_14712;var inst_14714 = null;var inst_14715 = 0;var inst_14716 = 0;var state_14774__$1 = (function (){var statearr_14780 = state_14774;(statearr_14780[8] = inst_14713);
(statearr_14780[9] = inst_14714);
(statearr_14780[10] = inst_14715);
(statearr_14780[11] = inst_14716);
return statearr_14780;
})();var statearr_14781_14826 = state_14774__$1;(statearr_14781_14826[2] = null);
(statearr_14781_14826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 6))
{var inst_14753 = (state_14774[12]);var inst_14703 = (state_14774[7]);var inst_14751 = (state_14774[13]);var inst_14751__$1 = topic_fn.call(null,inst_14703);var inst_14752 = cljs.core.deref.call(null,mults);var inst_14753__$1 = cljs.core.get.call(null,inst_14752,inst_14751__$1);var state_14774__$1 = (function (){var statearr_14782 = state_14774;(statearr_14782[12] = inst_14753__$1);
(statearr_14782[13] = inst_14751__$1);
return statearr_14782;
})();if(cljs.core.truth_(inst_14753__$1))
{var statearr_14783_14827 = state_14774__$1;(statearr_14783_14827[1] = 19);
} else
{var statearr_14784_14828 = state_14774__$1;(statearr_14784_14828[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 7))
{var inst_14770 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14785_14829 = state_14774__$1;(statearr_14785_14829[2] = inst_14770);
(statearr_14785_14829[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 8))
{var inst_14715 = (state_14774[10]);var inst_14716 = (state_14774[11]);var inst_14718 = (inst_14716 < inst_14715);var inst_14719 = inst_14718;var state_14774__$1 = state_14774;if(cljs.core.truth_(inst_14719))
{var statearr_14789_14830 = state_14774__$1;(statearr_14789_14830[1] = 10);
} else
{var statearr_14790_14831 = state_14774__$1;(statearr_14790_14831[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 9))
{var inst_14749 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14791_14832 = state_14774__$1;(statearr_14791_14832[2] = inst_14749);
(statearr_14791_14832[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 10))
{var inst_14713 = (state_14774[8]);var inst_14714 = (state_14774[9]);var inst_14715 = (state_14774[10]);var inst_14716 = (state_14774[11]);var inst_14721 = cljs.core._nth.call(null,inst_14714,inst_14716);var inst_14722 = cljs.core.async.muxch_STAR_.call(null,inst_14721);var inst_14723 = cljs.core.async.close_BANG_.call(null,inst_14722);var inst_14724 = (inst_14716 + 1);var tmp14786 = inst_14713;var tmp14787 = inst_14714;var tmp14788 = inst_14715;var inst_14713__$1 = tmp14786;var inst_14714__$1 = tmp14787;var inst_14715__$1 = tmp14788;var inst_14716__$1 = inst_14724;var state_14774__$1 = (function (){var statearr_14792 = state_14774;(statearr_14792[14] = inst_14723);
(statearr_14792[8] = inst_14713__$1);
(statearr_14792[9] = inst_14714__$1);
(statearr_14792[10] = inst_14715__$1);
(statearr_14792[11] = inst_14716__$1);
return statearr_14792;
})();var statearr_14793_14833 = state_14774__$1;(statearr_14793_14833[2] = null);
(statearr_14793_14833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 11))
{var inst_14713 = (state_14774[8]);var inst_14727 = (state_14774[15]);var inst_14727__$1 = cljs.core.seq.call(null,inst_14713);var state_14774__$1 = (function (){var statearr_14794 = state_14774;(statearr_14794[15] = inst_14727__$1);
return statearr_14794;
})();if(inst_14727__$1)
{var statearr_14795_14834 = state_14774__$1;(statearr_14795_14834[1] = 13);
} else
{var statearr_14796_14835 = state_14774__$1;(statearr_14796_14835[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 12))
{var inst_14747 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14797_14836 = state_14774__$1;(statearr_14797_14836[2] = inst_14747);
(statearr_14797_14836[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 13))
{var inst_14727 = (state_14774[15]);var inst_14729 = cljs.core.chunked_seq_QMARK_.call(null,inst_14727);var state_14774__$1 = state_14774;if(inst_14729)
{var statearr_14798_14837 = state_14774__$1;(statearr_14798_14837[1] = 16);
} else
{var statearr_14799_14838 = state_14774__$1;(statearr_14799_14838[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 14))
{var state_14774__$1 = state_14774;var statearr_14800_14839 = state_14774__$1;(statearr_14800_14839[2] = null);
(statearr_14800_14839[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 15))
{var inst_14745 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14801_14840 = state_14774__$1;(statearr_14801_14840[2] = inst_14745);
(statearr_14801_14840[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 16))
{var inst_14727 = (state_14774[15]);var inst_14731 = cljs.core.chunk_first.call(null,inst_14727);var inst_14732 = cljs.core.chunk_rest.call(null,inst_14727);var inst_14733 = cljs.core.count.call(null,inst_14731);var inst_14713 = inst_14732;var inst_14714 = inst_14731;var inst_14715 = inst_14733;var inst_14716 = 0;var state_14774__$1 = (function (){var statearr_14802 = state_14774;(statearr_14802[8] = inst_14713);
(statearr_14802[9] = inst_14714);
(statearr_14802[10] = inst_14715);
(statearr_14802[11] = inst_14716);
return statearr_14802;
})();var statearr_14803_14841 = state_14774__$1;(statearr_14803_14841[2] = null);
(statearr_14803_14841[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 17))
{var inst_14727 = (state_14774[15]);var inst_14736 = cljs.core.first.call(null,inst_14727);var inst_14737 = cljs.core.async.muxch_STAR_.call(null,inst_14736);var inst_14738 = cljs.core.async.close_BANG_.call(null,inst_14737);var inst_14739 = cljs.core.next.call(null,inst_14727);var inst_14713 = inst_14739;var inst_14714 = null;var inst_14715 = 0;var inst_14716 = 0;var state_14774__$1 = (function (){var statearr_14804 = state_14774;(statearr_14804[16] = inst_14738);
(statearr_14804[8] = inst_14713);
(statearr_14804[9] = inst_14714);
(statearr_14804[10] = inst_14715);
(statearr_14804[11] = inst_14716);
return statearr_14804;
})();var statearr_14805_14842 = state_14774__$1;(statearr_14805_14842[2] = null);
(statearr_14805_14842[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 18))
{var inst_14742 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14806_14843 = state_14774__$1;(statearr_14806_14843[2] = inst_14742);
(statearr_14806_14843[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 19))
{var state_14774__$1 = state_14774;var statearr_14807_14844 = state_14774__$1;(statearr_14807_14844[2] = null);
(statearr_14807_14844[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 20))
{var state_14774__$1 = state_14774;var statearr_14808_14845 = state_14774__$1;(statearr_14808_14845[2] = null);
(statearr_14808_14845[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 21))
{var inst_14767 = (state_14774[2]);var state_14774__$1 = (function (){var statearr_14809 = state_14774;(statearr_14809[17] = inst_14767);
return statearr_14809;
})();var statearr_14810_14846 = state_14774__$1;(statearr_14810_14846[2] = null);
(statearr_14810_14846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 22))
{var inst_14764 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14811_14847 = state_14774__$1;(statearr_14811_14847[2] = inst_14764);
(statearr_14811_14847[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 23))
{var inst_14751 = (state_14774[13]);var inst_14755 = (state_14774[2]);var inst_14756 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14751);var state_14774__$1 = (function (){var statearr_14812 = state_14774;(statearr_14812[18] = inst_14755);
return statearr_14812;
})();var statearr_14813_14848 = state_14774__$1;(statearr_14813_14848[2] = inst_14756);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 24))
{var inst_14753 = (state_14774[12]);var inst_14703 = (state_14774[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14774,23,Object,null,22);var inst_14760 = cljs.core.async.muxch_STAR_.call(null,inst_14753);var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14774__$1,25,inst_14760,inst_14703);
} else
{if((state_val_14775 === 25))
{var inst_14762 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14814_14849 = state_14774__$1;(statearr_14814_14849[2] = inst_14762);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14818[0] = state_machine__5507__auto__);
(statearr_14818[1] = 1);
return statearr_14818;
});
var state_machine__5507__auto____1 = (function (state_14774){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14819){if((e14819 instanceof Object))
{var ex__5510__auto__ = e14819;var statearr_14820_14850 = state_14774;(statearr_14820_14850[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14851 = state_14774;
state_14774 = G__14851;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14774){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14821 = f__5522__auto__.call(null);(statearr_14821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14822);
return statearr_14821;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14988 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14958){var state_val_14959 = (state_14958[1]);if((state_val_14959 === 1))
{var state_14958__$1 = state_14958;var statearr_14960_14989 = state_14958__$1;(statearr_14960_14989[2] = null);
(statearr_14960_14989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 2))
{var inst_14921 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14922 = 0;var state_14958__$1 = (function (){var statearr_14961 = state_14958;(statearr_14961[7] = inst_14921);
(statearr_14961[8] = inst_14922);
return statearr_14961;
})();var statearr_14962_14990 = state_14958__$1;(statearr_14962_14990[2] = null);
(statearr_14962_14990[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 3))
{var inst_14956 = (state_14958[2]);var state_14958__$1 = state_14958;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14958__$1,inst_14956);
} else
{if((state_val_14959 === 4))
{var inst_14922 = (state_14958[8]);var inst_14924 = (inst_14922 < cnt);var state_14958__$1 = state_14958;if(cljs.core.truth_(inst_14924))
{var statearr_14963_14991 = state_14958__$1;(statearr_14963_14991[1] = 6);
} else
{var statearr_14964_14992 = state_14958__$1;(statearr_14964_14992[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 5))
{var inst_14942 = (state_14958[2]);var state_14958__$1 = (function (){var statearr_14965 = state_14958;(statearr_14965[9] = inst_14942);
return statearr_14965;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14958__$1,12,dchan);
} else
{if((state_val_14959 === 6))
{var state_14958__$1 = state_14958;var statearr_14966_14993 = state_14958__$1;(statearr_14966_14993[2] = null);
(statearr_14966_14993[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 7))
{var state_14958__$1 = state_14958;var statearr_14967_14994 = state_14958__$1;(statearr_14967_14994[2] = null);
(statearr_14967_14994[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 8))
{var inst_14940 = (state_14958[2]);var state_14958__$1 = state_14958;var statearr_14968_14995 = state_14958__$1;(statearr_14968_14995[2] = inst_14940);
(statearr_14968_14995[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 9))
{var inst_14922 = (state_14958[8]);var inst_14935 = (state_14958[2]);var inst_14936 = (inst_14922 + 1);var inst_14922__$1 = inst_14936;var state_14958__$1 = (function (){var statearr_14969 = state_14958;(statearr_14969[8] = inst_14922__$1);
(statearr_14969[10] = inst_14935);
return statearr_14969;
})();var statearr_14970_14996 = state_14958__$1;(statearr_14970_14996[2] = null);
(statearr_14970_14996[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 10))
{var inst_14926 = (state_14958[2]);var inst_14927 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14958__$1 = (function (){var statearr_14971 = state_14958;(statearr_14971[11] = inst_14926);
return statearr_14971;
})();var statearr_14972_14997 = state_14958__$1;(statearr_14972_14997[2] = inst_14927);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14958__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 11))
{var inst_14922 = (state_14958[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14958,10,Object,null,9);var inst_14931 = chs__$1.call(null,inst_14922);var inst_14932 = done.call(null,inst_14922);var inst_14933 = cljs.core.async.take_BANG_.call(null,inst_14931,inst_14932);var state_14958__$1 = state_14958;var statearr_14973_14998 = state_14958__$1;(statearr_14973_14998[2] = inst_14933);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14958__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 12))
{var inst_14944 = (state_14958[12]);var inst_14944__$1 = (state_14958[2]);var inst_14945 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14944__$1);var state_14958__$1 = (function (){var statearr_14974 = state_14958;(statearr_14974[12] = inst_14944__$1);
return statearr_14974;
})();if(cljs.core.truth_(inst_14945))
{var statearr_14975_14999 = state_14958__$1;(statearr_14975_14999[1] = 13);
} else
{var statearr_14976_15000 = state_14958__$1;(statearr_14976_15000[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 13))
{var inst_14947 = cljs.core.async.close_BANG_.call(null,out);var state_14958__$1 = state_14958;var statearr_14977_15001 = state_14958__$1;(statearr_14977_15001[2] = inst_14947);
(statearr_14977_15001[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 14))
{var inst_14944 = (state_14958[12]);var inst_14949 = cljs.core.apply.call(null,f,inst_14944);var state_14958__$1 = state_14958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14958__$1,16,out,inst_14949);
} else
{if((state_val_14959 === 15))
{var inst_14954 = (state_14958[2]);var state_14958__$1 = state_14958;var statearr_14978_15002 = state_14958__$1;(statearr_14978_15002[2] = inst_14954);
(statearr_14978_15002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14959 === 16))
{var inst_14951 = (state_14958[2]);var state_14958__$1 = (function (){var statearr_14979 = state_14958;(statearr_14979[13] = inst_14951);
return statearr_14979;
})();var statearr_14980_15003 = state_14958__$1;(statearr_14980_15003[2] = null);
(statearr_14980_15003[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14984[0] = state_machine__5507__auto__);
(statearr_14984[1] = 1);
return statearr_14984;
});
var state_machine__5507__auto____1 = (function (state_14958){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14958);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14985){if((e14985 instanceof Object))
{var ex__5510__auto__ = e14985;var statearr_14986_15004 = state_14958;(statearr_14986_15004[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14958);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15005 = state_14958;
state_14958 = G__15005;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14958){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14987 = f__5522__auto__.call(null);(statearr_14987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14988);
return statearr_14987;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15113 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15089){var state_val_15090 = (state_15089[1]);if((state_val_15090 === 1))
{var inst_15060 = cljs.core.vec.call(null,chs);var inst_15061 = inst_15060;var state_15089__$1 = (function (){var statearr_15091 = state_15089;(statearr_15091[7] = inst_15061);
return statearr_15091;
})();var statearr_15092_15114 = state_15089__$1;(statearr_15092_15114[2] = null);
(statearr_15092_15114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15090 === 2))
{var inst_15061 = (state_15089[7]);var inst_15063 = cljs.core.count.call(null,inst_15061);var inst_15064 = (inst_15063 > 0);var state_15089__$1 = state_15089;if(cljs.core.truth_(inst_15064))
{var statearr_15093_15115 = state_15089__$1;(statearr_15093_15115[1] = 4);
} else
{var statearr_15094_15116 = state_15089__$1;(statearr_15094_15116[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15090 === 3))
{var inst_15087 = (state_15089[2]);var state_15089__$1 = state_15089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15089__$1,inst_15087);
} else
{if((state_val_15090 === 4))
{var inst_15061 = (state_15089[7]);var state_15089__$1 = state_15089;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15089__$1,7,inst_15061);
} else
{if((state_val_15090 === 5))
{var inst_15083 = cljs.core.async.close_BANG_.call(null,out);var state_15089__$1 = state_15089;var statearr_15095_15117 = state_15089__$1;(statearr_15095_15117[2] = inst_15083);
(statearr_15095_15117[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15090 === 6))
{var inst_15085 = (state_15089[2]);var state_15089__$1 = state_15089;var statearr_15096_15118 = state_15089__$1;(statearr_15096_15118[2] = inst_15085);
(statearr_15096_15118[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15090 === 7))
{var inst_15069 = (state_15089[8]);var inst_15068 = (state_15089[9]);var inst_15068__$1 = (state_15089[2]);var inst_15069__$1 = cljs.core.nth.call(null,inst_15068__$1,0,null);var inst_15070 = cljs.core.nth.call(null,inst_15068__$1,1,null);var inst_15071 = (inst_15069__$1 == null);var state_15089__$1 = (function (){var statearr_15097 = state_15089;(statearr_15097[8] = inst_15069__$1);
(statearr_15097[10] = inst_15070);
(statearr_15097[9] = inst_15068__$1);
return statearr_15097;
})();if(cljs.core.truth_(inst_15071))
{var statearr_15098_15119 = state_15089__$1;(statearr_15098_15119[1] = 8);
} else
{var statearr_15099_15120 = state_15089__$1;(statearr_15099_15120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15090 === 8))
{var inst_15069 = (state_15089[8]);var inst_15070 = (state_15089[10]);var inst_15068 = (state_15089[9]);var inst_15061 = (state_15089[7]);var inst_15073 = (function (){var c = inst_15070;var v = inst_15069;var vec__15066 = inst_15068;var cs = inst_15061;return ((function (c,v,vec__15066,cs,inst_15069,inst_15070,inst_15068,inst_15061,state_val_15090){
return (function (p1__15006_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15006_SHARP_);
});
;})(c,v,vec__15066,cs,inst_15069,inst_15070,inst_15068,inst_15061,state_val_15090))
})();var inst_15074 = cljs.core.filterv.call(null,inst_15073,inst_15061);var inst_15061__$1 = inst_15074;var state_15089__$1 = (function (){var statearr_15100 = state_15089;(statearr_15100[7] = inst_15061__$1);
return statearr_15100;
})();var statearr_15101_15121 = state_15089__$1;(statearr_15101_15121[2] = null);
(statearr_15101_15121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15090 === 9))
{var inst_15069 = (state_15089[8]);var state_15089__$1 = state_15089;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15089__$1,11,out,inst_15069);
} else
{if((state_val_15090 === 10))
{var inst_15081 = (state_15089[2]);var state_15089__$1 = state_15089;var statearr_15103_15122 = state_15089__$1;(statearr_15103_15122[2] = inst_15081);
(statearr_15103_15122[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15090 === 11))
{var inst_15061 = (state_15089[7]);var inst_15078 = (state_15089[2]);var tmp15102 = inst_15061;var inst_15061__$1 = tmp15102;var state_15089__$1 = (function (){var statearr_15104 = state_15089;(statearr_15104[11] = inst_15078);
(statearr_15104[7] = inst_15061__$1);
return statearr_15104;
})();var statearr_15105_15123 = state_15089__$1;(statearr_15105_15123[2] = null);
(statearr_15105_15123[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15109 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15109[0] = state_machine__5507__auto__);
(statearr_15109[1] = 1);
return statearr_15109;
});
var state_machine__5507__auto____1 = (function (state_15089){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15089);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15110){if((e15110 instanceof Object))
{var ex__5510__auto__ = e15110;var statearr_15111_15124 = state_15089;(statearr_15111_15124[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15089);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15125 = state_15089;
state_15089 = G__15125;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15089){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15112 = f__5522__auto__.call(null);(statearr_15112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15113);
return statearr_15112;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15218 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15195){var state_val_15196 = (state_15195[1]);if((state_val_15196 === 1))
{var inst_15172 = 0;var state_15195__$1 = (function (){var statearr_15197 = state_15195;(statearr_15197[7] = inst_15172);
return statearr_15197;
})();var statearr_15198_15219 = state_15195__$1;(statearr_15198_15219[2] = null);
(statearr_15198_15219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 2))
{var inst_15172 = (state_15195[7]);var inst_15174 = (inst_15172 < n);var state_15195__$1 = state_15195;if(cljs.core.truth_(inst_15174))
{var statearr_15199_15220 = state_15195__$1;(statearr_15199_15220[1] = 4);
} else
{var statearr_15200_15221 = state_15195__$1;(statearr_15200_15221[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 3))
{var inst_15192 = (state_15195[2]);var inst_15193 = cljs.core.async.close_BANG_.call(null,out);var state_15195__$1 = (function (){var statearr_15201 = state_15195;(statearr_15201[8] = inst_15192);
return statearr_15201;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15195__$1,inst_15193);
} else
{if((state_val_15196 === 4))
{var state_15195__$1 = state_15195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15195__$1,7,ch);
} else
{if((state_val_15196 === 5))
{var state_15195__$1 = state_15195;var statearr_15202_15222 = state_15195__$1;(statearr_15202_15222[2] = null);
(statearr_15202_15222[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 6))
{var inst_15190 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15203_15223 = state_15195__$1;(statearr_15203_15223[2] = inst_15190);
(statearr_15203_15223[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 7))
{var inst_15177 = (state_15195[9]);var inst_15177__$1 = (state_15195[2]);var inst_15178 = (inst_15177__$1 == null);var inst_15179 = cljs.core.not.call(null,inst_15178);var state_15195__$1 = (function (){var statearr_15204 = state_15195;(statearr_15204[9] = inst_15177__$1);
return statearr_15204;
})();if(inst_15179)
{var statearr_15205_15224 = state_15195__$1;(statearr_15205_15224[1] = 8);
} else
{var statearr_15206_15225 = state_15195__$1;(statearr_15206_15225[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 8))
{var inst_15177 = (state_15195[9]);var state_15195__$1 = state_15195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15195__$1,11,out,inst_15177);
} else
{if((state_val_15196 === 9))
{var state_15195__$1 = state_15195;var statearr_15207_15226 = state_15195__$1;(statearr_15207_15226[2] = null);
(statearr_15207_15226[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 10))
{var inst_15187 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15208_15227 = state_15195__$1;(statearr_15208_15227[2] = inst_15187);
(statearr_15208_15227[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 11))
{var inst_15172 = (state_15195[7]);var inst_15182 = (state_15195[2]);var inst_15183 = (inst_15172 + 1);var inst_15172__$1 = inst_15183;var state_15195__$1 = (function (){var statearr_15209 = state_15195;(statearr_15209[10] = inst_15182);
(statearr_15209[7] = inst_15172__$1);
return statearr_15209;
})();var statearr_15210_15228 = state_15195__$1;(statearr_15210_15228[2] = null);
(statearr_15210_15228[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15214 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15214[0] = state_machine__5507__auto__);
(statearr_15214[1] = 1);
return statearr_15214;
});
var state_machine__5507__auto____1 = (function (state_15195){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15215){if((e15215 instanceof Object))
{var ex__5510__auto__ = e15215;var statearr_15216_15229 = state_15195;(statearr_15216_15229[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15230 = state_15195;
state_15195 = G__15230;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15195){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15217 = f__5522__auto__.call(null);(statearr_15217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15218);
return statearr_15217;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15327 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15302){var state_val_15303 = (state_15302[1]);if((state_val_15303 === 1))
{var inst_15279 = null;var state_15302__$1 = (function (){var statearr_15304 = state_15302;(statearr_15304[7] = inst_15279);
return statearr_15304;
})();var statearr_15305_15328 = state_15302__$1;(statearr_15305_15328[2] = null);
(statearr_15305_15328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15303 === 2))
{var state_15302__$1 = state_15302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15302__$1,4,ch);
} else
{if((state_val_15303 === 3))
{var inst_15299 = (state_15302[2]);var inst_15300 = cljs.core.async.close_BANG_.call(null,out);var state_15302__$1 = (function (){var statearr_15306 = state_15302;(statearr_15306[8] = inst_15299);
return statearr_15306;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15302__$1,inst_15300);
} else
{if((state_val_15303 === 4))
{var inst_15282 = (state_15302[9]);var inst_15282__$1 = (state_15302[2]);var inst_15283 = (inst_15282__$1 == null);var inst_15284 = cljs.core.not.call(null,inst_15283);var state_15302__$1 = (function (){var statearr_15307 = state_15302;(statearr_15307[9] = inst_15282__$1);
return statearr_15307;
})();if(inst_15284)
{var statearr_15308_15329 = state_15302__$1;(statearr_15308_15329[1] = 5);
} else
{var statearr_15309_15330 = state_15302__$1;(statearr_15309_15330[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15303 === 5))
{var inst_15282 = (state_15302[9]);var inst_15279 = (state_15302[7]);var inst_15286 = cljs.core._EQ_.call(null,inst_15282,inst_15279);var state_15302__$1 = state_15302;if(inst_15286)
{var statearr_15310_15331 = state_15302__$1;(statearr_15310_15331[1] = 8);
} else
{var statearr_15311_15332 = state_15302__$1;(statearr_15311_15332[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15303 === 6))
{var state_15302__$1 = state_15302;var statearr_15313_15333 = state_15302__$1;(statearr_15313_15333[2] = null);
(statearr_15313_15333[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15303 === 7))
{var inst_15297 = (state_15302[2]);var state_15302__$1 = state_15302;var statearr_15314_15334 = state_15302__$1;(statearr_15314_15334[2] = inst_15297);
(statearr_15314_15334[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15303 === 8))
{var inst_15279 = (state_15302[7]);var tmp15312 = inst_15279;var inst_15279__$1 = tmp15312;var state_15302__$1 = (function (){var statearr_15315 = state_15302;(statearr_15315[7] = inst_15279__$1);
return statearr_15315;
})();var statearr_15316_15335 = state_15302__$1;(statearr_15316_15335[2] = null);
(statearr_15316_15335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15303 === 9))
{var inst_15282 = (state_15302[9]);var state_15302__$1 = state_15302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15302__$1,11,out,inst_15282);
} else
{if((state_val_15303 === 10))
{var inst_15294 = (state_15302[2]);var state_15302__$1 = state_15302;var statearr_15317_15336 = state_15302__$1;(statearr_15317_15336[2] = inst_15294);
(statearr_15317_15336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15303 === 11))
{var inst_15282 = (state_15302[9]);var inst_15291 = (state_15302[2]);var inst_15279 = inst_15282;var state_15302__$1 = (function (){var statearr_15318 = state_15302;(statearr_15318[7] = inst_15279);
(statearr_15318[10] = inst_15291);
return statearr_15318;
})();var statearr_15319_15337 = state_15302__$1;(statearr_15319_15337[2] = null);
(statearr_15319_15337[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15323 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15323[0] = state_machine__5507__auto__);
(statearr_15323[1] = 1);
return statearr_15323;
});
var state_machine__5507__auto____1 = (function (state_15302){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15302);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15324){if((e15324 instanceof Object))
{var ex__5510__auto__ = e15324;var statearr_15325_15338 = state_15302;(statearr_15325_15338[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15339 = state_15302;
state_15302 = G__15339;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15302){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15326 = f__5522__auto__.call(null);(statearr_15326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15327);
return statearr_15326;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15444){var state_val_15445 = (state_15444[1]);if((state_val_15445 === 1))
{var inst_15407 = (new Array(n));var inst_15408 = inst_15407;var inst_15409 = 0;var state_15444__$1 = (function (){var statearr_15446 = state_15444;(statearr_15446[7] = inst_15408);
(statearr_15446[8] = inst_15409);
return statearr_15446;
})();var statearr_15447_15475 = state_15444__$1;(statearr_15447_15475[2] = null);
(statearr_15447_15475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 2))
{var state_15444__$1 = state_15444;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15444__$1,4,ch);
} else
{if((state_val_15445 === 3))
{var inst_15442 = (state_15444[2]);var state_15444__$1 = state_15444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15444__$1,inst_15442);
} else
{if((state_val_15445 === 4))
{var inst_15412 = (state_15444[9]);var inst_15412__$1 = (state_15444[2]);var inst_15413 = (inst_15412__$1 == null);var inst_15414 = cljs.core.not.call(null,inst_15413);var state_15444__$1 = (function (){var statearr_15448 = state_15444;(statearr_15448[9] = inst_15412__$1);
return statearr_15448;
})();if(inst_15414)
{var statearr_15449_15476 = state_15444__$1;(statearr_15449_15476[1] = 5);
} else
{var statearr_15450_15477 = state_15444__$1;(statearr_15450_15477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 5))
{var inst_15417 = (state_15444[10]);var inst_15408 = (state_15444[7]);var inst_15412 = (state_15444[9]);var inst_15409 = (state_15444[8]);var inst_15416 = (inst_15408[inst_15409] = inst_15412);var inst_15417__$1 = (inst_15409 + 1);var inst_15418 = (inst_15417__$1 < n);var state_15444__$1 = (function (){var statearr_15451 = state_15444;(statearr_15451[11] = inst_15416);
(statearr_15451[10] = inst_15417__$1);
return statearr_15451;
})();if(cljs.core.truth_(inst_15418))
{var statearr_15452_15478 = state_15444__$1;(statearr_15452_15478[1] = 8);
} else
{var statearr_15453_15479 = state_15444__$1;(statearr_15453_15479[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 6))
{var inst_15409 = (state_15444[8]);var inst_15430 = (inst_15409 > 0);var state_15444__$1 = state_15444;if(cljs.core.truth_(inst_15430))
{var statearr_15455_15480 = state_15444__$1;(statearr_15455_15480[1] = 12);
} else
{var statearr_15456_15481 = state_15444__$1;(statearr_15456_15481[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 7))
{var inst_15440 = (state_15444[2]);var state_15444__$1 = state_15444;var statearr_15457_15482 = state_15444__$1;(statearr_15457_15482[2] = inst_15440);
(statearr_15457_15482[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 8))
{var inst_15417 = (state_15444[10]);var inst_15408 = (state_15444[7]);var tmp15454 = inst_15408;var inst_15408__$1 = tmp15454;var inst_15409 = inst_15417;var state_15444__$1 = (function (){var statearr_15458 = state_15444;(statearr_15458[7] = inst_15408__$1);
(statearr_15458[8] = inst_15409);
return statearr_15458;
})();var statearr_15459_15483 = state_15444__$1;(statearr_15459_15483[2] = null);
(statearr_15459_15483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 9))
{var inst_15408 = (state_15444[7]);var inst_15422 = cljs.core.vec.call(null,inst_15408);var state_15444__$1 = state_15444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15444__$1,11,out,inst_15422);
} else
{if((state_val_15445 === 10))
{var inst_15428 = (state_15444[2]);var state_15444__$1 = state_15444;var statearr_15460_15484 = state_15444__$1;(statearr_15460_15484[2] = inst_15428);
(statearr_15460_15484[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 11))
{var inst_15424 = (state_15444[2]);var inst_15425 = (new Array(n));var inst_15408 = inst_15425;var inst_15409 = 0;var state_15444__$1 = (function (){var statearr_15461 = state_15444;(statearr_15461[12] = inst_15424);
(statearr_15461[7] = inst_15408);
(statearr_15461[8] = inst_15409);
return statearr_15461;
})();var statearr_15462_15485 = state_15444__$1;(statearr_15462_15485[2] = null);
(statearr_15462_15485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 12))
{var inst_15408 = (state_15444[7]);var inst_15432 = cljs.core.vec.call(null,inst_15408);var state_15444__$1 = state_15444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15444__$1,15,out,inst_15432);
} else
{if((state_val_15445 === 13))
{var state_15444__$1 = state_15444;var statearr_15463_15486 = state_15444__$1;(statearr_15463_15486[2] = null);
(statearr_15463_15486[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 14))
{var inst_15437 = (state_15444[2]);var inst_15438 = cljs.core.async.close_BANG_.call(null,out);var state_15444__$1 = (function (){var statearr_15464 = state_15444;(statearr_15464[13] = inst_15437);
return statearr_15464;
})();var statearr_15465_15487 = state_15444__$1;(statearr_15465_15487[2] = inst_15438);
(statearr_15465_15487[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15445 === 15))
{var inst_15434 = (state_15444[2]);var state_15444__$1 = state_15444;var statearr_15466_15488 = state_15444__$1;(statearr_15466_15488[2] = inst_15434);
(statearr_15466_15488[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15470[0] = state_machine__5507__auto__);
(statearr_15470[1] = 1);
return statearr_15470;
});
var state_machine__5507__auto____1 = (function (state_15444){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15444);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15471){if((e15471 instanceof Object))
{var ex__5510__auto__ = e15471;var statearr_15472_15489 = state_15444;(statearr_15472_15489[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15490 = state_15444;
state_15444 = G__15490;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15444){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15473 = f__5522__auto__.call(null);(statearr_15473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15474);
return statearr_15473;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15633 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15603){var state_val_15604 = (state_15603[1]);if((state_val_15604 === 1))
{var inst_15562 = [];var inst_15563 = inst_15562;var inst_15564 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15603__$1 = (function (){var statearr_15605 = state_15603;(statearr_15605[7] = inst_15564);
(statearr_15605[8] = inst_15563);
return statearr_15605;
})();var statearr_15606_15634 = state_15603__$1;(statearr_15606_15634[2] = null);
(statearr_15606_15634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 2))
{var state_15603__$1 = state_15603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15603__$1,4,ch);
} else
{if((state_val_15604 === 3))
{var inst_15601 = (state_15603[2]);var state_15603__$1 = state_15603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15603__$1,inst_15601);
} else
{if((state_val_15604 === 4))
{var inst_15567 = (state_15603[9]);var inst_15567__$1 = (state_15603[2]);var inst_15568 = (inst_15567__$1 == null);var inst_15569 = cljs.core.not.call(null,inst_15568);var state_15603__$1 = (function (){var statearr_15607 = state_15603;(statearr_15607[9] = inst_15567__$1);
return statearr_15607;
})();if(inst_15569)
{var statearr_15608_15635 = state_15603__$1;(statearr_15608_15635[1] = 5);
} else
{var statearr_15609_15636 = state_15603__$1;(statearr_15609_15636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 5))
{var inst_15571 = (state_15603[10]);var inst_15567 = (state_15603[9]);var inst_15564 = (state_15603[7]);var inst_15571__$1 = f.call(null,inst_15567);var inst_15572 = cljs.core._EQ_.call(null,inst_15571__$1,inst_15564);var inst_15573 = cljs.core.keyword_identical_QMARK_.call(null,inst_15564,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15574 = (inst_15572) || (inst_15573);var state_15603__$1 = (function (){var statearr_15610 = state_15603;(statearr_15610[10] = inst_15571__$1);
return statearr_15610;
})();if(cljs.core.truth_(inst_15574))
{var statearr_15611_15637 = state_15603__$1;(statearr_15611_15637[1] = 8);
} else
{var statearr_15612_15638 = state_15603__$1;(statearr_15612_15638[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 6))
{var inst_15563 = (state_15603[8]);var inst_15588 = inst_15563.length;var inst_15589 = (inst_15588 > 0);var state_15603__$1 = state_15603;if(cljs.core.truth_(inst_15589))
{var statearr_15614_15639 = state_15603__$1;(statearr_15614_15639[1] = 12);
} else
{var statearr_15615_15640 = state_15603__$1;(statearr_15615_15640[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 7))
{var inst_15599 = (state_15603[2]);var state_15603__$1 = state_15603;var statearr_15616_15641 = state_15603__$1;(statearr_15616_15641[2] = inst_15599);
(statearr_15616_15641[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 8))
{var inst_15571 = (state_15603[10]);var inst_15567 = (state_15603[9]);var inst_15563 = (state_15603[8]);var inst_15576 = inst_15563.push(inst_15567);var tmp15613 = inst_15563;var inst_15563__$1 = tmp15613;var inst_15564 = inst_15571;var state_15603__$1 = (function (){var statearr_15617 = state_15603;(statearr_15617[11] = inst_15576);
(statearr_15617[7] = inst_15564);
(statearr_15617[8] = inst_15563__$1);
return statearr_15617;
})();var statearr_15618_15642 = state_15603__$1;(statearr_15618_15642[2] = null);
(statearr_15618_15642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 9))
{var inst_15563 = (state_15603[8]);var inst_15579 = cljs.core.vec.call(null,inst_15563);var state_15603__$1 = state_15603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15603__$1,11,out,inst_15579);
} else
{if((state_val_15604 === 10))
{var inst_15586 = (state_15603[2]);var state_15603__$1 = state_15603;var statearr_15619_15643 = state_15603__$1;(statearr_15619_15643[2] = inst_15586);
(statearr_15619_15643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 11))
{var inst_15571 = (state_15603[10]);var inst_15567 = (state_15603[9]);var inst_15581 = (state_15603[2]);var inst_15582 = [];var inst_15583 = inst_15582.push(inst_15567);var inst_15563 = inst_15582;var inst_15564 = inst_15571;var state_15603__$1 = (function (){var statearr_15620 = state_15603;(statearr_15620[12] = inst_15581);
(statearr_15620[13] = inst_15583);
(statearr_15620[7] = inst_15564);
(statearr_15620[8] = inst_15563);
return statearr_15620;
})();var statearr_15621_15644 = state_15603__$1;(statearr_15621_15644[2] = null);
(statearr_15621_15644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 12))
{var inst_15563 = (state_15603[8]);var inst_15591 = cljs.core.vec.call(null,inst_15563);var state_15603__$1 = state_15603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15603__$1,15,out,inst_15591);
} else
{if((state_val_15604 === 13))
{var state_15603__$1 = state_15603;var statearr_15622_15645 = state_15603__$1;(statearr_15622_15645[2] = null);
(statearr_15622_15645[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 14))
{var inst_15596 = (state_15603[2]);var inst_15597 = cljs.core.async.close_BANG_.call(null,out);var state_15603__$1 = (function (){var statearr_15623 = state_15603;(statearr_15623[14] = inst_15596);
return statearr_15623;
})();var statearr_15624_15646 = state_15603__$1;(statearr_15624_15646[2] = inst_15597);
(statearr_15624_15646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15604 === 15))
{var inst_15593 = (state_15603[2]);var state_15603__$1 = state_15603;var statearr_15625_15647 = state_15603__$1;(statearr_15625_15647[2] = inst_15593);
(statearr_15625_15647[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15629[0] = state_machine__5507__auto__);
(statearr_15629[1] = 1);
return statearr_15629;
});
var state_machine__5507__auto____1 = (function (state_15603){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15630){if((e15630 instanceof Object))
{var ex__5510__auto__ = e15630;var statearr_15631_15648 = state_15603;(statearr_15631_15648[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15649 = state_15603;
state_15603 = G__15649;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15603){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15632 = f__5522__auto__.call(null);(statearr_15632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15633);
return statearr_15632;
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