// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_17394 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17395 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17396 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17395,table_section_wrapper_17395,opt_wrapper_17394,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17396,table_section_wrapper_17395,cell_wrapper_17396,opt_wrapper_17394,table_section_wrapper_17395,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17395]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17401 = cljs.core.seq.call(null,tbody);var chunk__17402 = null;var count__17403 = 0;var i__17404 = 0;while(true){
if((i__17404 < count__17403))
{var child = cljs.core._nth.call(null,chunk__17402,i__17404);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17405 = seq__17401;
var G__17406 = chunk__17402;
var G__17407 = count__17403;
var G__17408 = (i__17404 + 1);
seq__17401 = G__17405;
chunk__17402 = G__17406;
count__17403 = G__17407;
i__17404 = G__17408;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17401);if(temp__4092__auto__)
{var seq__17401__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17401__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17401__$1);{
var G__17409 = cljs.core.chunk_rest.call(null,seq__17401__$1);
var G__17410 = c__4148__auto__;
var G__17411 = cljs.core.count.call(null,c__4148__auto__);
var G__17412 = 0;
seq__17401 = G__17409;
chunk__17402 = G__17410;
count__17403 = G__17411;
i__17404 = G__17412;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17401__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17413 = cljs.core.next.call(null,seq__17401__$1);
var G__17414 = null;
var G__17415 = 0;
var G__17416 = 0;
seq__17401 = G__17413;
chunk__17402 = G__17414;
count__17403 = G__17415;
i__17404 = G__17416;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17418 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17418,0,null);var start_wrap = cljs.core.nth.call(null,vec__17418,1,null);var end_wrap = cljs.core.nth.call(null,vec__17418,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17419 = wrapper.lastChild;
var G__17420 = (level - 1);
wrapper = G__17419;
level = G__17420;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj17422 = {};return obj17422;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__17423){
var mesg = cljs.core.seq(arglist__17423);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__17424){
var mesg = cljs.core.seq(arglist__17424);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__17425){
var contents = cljs.core.seq(arglist__17425);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17426_SHARP_){return p1__17426_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17427_SHARP_,p2__17428_SHARP_){return goog.dom.insertChildAt(p1__17427_SHARP_,p2__17428_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17430_SHARP_,p2__17429_SHARP_){return goog.dom.insertSiblingBefore(p2__17429_SHARP_,p1__17430_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17432_SHARP_,p2__17431_SHARP_){return goog.dom.insertSiblingAfter(p2__17431_SHARP_,p1__17432_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17434_SHARP_,p2__17433_SHARP_){return goog.dom.replaceNode(p2__17433_SHARP_,p1__17434_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__17439_17443 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17440_17444 = null;var count__17441_17445 = 0;var i__17442_17446 = 0;while(true){
if((i__17442_17446 < count__17441_17445))
{var n_17447 = cljs.core._nth.call(null,chunk__17440_17444,i__17442_17446);goog.style.setStyle(n_17447,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17448 = seq__17439_17443;
var G__17449 = chunk__17440_17444;
var G__17450 = count__17441_17445;
var G__17451 = (i__17442_17446 + 1);
seq__17439_17443 = G__17448;
chunk__17440_17444 = G__17449;
count__17441_17445 = G__17450;
i__17442_17446 = G__17451;
continue;
}
} else
{var temp__4092__auto___17452 = cljs.core.seq.call(null,seq__17439_17443);if(temp__4092__auto___17452)
{var seq__17439_17453__$1 = temp__4092__auto___17452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17439_17453__$1))
{var c__4148__auto___17454 = cljs.core.chunk_first.call(null,seq__17439_17453__$1);{
var G__17455 = cljs.core.chunk_rest.call(null,seq__17439_17453__$1);
var G__17456 = c__4148__auto___17454;
var G__17457 = cljs.core.count.call(null,c__4148__auto___17454);
var G__17458 = 0;
seq__17439_17443 = G__17455;
chunk__17440_17444 = G__17456;
count__17441_17445 = G__17457;
i__17442_17446 = G__17458;
continue;
}
} else
{var n_17459 = cljs.core.first.call(null,seq__17439_17453__$1);goog.style.setStyle(n_17459,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17460 = cljs.core.next.call(null,seq__17439_17453__$1);
var G__17461 = null;
var G__17462 = 0;
var G__17463 = 0;
seq__17439_17443 = G__17460;
chunk__17440_17444 = G__17461;
count__17441_17445 = G__17462;
i__17442_17446 = G__17463;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17464){
var content = cljs.core.first(arglist__17464);
arglist__17464 = cljs.core.next(arglist__17464);
var name = cljs.core.first(arglist__17464);
var value = cljs.core.rest(arglist__17464);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__17469_17473 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17470_17474 = null;var count__17471_17475 = 0;var i__17472_17476 = 0;while(true){
if((i__17472_17476 < count__17471_17475))
{var n_17477 = cljs.core._nth.call(null,chunk__17470_17474,i__17472_17476);n_17477.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17478 = seq__17469_17473;
var G__17479 = chunk__17470_17474;
var G__17480 = count__17471_17475;
var G__17481 = (i__17472_17476 + 1);
seq__17469_17473 = G__17478;
chunk__17470_17474 = G__17479;
count__17471_17475 = G__17480;
i__17472_17476 = G__17481;
continue;
}
} else
{var temp__4092__auto___17482 = cljs.core.seq.call(null,seq__17469_17473);if(temp__4092__auto___17482)
{var seq__17469_17483__$1 = temp__4092__auto___17482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17469_17483__$1))
{var c__4148__auto___17484 = cljs.core.chunk_first.call(null,seq__17469_17483__$1);{
var G__17485 = cljs.core.chunk_rest.call(null,seq__17469_17483__$1);
var G__17486 = c__4148__auto___17484;
var G__17487 = cljs.core.count.call(null,c__4148__auto___17484);
var G__17488 = 0;
seq__17469_17473 = G__17485;
chunk__17470_17474 = G__17486;
count__17471_17475 = G__17487;
i__17472_17476 = G__17488;
continue;
}
} else
{var n_17489 = cljs.core.first.call(null,seq__17469_17483__$1);n_17489.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17490 = cljs.core.next.call(null,seq__17469_17483__$1);
var G__17491 = null;
var G__17492 = 0;
var G__17493 = 0;
seq__17469_17473 = G__17490;
chunk__17470_17474 = G__17491;
count__17471_17475 = G__17492;
i__17472_17476 = G__17493;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17494){
var content = cljs.core.first(arglist__17494);
arglist__17494 = cljs.core.next(arglist__17494);
var name = cljs.core.first(arglist__17494);
var value = cljs.core.rest(arglist__17494);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17499_17503 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17500_17504 = null;var count__17501_17505 = 0;var i__17502_17506 = 0;while(true){
if((i__17502_17506 < count__17501_17505))
{var n_17507 = cljs.core._nth.call(null,chunk__17500_17504,i__17502_17506);n_17507.removeAttribute(cljs.core.name.call(null,name));
{
var G__17508 = seq__17499_17503;
var G__17509 = chunk__17500_17504;
var G__17510 = count__17501_17505;
var G__17511 = (i__17502_17506 + 1);
seq__17499_17503 = G__17508;
chunk__17500_17504 = G__17509;
count__17501_17505 = G__17510;
i__17502_17506 = G__17511;
continue;
}
} else
{var temp__4092__auto___17512 = cljs.core.seq.call(null,seq__17499_17503);if(temp__4092__auto___17512)
{var seq__17499_17513__$1 = temp__4092__auto___17512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17499_17513__$1))
{var c__4148__auto___17514 = cljs.core.chunk_first.call(null,seq__17499_17513__$1);{
var G__17515 = cljs.core.chunk_rest.call(null,seq__17499_17513__$1);
var G__17516 = c__4148__auto___17514;
var G__17517 = cljs.core.count.call(null,c__4148__auto___17514);
var G__17518 = 0;
seq__17499_17503 = G__17515;
chunk__17500_17504 = G__17516;
count__17501_17505 = G__17517;
i__17502_17506 = G__17518;
continue;
}
} else
{var n_17519 = cljs.core.first.call(null,seq__17499_17513__$1);n_17519.removeAttribute(cljs.core.name.call(null,name));
{
var G__17520 = cljs.core.next.call(null,seq__17499_17513__$1);
var G__17521 = null;
var G__17522 = 0;
var G__17523 = 0;
seq__17499_17503 = G__17520;
chunk__17500_17504 = G__17521;
count__17501_17505 = G__17522;
i__17502_17506 = G__17523;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17525 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17525,0,null);var v = cljs.core.nth.call(null,vec__17525,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17526_SHARP_){var attr = attrs__$1.item(p1__17526_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17533_17539 = cljs.core.seq.call(null,styles);var chunk__17534_17540 = null;var count__17535_17541 = 0;var i__17536_17542 = 0;while(true){
if((i__17536_17542 < count__17535_17541))
{var vec__17537_17543 = cljs.core._nth.call(null,chunk__17534_17540,i__17536_17542);var name_17544 = cljs.core.nth.call(null,vec__17537_17543,0,null);var value_17545 = cljs.core.nth.call(null,vec__17537_17543,1,null);domina.set_style_BANG_.call(null,content,name_17544,value_17545);
{
var G__17546 = seq__17533_17539;
var G__17547 = chunk__17534_17540;
var G__17548 = count__17535_17541;
var G__17549 = (i__17536_17542 + 1);
seq__17533_17539 = G__17546;
chunk__17534_17540 = G__17547;
count__17535_17541 = G__17548;
i__17536_17542 = G__17549;
continue;
}
} else
{var temp__4092__auto___17550 = cljs.core.seq.call(null,seq__17533_17539);if(temp__4092__auto___17550)
{var seq__17533_17551__$1 = temp__4092__auto___17550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17533_17551__$1))
{var c__4148__auto___17552 = cljs.core.chunk_first.call(null,seq__17533_17551__$1);{
var G__17553 = cljs.core.chunk_rest.call(null,seq__17533_17551__$1);
var G__17554 = c__4148__auto___17552;
var G__17555 = cljs.core.count.call(null,c__4148__auto___17552);
var G__17556 = 0;
seq__17533_17539 = G__17553;
chunk__17534_17540 = G__17554;
count__17535_17541 = G__17555;
i__17536_17542 = G__17556;
continue;
}
} else
{var vec__17538_17557 = cljs.core.first.call(null,seq__17533_17551__$1);var name_17558 = cljs.core.nth.call(null,vec__17538_17557,0,null);var value_17559 = cljs.core.nth.call(null,vec__17538_17557,1,null);domina.set_style_BANG_.call(null,content,name_17558,value_17559);
{
var G__17560 = cljs.core.next.call(null,seq__17533_17551__$1);
var G__17561 = null;
var G__17562 = 0;
var G__17563 = 0;
seq__17533_17539 = G__17560;
chunk__17534_17540 = G__17561;
count__17535_17541 = G__17562;
i__17536_17542 = G__17563;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17570_17576 = cljs.core.seq.call(null,attrs);var chunk__17571_17577 = null;var count__17572_17578 = 0;var i__17573_17579 = 0;while(true){
if((i__17573_17579 < count__17572_17578))
{var vec__17574_17580 = cljs.core._nth.call(null,chunk__17571_17577,i__17573_17579);var name_17581 = cljs.core.nth.call(null,vec__17574_17580,0,null);var value_17582 = cljs.core.nth.call(null,vec__17574_17580,1,null);domina.set_attr_BANG_.call(null,content,name_17581,value_17582);
{
var G__17583 = seq__17570_17576;
var G__17584 = chunk__17571_17577;
var G__17585 = count__17572_17578;
var G__17586 = (i__17573_17579 + 1);
seq__17570_17576 = G__17583;
chunk__17571_17577 = G__17584;
count__17572_17578 = G__17585;
i__17573_17579 = G__17586;
continue;
}
} else
{var temp__4092__auto___17587 = cljs.core.seq.call(null,seq__17570_17576);if(temp__4092__auto___17587)
{var seq__17570_17588__$1 = temp__4092__auto___17587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17570_17588__$1))
{var c__4148__auto___17589 = cljs.core.chunk_first.call(null,seq__17570_17588__$1);{
var G__17590 = cljs.core.chunk_rest.call(null,seq__17570_17588__$1);
var G__17591 = c__4148__auto___17589;
var G__17592 = cljs.core.count.call(null,c__4148__auto___17589);
var G__17593 = 0;
seq__17570_17576 = G__17590;
chunk__17571_17577 = G__17591;
count__17572_17578 = G__17592;
i__17573_17579 = G__17593;
continue;
}
} else
{var vec__17575_17594 = cljs.core.first.call(null,seq__17570_17588__$1);var name_17595 = cljs.core.nth.call(null,vec__17575_17594,0,null);var value_17596 = cljs.core.nth.call(null,vec__17575_17594,1,null);domina.set_attr_BANG_.call(null,content,name_17595,value_17596);
{
var G__17597 = cljs.core.next.call(null,seq__17570_17588__$1);
var G__17598 = null;
var G__17599 = 0;
var G__17600 = 0;
seq__17570_17576 = G__17597;
chunk__17571_17577 = G__17598;
count__17572_17578 = G__17599;
i__17573_17579 = G__17600;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17605_17609 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17606_17610 = null;var count__17607_17611 = 0;var i__17608_17612 = 0;while(true){
if((i__17608_17612 < count__17607_17611))
{var node_17613 = cljs.core._nth.call(null,chunk__17606_17610,i__17608_17612);goog.dom.classes.add(node_17613,class$);
{
var G__17614 = seq__17605_17609;
var G__17615 = chunk__17606_17610;
var G__17616 = count__17607_17611;
var G__17617 = (i__17608_17612 + 1);
seq__17605_17609 = G__17614;
chunk__17606_17610 = G__17615;
count__17607_17611 = G__17616;
i__17608_17612 = G__17617;
continue;
}
} else
{var temp__4092__auto___17618 = cljs.core.seq.call(null,seq__17605_17609);if(temp__4092__auto___17618)
{var seq__17605_17619__$1 = temp__4092__auto___17618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17605_17619__$1))
{var c__4148__auto___17620 = cljs.core.chunk_first.call(null,seq__17605_17619__$1);{
var G__17621 = cljs.core.chunk_rest.call(null,seq__17605_17619__$1);
var G__17622 = c__4148__auto___17620;
var G__17623 = cljs.core.count.call(null,c__4148__auto___17620);
var G__17624 = 0;
seq__17605_17609 = G__17621;
chunk__17606_17610 = G__17622;
count__17607_17611 = G__17623;
i__17608_17612 = G__17624;
continue;
}
} else
{var node_17625 = cljs.core.first.call(null,seq__17605_17619__$1);goog.dom.classes.add(node_17625,class$);
{
var G__17626 = cljs.core.next.call(null,seq__17605_17619__$1);
var G__17627 = null;
var G__17628 = 0;
var G__17629 = 0;
seq__17605_17609 = G__17626;
chunk__17606_17610 = G__17627;
count__17607_17611 = G__17628;
i__17608_17612 = G__17629;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17634_17638 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17635_17639 = null;var count__17636_17640 = 0;var i__17637_17641 = 0;while(true){
if((i__17637_17641 < count__17636_17640))
{var node_17642 = cljs.core._nth.call(null,chunk__17635_17639,i__17637_17641);goog.dom.classes.remove(node_17642,class$);
{
var G__17643 = seq__17634_17638;
var G__17644 = chunk__17635_17639;
var G__17645 = count__17636_17640;
var G__17646 = (i__17637_17641 + 1);
seq__17634_17638 = G__17643;
chunk__17635_17639 = G__17644;
count__17636_17640 = G__17645;
i__17637_17641 = G__17646;
continue;
}
} else
{var temp__4092__auto___17647 = cljs.core.seq.call(null,seq__17634_17638);if(temp__4092__auto___17647)
{var seq__17634_17648__$1 = temp__4092__auto___17647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17634_17648__$1))
{var c__4148__auto___17649 = cljs.core.chunk_first.call(null,seq__17634_17648__$1);{
var G__17650 = cljs.core.chunk_rest.call(null,seq__17634_17648__$1);
var G__17651 = c__4148__auto___17649;
var G__17652 = cljs.core.count.call(null,c__4148__auto___17649);
var G__17653 = 0;
seq__17634_17638 = G__17650;
chunk__17635_17639 = G__17651;
count__17636_17640 = G__17652;
i__17637_17641 = G__17653;
continue;
}
} else
{var node_17654 = cljs.core.first.call(null,seq__17634_17648__$1);goog.dom.classes.remove(node_17654,class$);
{
var G__17655 = cljs.core.next.call(null,seq__17634_17648__$1);
var G__17656 = null;
var G__17657 = 0;
var G__17658 = 0;
seq__17634_17638 = G__17655;
chunk__17635_17639 = G__17656;
count__17636_17640 = G__17657;
i__17637_17641 = G__17658;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17663_17667 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17664_17668 = null;var count__17665_17669 = 0;var i__17666_17670 = 0;while(true){
if((i__17666_17670 < count__17665_17669))
{var node_17671 = cljs.core._nth.call(null,chunk__17664_17668,i__17666_17670);goog.dom.classes.toggle(node_17671,class$);
{
var G__17672 = seq__17663_17667;
var G__17673 = chunk__17664_17668;
var G__17674 = count__17665_17669;
var G__17675 = (i__17666_17670 + 1);
seq__17663_17667 = G__17672;
chunk__17664_17668 = G__17673;
count__17665_17669 = G__17674;
i__17666_17670 = G__17675;
continue;
}
} else
{var temp__4092__auto___17676 = cljs.core.seq.call(null,seq__17663_17667);if(temp__4092__auto___17676)
{var seq__17663_17677__$1 = temp__4092__auto___17676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17663_17677__$1))
{var c__4148__auto___17678 = cljs.core.chunk_first.call(null,seq__17663_17677__$1);{
var G__17679 = cljs.core.chunk_rest.call(null,seq__17663_17677__$1);
var G__17680 = c__4148__auto___17678;
var G__17681 = cljs.core.count.call(null,c__4148__auto___17678);
var G__17682 = 0;
seq__17663_17667 = G__17679;
chunk__17664_17668 = G__17680;
count__17665_17669 = G__17681;
i__17666_17670 = G__17682;
continue;
}
} else
{var node_17683 = cljs.core.first.call(null,seq__17663_17677__$1);goog.dom.classes.toggle(node_17683,class$);
{
var G__17684 = cljs.core.next.call(null,seq__17663_17677__$1);
var G__17685 = null;
var G__17686 = 0;
var G__17687 = 0;
seq__17663_17667 = G__17684;
chunk__17664_17668 = G__17685;
count__17665_17669 = G__17686;
i__17666_17670 = G__17687;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17696__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17692_17697 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17693_17698 = null;var count__17694_17699 = 0;var i__17695_17700 = 0;while(true){
if((i__17695_17700 < count__17694_17699))
{var node_17701 = cljs.core._nth.call(null,chunk__17693_17698,i__17695_17700);goog.dom.classes.set(node_17701,classes_17696__$1);
{
var G__17702 = seq__17692_17697;
var G__17703 = chunk__17693_17698;
var G__17704 = count__17694_17699;
var G__17705 = (i__17695_17700 + 1);
seq__17692_17697 = G__17702;
chunk__17693_17698 = G__17703;
count__17694_17699 = G__17704;
i__17695_17700 = G__17705;
continue;
}
} else
{var temp__4092__auto___17706 = cljs.core.seq.call(null,seq__17692_17697);if(temp__4092__auto___17706)
{var seq__17692_17707__$1 = temp__4092__auto___17706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17692_17707__$1))
{var c__4148__auto___17708 = cljs.core.chunk_first.call(null,seq__17692_17707__$1);{
var G__17709 = cljs.core.chunk_rest.call(null,seq__17692_17707__$1);
var G__17710 = c__4148__auto___17708;
var G__17711 = cljs.core.count.call(null,c__4148__auto___17708);
var G__17712 = 0;
seq__17692_17697 = G__17709;
chunk__17693_17698 = G__17710;
count__17694_17699 = G__17711;
i__17695_17700 = G__17712;
continue;
}
} else
{var node_17713 = cljs.core.first.call(null,seq__17692_17707__$1);goog.dom.classes.set(node_17713,classes_17696__$1);
{
var G__17714 = cljs.core.next.call(null,seq__17692_17707__$1);
var G__17715 = null;
var G__17716 = 0;
var G__17717 = 0;
seq__17692_17697 = G__17714;
chunk__17693_17698 = G__17715;
count__17694_17699 = G__17716;
i__17695_17700 = G__17717;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17722_17726 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17723_17727 = null;var count__17724_17728 = 0;var i__17725_17729 = 0;while(true){
if((i__17725_17729 < count__17724_17728))
{var node_17730 = cljs.core._nth.call(null,chunk__17723_17727,i__17725_17729);goog.dom.setTextContent(node_17730,value);
{
var G__17731 = seq__17722_17726;
var G__17732 = chunk__17723_17727;
var G__17733 = count__17724_17728;
var G__17734 = (i__17725_17729 + 1);
seq__17722_17726 = G__17731;
chunk__17723_17727 = G__17732;
count__17724_17728 = G__17733;
i__17725_17729 = G__17734;
continue;
}
} else
{var temp__4092__auto___17735 = cljs.core.seq.call(null,seq__17722_17726);if(temp__4092__auto___17735)
{var seq__17722_17736__$1 = temp__4092__auto___17735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17722_17736__$1))
{var c__4148__auto___17737 = cljs.core.chunk_first.call(null,seq__17722_17736__$1);{
var G__17738 = cljs.core.chunk_rest.call(null,seq__17722_17736__$1);
var G__17739 = c__4148__auto___17737;
var G__17740 = cljs.core.count.call(null,c__4148__auto___17737);
var G__17741 = 0;
seq__17722_17726 = G__17738;
chunk__17723_17727 = G__17739;
count__17724_17728 = G__17740;
i__17725_17729 = G__17741;
continue;
}
} else
{var node_17742 = cljs.core.first.call(null,seq__17722_17736__$1);goog.dom.setTextContent(node_17742,value);
{
var G__17743 = cljs.core.next.call(null,seq__17722_17736__$1);
var G__17744 = null;
var G__17745 = 0;
var G__17746 = 0;
seq__17722_17726 = G__17743;
chunk__17723_17727 = G__17744;
count__17724_17728 = G__17745;
i__17725_17729 = G__17746;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17751_17755 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17752_17756 = null;var count__17753_17757 = 0;var i__17754_17758 = 0;while(true){
if((i__17754_17758 < count__17753_17757))
{var node_17759 = cljs.core._nth.call(null,chunk__17752_17756,i__17754_17758);goog.dom.forms.setValue(node_17759,value);
{
var G__17760 = seq__17751_17755;
var G__17761 = chunk__17752_17756;
var G__17762 = count__17753_17757;
var G__17763 = (i__17754_17758 + 1);
seq__17751_17755 = G__17760;
chunk__17752_17756 = G__17761;
count__17753_17757 = G__17762;
i__17754_17758 = G__17763;
continue;
}
} else
{var temp__4092__auto___17764 = cljs.core.seq.call(null,seq__17751_17755);if(temp__4092__auto___17764)
{var seq__17751_17765__$1 = temp__4092__auto___17764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17751_17765__$1))
{var c__4148__auto___17766 = cljs.core.chunk_first.call(null,seq__17751_17765__$1);{
var G__17767 = cljs.core.chunk_rest.call(null,seq__17751_17765__$1);
var G__17768 = c__4148__auto___17766;
var G__17769 = cljs.core.count.call(null,c__4148__auto___17766);
var G__17770 = 0;
seq__17751_17755 = G__17767;
chunk__17752_17756 = G__17768;
count__17753_17757 = G__17769;
i__17754_17758 = G__17770;
continue;
}
} else
{var node_17771 = cljs.core.first.call(null,seq__17751_17765__$1);goog.dom.forms.setValue(node_17771,value);
{
var G__17772 = cljs.core.next.call(null,seq__17751_17765__$1);
var G__17773 = null;
var G__17774 = 0;
var G__17775 = 0;
seq__17751_17755 = G__17772;
chunk__17752_17756 = G__17773;
count__17753_17757 = G__17774;
i__17754_17758 = G__17775;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_17786 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17782_17787 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17783_17788 = null;var count__17784_17789 = 0;var i__17785_17790 = 0;while(true){
if((i__17785_17790 < count__17784_17789))
{var node_17791 = cljs.core._nth.call(null,chunk__17783_17788,i__17785_17790);node_17791.innerHTML = value_17786;
{
var G__17792 = seq__17782_17787;
var G__17793 = chunk__17783_17788;
var G__17794 = count__17784_17789;
var G__17795 = (i__17785_17790 + 1);
seq__17782_17787 = G__17792;
chunk__17783_17788 = G__17793;
count__17784_17789 = G__17794;
i__17785_17790 = G__17795;
continue;
}
} else
{var temp__4092__auto___17796 = cljs.core.seq.call(null,seq__17782_17787);if(temp__4092__auto___17796)
{var seq__17782_17797__$1 = temp__4092__auto___17796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17782_17797__$1))
{var c__4148__auto___17798 = cljs.core.chunk_first.call(null,seq__17782_17797__$1);{
var G__17799 = cljs.core.chunk_rest.call(null,seq__17782_17797__$1);
var G__17800 = c__4148__auto___17798;
var G__17801 = cljs.core.count.call(null,c__4148__auto___17798);
var G__17802 = 0;
seq__17782_17787 = G__17799;
chunk__17783_17788 = G__17800;
count__17784_17789 = G__17801;
i__17785_17790 = G__17802;
continue;
}
} else
{var node_17803 = cljs.core.first.call(null,seq__17782_17797__$1);node_17803.innerHTML = value_17786;
{
var G__17804 = cljs.core.next.call(null,seq__17782_17797__$1);
var G__17805 = null;
var G__17806 = 0;
var G__17807 = 0;
seq__17782_17787 = G__17804;
chunk__17783_17788 = G__17805;
count__17784_17789 = G__17806;
i__17785_17790 = G__17807;
continue;
}
}
} else
{}
}
break;
}
}catch (e17781){if((e17781 instanceof Error))
{var e_17808 = e17781;domina.replace_children_BANG_.call(null,content,value_17786);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17781;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17815_17819 = cljs.core.seq.call(null,children);var chunk__17816_17820 = null;var count__17817_17821 = 0;var i__17818_17822 = 0;while(true){
if((i__17818_17822 < count__17817_17821))
{var child_17823 = cljs.core._nth.call(null,chunk__17816_17820,i__17818_17822);frag.appendChild(child_17823);
{
var G__17824 = seq__17815_17819;
var G__17825 = chunk__17816_17820;
var G__17826 = count__17817_17821;
var G__17827 = (i__17818_17822 + 1);
seq__17815_17819 = G__17824;
chunk__17816_17820 = G__17825;
count__17817_17821 = G__17826;
i__17818_17822 = G__17827;
continue;
}
} else
{var temp__4092__auto___17828 = cljs.core.seq.call(null,seq__17815_17819);if(temp__4092__auto___17828)
{var seq__17815_17829__$1 = temp__4092__auto___17828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17815_17829__$1))
{var c__4148__auto___17830 = cljs.core.chunk_first.call(null,seq__17815_17829__$1);{
var G__17831 = cljs.core.chunk_rest.call(null,seq__17815_17829__$1);
var G__17832 = c__4148__auto___17830;
var G__17833 = cljs.core.count.call(null,c__4148__auto___17830);
var G__17834 = 0;
seq__17815_17819 = G__17831;
chunk__17816_17820 = G__17832;
count__17817_17821 = G__17833;
i__17818_17822 = G__17834;
continue;
}
} else
{var child_17835 = cljs.core.first.call(null,seq__17815_17829__$1);frag.appendChild(child_17835);
{
var G__17836 = cljs.core.next.call(null,seq__17815_17829__$1);
var G__17837 = null;
var G__17838 = 0;
var G__17839 = 0;
seq__17815_17819 = G__17836;
chunk__17816_17820 = G__17837;
count__17817_17821 = G__17838;
i__17818_17822 = G__17839;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17809_SHARP_,p2__17810_SHARP_){return f.call(null,p1__17809_SHARP_,p2__17810_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__17841 = list_thing;if(G__17841)
{var bit__4050__auto__ = (G__17841.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17841.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17841.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17841);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__17842 = content;if(G__17842)
{var bit__4050__auto__ = (G__17842.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17842.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17842.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17842);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17842);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__17843 = content;if(G__17843)
{var bit__4050__auto__ = (G__17843.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17843.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17843.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17843);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17843);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map