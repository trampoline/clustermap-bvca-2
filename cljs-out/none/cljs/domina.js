// Compiled by ClojureScript 0.0-2173
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
var opt_wrapper_28490 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28491 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28492 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28491,table_section_wrapper_28491,opt_wrapper_28490,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28492,table_section_wrapper_28491,cell_wrapper_28492,opt_wrapper_28490,table_section_wrapper_28491,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28491]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28497 = cljs.core.seq.call(null,tbody);var chunk__28498 = null;var count__28499 = 0;var i__28500 = 0;while(true){
if((i__28500 < count__28499))
{var child = cljs.core._nth.call(null,chunk__28498,i__28500);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28501 = seq__28497;
var G__28502 = chunk__28498;
var G__28503 = count__28499;
var G__28504 = (i__28500 + 1);
seq__28497 = G__28501;
chunk__28498 = G__28502;
count__28499 = G__28503;
i__28500 = G__28504;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28497);if(temp__4092__auto__)
{var seq__28497__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28497__$1);{
var G__28505 = cljs.core.chunk_rest.call(null,seq__28497__$1);
var G__28506 = c__4189__auto__;
var G__28507 = cljs.core.count.call(null,c__4189__auto__);
var G__28508 = 0;
seq__28497 = G__28505;
chunk__28498 = G__28506;
count__28499 = G__28507;
i__28500 = G__28508;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28497__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28509 = cljs.core.next.call(null,seq__28497__$1);
var G__28510 = null;
var G__28511 = 0;
var G__28512 = 0;
seq__28497 = G__28509;
chunk__28498 = G__28510;
count__28499 = G__28511;
i__28500 = G__28512;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28514 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28514,0,null);var start_wrap = cljs.core.nth.call(null,vec__28514,1,null);var end_wrap = cljs.core.nth.call(null,vec__28514,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28515 = wrapper.lastChild;
var G__28516 = (level - 1);
wrapper = G__28515;
level = G__28516;
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
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
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
domina.DomContent = (function (){var obj28518 = {};return obj28518;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__28519){
var mesg = cljs.core.seq(arglist__28519);
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
log.cljs$lang$applyTo = (function (arglist__28520){
var mesg = cljs.core.seq(arglist__28520);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28521){
var contents = cljs.core.seq(arglist__28521);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28522_SHARP_){return p1__28522_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28523_SHARP_,p2__28524_SHARP_){return goog.dom.insertChildAt(p1__28523_SHARP_,p2__28524_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28526_SHARP_,p2__28525_SHARP_){return goog.dom.insertSiblingBefore(p2__28525_SHARP_,p1__28526_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28528_SHARP_,p2__28527_SHARP_){return goog.dom.insertSiblingAfter(p2__28527_SHARP_,p1__28528_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28530_SHARP_,p2__28529_SHARP_){return goog.dom.replaceNode(p2__28529_SHARP_,p1__28530_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28535_28539 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28536_28540 = null;var count__28537_28541 = 0;var i__28538_28542 = 0;while(true){
if((i__28538_28542 < count__28537_28541))
{var n_28543 = cljs.core._nth.call(null,chunk__28536_28540,i__28538_28542);goog.style.setStyle(n_28543,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28544 = seq__28535_28539;
var G__28545 = chunk__28536_28540;
var G__28546 = count__28537_28541;
var G__28547 = (i__28538_28542 + 1);
seq__28535_28539 = G__28544;
chunk__28536_28540 = G__28545;
count__28537_28541 = G__28546;
i__28538_28542 = G__28547;
continue;
}
} else
{var temp__4092__auto___28548 = cljs.core.seq.call(null,seq__28535_28539);if(temp__4092__auto___28548)
{var seq__28535_28549__$1 = temp__4092__auto___28548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28535_28549__$1))
{var c__4189__auto___28550 = cljs.core.chunk_first.call(null,seq__28535_28549__$1);{
var G__28551 = cljs.core.chunk_rest.call(null,seq__28535_28549__$1);
var G__28552 = c__4189__auto___28550;
var G__28553 = cljs.core.count.call(null,c__4189__auto___28550);
var G__28554 = 0;
seq__28535_28539 = G__28551;
chunk__28536_28540 = G__28552;
count__28537_28541 = G__28553;
i__28538_28542 = G__28554;
continue;
}
} else
{var n_28555 = cljs.core.first.call(null,seq__28535_28549__$1);goog.style.setStyle(n_28555,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28556 = cljs.core.next.call(null,seq__28535_28549__$1);
var G__28557 = null;
var G__28558 = 0;
var G__28559 = 0;
seq__28535_28539 = G__28556;
chunk__28536_28540 = G__28557;
count__28537_28541 = G__28558;
i__28538_28542 = G__28559;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28560){
var content = cljs.core.first(arglist__28560);
arglist__28560 = cljs.core.next(arglist__28560);
var name = cljs.core.first(arglist__28560);
var value = cljs.core.rest(arglist__28560);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28565_28569 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28566_28570 = null;var count__28567_28571 = 0;var i__28568_28572 = 0;while(true){
if((i__28568_28572 < count__28567_28571))
{var n_28573 = cljs.core._nth.call(null,chunk__28566_28570,i__28568_28572);n_28573.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28574 = seq__28565_28569;
var G__28575 = chunk__28566_28570;
var G__28576 = count__28567_28571;
var G__28577 = (i__28568_28572 + 1);
seq__28565_28569 = G__28574;
chunk__28566_28570 = G__28575;
count__28567_28571 = G__28576;
i__28568_28572 = G__28577;
continue;
}
} else
{var temp__4092__auto___28578 = cljs.core.seq.call(null,seq__28565_28569);if(temp__4092__auto___28578)
{var seq__28565_28579__$1 = temp__4092__auto___28578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28565_28579__$1))
{var c__4189__auto___28580 = cljs.core.chunk_first.call(null,seq__28565_28579__$1);{
var G__28581 = cljs.core.chunk_rest.call(null,seq__28565_28579__$1);
var G__28582 = c__4189__auto___28580;
var G__28583 = cljs.core.count.call(null,c__4189__auto___28580);
var G__28584 = 0;
seq__28565_28569 = G__28581;
chunk__28566_28570 = G__28582;
count__28567_28571 = G__28583;
i__28568_28572 = G__28584;
continue;
}
} else
{var n_28585 = cljs.core.first.call(null,seq__28565_28579__$1);n_28585.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28586 = cljs.core.next.call(null,seq__28565_28579__$1);
var G__28587 = null;
var G__28588 = 0;
var G__28589 = 0;
seq__28565_28569 = G__28586;
chunk__28566_28570 = G__28587;
count__28567_28571 = G__28588;
i__28568_28572 = G__28589;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28590){
var content = cljs.core.first(arglist__28590);
arglist__28590 = cljs.core.next(arglist__28590);
var name = cljs.core.first(arglist__28590);
var value = cljs.core.rest(arglist__28590);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28595_28599 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28596_28600 = null;var count__28597_28601 = 0;var i__28598_28602 = 0;while(true){
if((i__28598_28602 < count__28597_28601))
{var n_28603 = cljs.core._nth.call(null,chunk__28596_28600,i__28598_28602);n_28603.removeAttribute(cljs.core.name.call(null,name));
{
var G__28604 = seq__28595_28599;
var G__28605 = chunk__28596_28600;
var G__28606 = count__28597_28601;
var G__28607 = (i__28598_28602 + 1);
seq__28595_28599 = G__28604;
chunk__28596_28600 = G__28605;
count__28597_28601 = G__28606;
i__28598_28602 = G__28607;
continue;
}
} else
{var temp__4092__auto___28608 = cljs.core.seq.call(null,seq__28595_28599);if(temp__4092__auto___28608)
{var seq__28595_28609__$1 = temp__4092__auto___28608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28595_28609__$1))
{var c__4189__auto___28610 = cljs.core.chunk_first.call(null,seq__28595_28609__$1);{
var G__28611 = cljs.core.chunk_rest.call(null,seq__28595_28609__$1);
var G__28612 = c__4189__auto___28610;
var G__28613 = cljs.core.count.call(null,c__4189__auto___28610);
var G__28614 = 0;
seq__28595_28599 = G__28611;
chunk__28596_28600 = G__28612;
count__28597_28601 = G__28613;
i__28598_28602 = G__28614;
continue;
}
} else
{var n_28615 = cljs.core.first.call(null,seq__28595_28609__$1);n_28615.removeAttribute(cljs.core.name.call(null,name));
{
var G__28616 = cljs.core.next.call(null,seq__28595_28609__$1);
var G__28617 = null;
var G__28618 = 0;
var G__28619 = 0;
seq__28595_28599 = G__28616;
chunk__28596_28600 = G__28617;
count__28597_28601 = G__28618;
i__28598_28602 = G__28619;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28621 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28621,0,null);var v = cljs.core.nth.call(null,vec__28621,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28622_SHARP_){var attr = attrs__$1.item(p1__28622_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28629_28635 = cljs.core.seq.call(null,styles);var chunk__28630_28636 = null;var count__28631_28637 = 0;var i__28632_28638 = 0;while(true){
if((i__28632_28638 < count__28631_28637))
{var vec__28633_28639 = cljs.core._nth.call(null,chunk__28630_28636,i__28632_28638);var name_28640 = cljs.core.nth.call(null,vec__28633_28639,0,null);var value_28641 = cljs.core.nth.call(null,vec__28633_28639,1,null);domina.set_style_BANG_.call(null,content,name_28640,value_28641);
{
var G__28642 = seq__28629_28635;
var G__28643 = chunk__28630_28636;
var G__28644 = count__28631_28637;
var G__28645 = (i__28632_28638 + 1);
seq__28629_28635 = G__28642;
chunk__28630_28636 = G__28643;
count__28631_28637 = G__28644;
i__28632_28638 = G__28645;
continue;
}
} else
{var temp__4092__auto___28646 = cljs.core.seq.call(null,seq__28629_28635);if(temp__4092__auto___28646)
{var seq__28629_28647__$1 = temp__4092__auto___28646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28629_28647__$1))
{var c__4189__auto___28648 = cljs.core.chunk_first.call(null,seq__28629_28647__$1);{
var G__28649 = cljs.core.chunk_rest.call(null,seq__28629_28647__$1);
var G__28650 = c__4189__auto___28648;
var G__28651 = cljs.core.count.call(null,c__4189__auto___28648);
var G__28652 = 0;
seq__28629_28635 = G__28649;
chunk__28630_28636 = G__28650;
count__28631_28637 = G__28651;
i__28632_28638 = G__28652;
continue;
}
} else
{var vec__28634_28653 = cljs.core.first.call(null,seq__28629_28647__$1);var name_28654 = cljs.core.nth.call(null,vec__28634_28653,0,null);var value_28655 = cljs.core.nth.call(null,vec__28634_28653,1,null);domina.set_style_BANG_.call(null,content,name_28654,value_28655);
{
var G__28656 = cljs.core.next.call(null,seq__28629_28647__$1);
var G__28657 = null;
var G__28658 = 0;
var G__28659 = 0;
seq__28629_28635 = G__28656;
chunk__28630_28636 = G__28657;
count__28631_28637 = G__28658;
i__28632_28638 = G__28659;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28666_28672 = cljs.core.seq.call(null,attrs);var chunk__28667_28673 = null;var count__28668_28674 = 0;var i__28669_28675 = 0;while(true){
if((i__28669_28675 < count__28668_28674))
{var vec__28670_28676 = cljs.core._nth.call(null,chunk__28667_28673,i__28669_28675);var name_28677 = cljs.core.nth.call(null,vec__28670_28676,0,null);var value_28678 = cljs.core.nth.call(null,vec__28670_28676,1,null);domina.set_attr_BANG_.call(null,content,name_28677,value_28678);
{
var G__28679 = seq__28666_28672;
var G__28680 = chunk__28667_28673;
var G__28681 = count__28668_28674;
var G__28682 = (i__28669_28675 + 1);
seq__28666_28672 = G__28679;
chunk__28667_28673 = G__28680;
count__28668_28674 = G__28681;
i__28669_28675 = G__28682;
continue;
}
} else
{var temp__4092__auto___28683 = cljs.core.seq.call(null,seq__28666_28672);if(temp__4092__auto___28683)
{var seq__28666_28684__$1 = temp__4092__auto___28683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28666_28684__$1))
{var c__4189__auto___28685 = cljs.core.chunk_first.call(null,seq__28666_28684__$1);{
var G__28686 = cljs.core.chunk_rest.call(null,seq__28666_28684__$1);
var G__28687 = c__4189__auto___28685;
var G__28688 = cljs.core.count.call(null,c__4189__auto___28685);
var G__28689 = 0;
seq__28666_28672 = G__28686;
chunk__28667_28673 = G__28687;
count__28668_28674 = G__28688;
i__28669_28675 = G__28689;
continue;
}
} else
{var vec__28671_28690 = cljs.core.first.call(null,seq__28666_28684__$1);var name_28691 = cljs.core.nth.call(null,vec__28671_28690,0,null);var value_28692 = cljs.core.nth.call(null,vec__28671_28690,1,null);domina.set_attr_BANG_.call(null,content,name_28691,value_28692);
{
var G__28693 = cljs.core.next.call(null,seq__28666_28684__$1);
var G__28694 = null;
var G__28695 = 0;
var G__28696 = 0;
seq__28666_28672 = G__28693;
chunk__28667_28673 = G__28694;
count__28668_28674 = G__28695;
i__28669_28675 = G__28696;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28701_28705 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28702_28706 = null;var count__28703_28707 = 0;var i__28704_28708 = 0;while(true){
if((i__28704_28708 < count__28703_28707))
{var node_28709 = cljs.core._nth.call(null,chunk__28702_28706,i__28704_28708);goog.dom.classes.add(node_28709,class$);
{
var G__28710 = seq__28701_28705;
var G__28711 = chunk__28702_28706;
var G__28712 = count__28703_28707;
var G__28713 = (i__28704_28708 + 1);
seq__28701_28705 = G__28710;
chunk__28702_28706 = G__28711;
count__28703_28707 = G__28712;
i__28704_28708 = G__28713;
continue;
}
} else
{var temp__4092__auto___28714 = cljs.core.seq.call(null,seq__28701_28705);if(temp__4092__auto___28714)
{var seq__28701_28715__$1 = temp__4092__auto___28714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28701_28715__$1))
{var c__4189__auto___28716 = cljs.core.chunk_first.call(null,seq__28701_28715__$1);{
var G__28717 = cljs.core.chunk_rest.call(null,seq__28701_28715__$1);
var G__28718 = c__4189__auto___28716;
var G__28719 = cljs.core.count.call(null,c__4189__auto___28716);
var G__28720 = 0;
seq__28701_28705 = G__28717;
chunk__28702_28706 = G__28718;
count__28703_28707 = G__28719;
i__28704_28708 = G__28720;
continue;
}
} else
{var node_28721 = cljs.core.first.call(null,seq__28701_28715__$1);goog.dom.classes.add(node_28721,class$);
{
var G__28722 = cljs.core.next.call(null,seq__28701_28715__$1);
var G__28723 = null;
var G__28724 = 0;
var G__28725 = 0;
seq__28701_28705 = G__28722;
chunk__28702_28706 = G__28723;
count__28703_28707 = G__28724;
i__28704_28708 = G__28725;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28730_28734 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28731_28735 = null;var count__28732_28736 = 0;var i__28733_28737 = 0;while(true){
if((i__28733_28737 < count__28732_28736))
{var node_28738 = cljs.core._nth.call(null,chunk__28731_28735,i__28733_28737);goog.dom.classes.remove(node_28738,class$);
{
var G__28739 = seq__28730_28734;
var G__28740 = chunk__28731_28735;
var G__28741 = count__28732_28736;
var G__28742 = (i__28733_28737 + 1);
seq__28730_28734 = G__28739;
chunk__28731_28735 = G__28740;
count__28732_28736 = G__28741;
i__28733_28737 = G__28742;
continue;
}
} else
{var temp__4092__auto___28743 = cljs.core.seq.call(null,seq__28730_28734);if(temp__4092__auto___28743)
{var seq__28730_28744__$1 = temp__4092__auto___28743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28730_28744__$1))
{var c__4189__auto___28745 = cljs.core.chunk_first.call(null,seq__28730_28744__$1);{
var G__28746 = cljs.core.chunk_rest.call(null,seq__28730_28744__$1);
var G__28747 = c__4189__auto___28745;
var G__28748 = cljs.core.count.call(null,c__4189__auto___28745);
var G__28749 = 0;
seq__28730_28734 = G__28746;
chunk__28731_28735 = G__28747;
count__28732_28736 = G__28748;
i__28733_28737 = G__28749;
continue;
}
} else
{var node_28750 = cljs.core.first.call(null,seq__28730_28744__$1);goog.dom.classes.remove(node_28750,class$);
{
var G__28751 = cljs.core.next.call(null,seq__28730_28744__$1);
var G__28752 = null;
var G__28753 = 0;
var G__28754 = 0;
seq__28730_28734 = G__28751;
chunk__28731_28735 = G__28752;
count__28732_28736 = G__28753;
i__28733_28737 = G__28754;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28759_28763 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28760_28764 = null;var count__28761_28765 = 0;var i__28762_28766 = 0;while(true){
if((i__28762_28766 < count__28761_28765))
{var node_28767 = cljs.core._nth.call(null,chunk__28760_28764,i__28762_28766);goog.dom.classes.toggle(node_28767,class$);
{
var G__28768 = seq__28759_28763;
var G__28769 = chunk__28760_28764;
var G__28770 = count__28761_28765;
var G__28771 = (i__28762_28766 + 1);
seq__28759_28763 = G__28768;
chunk__28760_28764 = G__28769;
count__28761_28765 = G__28770;
i__28762_28766 = G__28771;
continue;
}
} else
{var temp__4092__auto___28772 = cljs.core.seq.call(null,seq__28759_28763);if(temp__4092__auto___28772)
{var seq__28759_28773__$1 = temp__4092__auto___28772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28759_28773__$1))
{var c__4189__auto___28774 = cljs.core.chunk_first.call(null,seq__28759_28773__$1);{
var G__28775 = cljs.core.chunk_rest.call(null,seq__28759_28773__$1);
var G__28776 = c__4189__auto___28774;
var G__28777 = cljs.core.count.call(null,c__4189__auto___28774);
var G__28778 = 0;
seq__28759_28763 = G__28775;
chunk__28760_28764 = G__28776;
count__28761_28765 = G__28777;
i__28762_28766 = G__28778;
continue;
}
} else
{var node_28779 = cljs.core.first.call(null,seq__28759_28773__$1);goog.dom.classes.toggle(node_28779,class$);
{
var G__28780 = cljs.core.next.call(null,seq__28759_28773__$1);
var G__28781 = null;
var G__28782 = 0;
var G__28783 = 0;
seq__28759_28763 = G__28780;
chunk__28760_28764 = G__28781;
count__28761_28765 = G__28782;
i__28762_28766 = G__28783;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28792__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28788_28793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28789_28794 = null;var count__28790_28795 = 0;var i__28791_28796 = 0;while(true){
if((i__28791_28796 < count__28790_28795))
{var node_28797 = cljs.core._nth.call(null,chunk__28789_28794,i__28791_28796);goog.dom.classes.set(node_28797,classes_28792__$1);
{
var G__28798 = seq__28788_28793;
var G__28799 = chunk__28789_28794;
var G__28800 = count__28790_28795;
var G__28801 = (i__28791_28796 + 1);
seq__28788_28793 = G__28798;
chunk__28789_28794 = G__28799;
count__28790_28795 = G__28800;
i__28791_28796 = G__28801;
continue;
}
} else
{var temp__4092__auto___28802 = cljs.core.seq.call(null,seq__28788_28793);if(temp__4092__auto___28802)
{var seq__28788_28803__$1 = temp__4092__auto___28802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28788_28803__$1))
{var c__4189__auto___28804 = cljs.core.chunk_first.call(null,seq__28788_28803__$1);{
var G__28805 = cljs.core.chunk_rest.call(null,seq__28788_28803__$1);
var G__28806 = c__4189__auto___28804;
var G__28807 = cljs.core.count.call(null,c__4189__auto___28804);
var G__28808 = 0;
seq__28788_28793 = G__28805;
chunk__28789_28794 = G__28806;
count__28790_28795 = G__28807;
i__28791_28796 = G__28808;
continue;
}
} else
{var node_28809 = cljs.core.first.call(null,seq__28788_28803__$1);goog.dom.classes.set(node_28809,classes_28792__$1);
{
var G__28810 = cljs.core.next.call(null,seq__28788_28803__$1);
var G__28811 = null;
var G__28812 = 0;
var G__28813 = 0;
seq__28788_28793 = G__28810;
chunk__28789_28794 = G__28811;
count__28790_28795 = G__28812;
i__28791_28796 = G__28813;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28818_28822 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28819_28823 = null;var count__28820_28824 = 0;var i__28821_28825 = 0;while(true){
if((i__28821_28825 < count__28820_28824))
{var node_28826 = cljs.core._nth.call(null,chunk__28819_28823,i__28821_28825);goog.dom.setTextContent(node_28826,value);
{
var G__28827 = seq__28818_28822;
var G__28828 = chunk__28819_28823;
var G__28829 = count__28820_28824;
var G__28830 = (i__28821_28825 + 1);
seq__28818_28822 = G__28827;
chunk__28819_28823 = G__28828;
count__28820_28824 = G__28829;
i__28821_28825 = G__28830;
continue;
}
} else
{var temp__4092__auto___28831 = cljs.core.seq.call(null,seq__28818_28822);if(temp__4092__auto___28831)
{var seq__28818_28832__$1 = temp__4092__auto___28831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28818_28832__$1))
{var c__4189__auto___28833 = cljs.core.chunk_first.call(null,seq__28818_28832__$1);{
var G__28834 = cljs.core.chunk_rest.call(null,seq__28818_28832__$1);
var G__28835 = c__4189__auto___28833;
var G__28836 = cljs.core.count.call(null,c__4189__auto___28833);
var G__28837 = 0;
seq__28818_28822 = G__28834;
chunk__28819_28823 = G__28835;
count__28820_28824 = G__28836;
i__28821_28825 = G__28837;
continue;
}
} else
{var node_28838 = cljs.core.first.call(null,seq__28818_28832__$1);goog.dom.setTextContent(node_28838,value);
{
var G__28839 = cljs.core.next.call(null,seq__28818_28832__$1);
var G__28840 = null;
var G__28841 = 0;
var G__28842 = 0;
seq__28818_28822 = G__28839;
chunk__28819_28823 = G__28840;
count__28820_28824 = G__28841;
i__28821_28825 = G__28842;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28847_28851 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28848_28852 = null;var count__28849_28853 = 0;var i__28850_28854 = 0;while(true){
if((i__28850_28854 < count__28849_28853))
{var node_28855 = cljs.core._nth.call(null,chunk__28848_28852,i__28850_28854);goog.dom.forms.setValue(node_28855,value);
{
var G__28856 = seq__28847_28851;
var G__28857 = chunk__28848_28852;
var G__28858 = count__28849_28853;
var G__28859 = (i__28850_28854 + 1);
seq__28847_28851 = G__28856;
chunk__28848_28852 = G__28857;
count__28849_28853 = G__28858;
i__28850_28854 = G__28859;
continue;
}
} else
{var temp__4092__auto___28860 = cljs.core.seq.call(null,seq__28847_28851);if(temp__4092__auto___28860)
{var seq__28847_28861__$1 = temp__4092__auto___28860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28847_28861__$1))
{var c__4189__auto___28862 = cljs.core.chunk_first.call(null,seq__28847_28861__$1);{
var G__28863 = cljs.core.chunk_rest.call(null,seq__28847_28861__$1);
var G__28864 = c__4189__auto___28862;
var G__28865 = cljs.core.count.call(null,c__4189__auto___28862);
var G__28866 = 0;
seq__28847_28851 = G__28863;
chunk__28848_28852 = G__28864;
count__28849_28853 = G__28865;
i__28850_28854 = G__28866;
continue;
}
} else
{var node_28867 = cljs.core.first.call(null,seq__28847_28861__$1);goog.dom.forms.setValue(node_28867,value);
{
var G__28868 = cljs.core.next.call(null,seq__28847_28861__$1);
var G__28869 = null;
var G__28870 = 0;
var G__28871 = 0;
seq__28847_28851 = G__28868;
chunk__28848_28852 = G__28869;
count__28849_28853 = G__28870;
i__28850_28854 = G__28871;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_28882 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28878_28883 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28879_28884 = null;var count__28880_28885 = 0;var i__28881_28886 = 0;while(true){
if((i__28881_28886 < count__28880_28885))
{var node_28887 = cljs.core._nth.call(null,chunk__28879_28884,i__28881_28886);node_28887.innerHTML = value_28882;
{
var G__28888 = seq__28878_28883;
var G__28889 = chunk__28879_28884;
var G__28890 = count__28880_28885;
var G__28891 = (i__28881_28886 + 1);
seq__28878_28883 = G__28888;
chunk__28879_28884 = G__28889;
count__28880_28885 = G__28890;
i__28881_28886 = G__28891;
continue;
}
} else
{var temp__4092__auto___28892 = cljs.core.seq.call(null,seq__28878_28883);if(temp__4092__auto___28892)
{var seq__28878_28893__$1 = temp__4092__auto___28892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28878_28893__$1))
{var c__4189__auto___28894 = cljs.core.chunk_first.call(null,seq__28878_28893__$1);{
var G__28895 = cljs.core.chunk_rest.call(null,seq__28878_28893__$1);
var G__28896 = c__4189__auto___28894;
var G__28897 = cljs.core.count.call(null,c__4189__auto___28894);
var G__28898 = 0;
seq__28878_28883 = G__28895;
chunk__28879_28884 = G__28896;
count__28880_28885 = G__28897;
i__28881_28886 = G__28898;
continue;
}
} else
{var node_28899 = cljs.core.first.call(null,seq__28878_28893__$1);node_28899.innerHTML = value_28882;
{
var G__28900 = cljs.core.next.call(null,seq__28878_28893__$1);
var G__28901 = null;
var G__28902 = 0;
var G__28903 = 0;
seq__28878_28883 = G__28900;
chunk__28879_28884 = G__28901;
count__28880_28885 = G__28902;
i__28881_28886 = G__28903;
continue;
}
}
} else
{}
}
break;
}
}catch (e28877){if((e28877 instanceof Error))
{var e_28904 = e28877;domina.replace_children_BANG_.call(null,content,value_28882);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28877;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28911_28915 = cljs.core.seq.call(null,children);var chunk__28912_28916 = null;var count__28913_28917 = 0;var i__28914_28918 = 0;while(true){
if((i__28914_28918 < count__28913_28917))
{var child_28919 = cljs.core._nth.call(null,chunk__28912_28916,i__28914_28918);frag.appendChild(child_28919);
{
var G__28920 = seq__28911_28915;
var G__28921 = chunk__28912_28916;
var G__28922 = count__28913_28917;
var G__28923 = (i__28914_28918 + 1);
seq__28911_28915 = G__28920;
chunk__28912_28916 = G__28921;
count__28913_28917 = G__28922;
i__28914_28918 = G__28923;
continue;
}
} else
{var temp__4092__auto___28924 = cljs.core.seq.call(null,seq__28911_28915);if(temp__4092__auto___28924)
{var seq__28911_28925__$1 = temp__4092__auto___28924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28911_28925__$1))
{var c__4189__auto___28926 = cljs.core.chunk_first.call(null,seq__28911_28925__$1);{
var G__28927 = cljs.core.chunk_rest.call(null,seq__28911_28925__$1);
var G__28928 = c__4189__auto___28926;
var G__28929 = cljs.core.count.call(null,c__4189__auto___28926);
var G__28930 = 0;
seq__28911_28915 = G__28927;
chunk__28912_28916 = G__28928;
count__28913_28917 = G__28929;
i__28914_28918 = G__28930;
continue;
}
} else
{var child_28931 = cljs.core.first.call(null,seq__28911_28925__$1);frag.appendChild(child_28931);
{
var G__28932 = cljs.core.next.call(null,seq__28911_28925__$1);
var G__28933 = null;
var G__28934 = 0;
var G__28935 = 0;
seq__28911_28915 = G__28932;
chunk__28912_28916 = G__28933;
count__28913_28917 = G__28934;
i__28914_28918 = G__28935;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28905_SHARP_,p2__28906_SHARP_){return f.call(null,p1__28905_SHARP_,p2__28906_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__28937 = list_thing;if(G__28937)
{var bit__4091__auto__ = (G__28937.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28937.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28937.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28937);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28937);
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
{if((function (){var G__28938 = content;if(G__28938)
{var bit__4091__auto__ = (G__28938.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28938.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28938.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28938);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28938);
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
{if((function (){var G__28939 = content;if(G__28939)
{var bit__4091__auto__ = (G__28939.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28939.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28939);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28939);
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