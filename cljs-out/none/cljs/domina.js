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
var opt_wrapper_28538 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28539 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28539,table_section_wrapper_28539,opt_wrapper_28538,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28540,table_section_wrapper_28539,cell_wrapper_28540,opt_wrapper_28538,table_section_wrapper_28539,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28539]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28545 = cljs.core.seq.call(null,tbody);var chunk__28546 = null;var count__28547 = 0;var i__28548 = 0;while(true){
if((i__28548 < count__28547))
{var child = cljs.core._nth.call(null,chunk__28546,i__28548);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28549 = seq__28545;
var G__28550 = chunk__28546;
var G__28551 = count__28547;
var G__28552 = (i__28548 + 1);
seq__28545 = G__28549;
chunk__28546 = G__28550;
count__28547 = G__28551;
i__28548 = G__28552;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28545);if(temp__4092__auto__)
{var seq__28545__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28545__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28545__$1);{
var G__28553 = cljs.core.chunk_rest.call(null,seq__28545__$1);
var G__28554 = c__4189__auto__;
var G__28555 = cljs.core.count.call(null,c__4189__auto__);
var G__28556 = 0;
seq__28545 = G__28553;
chunk__28546 = G__28554;
count__28547 = G__28555;
i__28548 = G__28556;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28545__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28557 = cljs.core.next.call(null,seq__28545__$1);
var G__28558 = null;
var G__28559 = 0;
var G__28560 = 0;
seq__28545 = G__28557;
chunk__28546 = G__28558;
count__28547 = G__28559;
i__28548 = G__28560;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28562 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28562,0,null);var start_wrap = cljs.core.nth.call(null,vec__28562,1,null);var end_wrap = cljs.core.nth.call(null,vec__28562,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28563 = wrapper.lastChild;
var G__28564 = (level - 1);
wrapper = G__28563;
level = G__28564;
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
domina.DomContent = (function (){var obj28566 = {};return obj28566;
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
log_debug.cljs$lang$applyTo = (function (arglist__28567){
var mesg = cljs.core.seq(arglist__28567);
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
log.cljs$lang$applyTo = (function (arglist__28568){
var mesg = cljs.core.seq(arglist__28568);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28569){
var contents = cljs.core.seq(arglist__28569);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28570_SHARP_){return p1__28570_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28571_SHARP_,p2__28572_SHARP_){return goog.dom.insertChildAt(p1__28571_SHARP_,p2__28572_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28574_SHARP_,p2__28573_SHARP_){return goog.dom.insertSiblingBefore(p2__28573_SHARP_,p1__28574_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28576_SHARP_,p2__28575_SHARP_){return goog.dom.insertSiblingAfter(p2__28575_SHARP_,p1__28576_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28578_SHARP_,p2__28577_SHARP_){return goog.dom.replaceNode(p2__28577_SHARP_,p1__28578_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28583_28587 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28584_28588 = null;var count__28585_28589 = 0;var i__28586_28590 = 0;while(true){
if((i__28586_28590 < count__28585_28589))
{var n_28591 = cljs.core._nth.call(null,chunk__28584_28588,i__28586_28590);goog.style.setStyle(n_28591,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28592 = seq__28583_28587;
var G__28593 = chunk__28584_28588;
var G__28594 = count__28585_28589;
var G__28595 = (i__28586_28590 + 1);
seq__28583_28587 = G__28592;
chunk__28584_28588 = G__28593;
count__28585_28589 = G__28594;
i__28586_28590 = G__28595;
continue;
}
} else
{var temp__4092__auto___28596 = cljs.core.seq.call(null,seq__28583_28587);if(temp__4092__auto___28596)
{var seq__28583_28597__$1 = temp__4092__auto___28596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28583_28597__$1))
{var c__4189__auto___28598 = cljs.core.chunk_first.call(null,seq__28583_28597__$1);{
var G__28599 = cljs.core.chunk_rest.call(null,seq__28583_28597__$1);
var G__28600 = c__4189__auto___28598;
var G__28601 = cljs.core.count.call(null,c__4189__auto___28598);
var G__28602 = 0;
seq__28583_28587 = G__28599;
chunk__28584_28588 = G__28600;
count__28585_28589 = G__28601;
i__28586_28590 = G__28602;
continue;
}
} else
{var n_28603 = cljs.core.first.call(null,seq__28583_28597__$1);goog.style.setStyle(n_28603,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28604 = cljs.core.next.call(null,seq__28583_28597__$1);
var G__28605 = null;
var G__28606 = 0;
var G__28607 = 0;
seq__28583_28587 = G__28604;
chunk__28584_28588 = G__28605;
count__28585_28589 = G__28606;
i__28586_28590 = G__28607;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28608){
var content = cljs.core.first(arglist__28608);
arglist__28608 = cljs.core.next(arglist__28608);
var name = cljs.core.first(arglist__28608);
var value = cljs.core.rest(arglist__28608);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28613_28617 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28614_28618 = null;var count__28615_28619 = 0;var i__28616_28620 = 0;while(true){
if((i__28616_28620 < count__28615_28619))
{var n_28621 = cljs.core._nth.call(null,chunk__28614_28618,i__28616_28620);n_28621.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28622 = seq__28613_28617;
var G__28623 = chunk__28614_28618;
var G__28624 = count__28615_28619;
var G__28625 = (i__28616_28620 + 1);
seq__28613_28617 = G__28622;
chunk__28614_28618 = G__28623;
count__28615_28619 = G__28624;
i__28616_28620 = G__28625;
continue;
}
} else
{var temp__4092__auto___28626 = cljs.core.seq.call(null,seq__28613_28617);if(temp__4092__auto___28626)
{var seq__28613_28627__$1 = temp__4092__auto___28626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28613_28627__$1))
{var c__4189__auto___28628 = cljs.core.chunk_first.call(null,seq__28613_28627__$1);{
var G__28629 = cljs.core.chunk_rest.call(null,seq__28613_28627__$1);
var G__28630 = c__4189__auto___28628;
var G__28631 = cljs.core.count.call(null,c__4189__auto___28628);
var G__28632 = 0;
seq__28613_28617 = G__28629;
chunk__28614_28618 = G__28630;
count__28615_28619 = G__28631;
i__28616_28620 = G__28632;
continue;
}
} else
{var n_28633 = cljs.core.first.call(null,seq__28613_28627__$1);n_28633.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28634 = cljs.core.next.call(null,seq__28613_28627__$1);
var G__28635 = null;
var G__28636 = 0;
var G__28637 = 0;
seq__28613_28617 = G__28634;
chunk__28614_28618 = G__28635;
count__28615_28619 = G__28636;
i__28616_28620 = G__28637;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28638){
var content = cljs.core.first(arglist__28638);
arglist__28638 = cljs.core.next(arglist__28638);
var name = cljs.core.first(arglist__28638);
var value = cljs.core.rest(arglist__28638);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28643_28647 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28644_28648 = null;var count__28645_28649 = 0;var i__28646_28650 = 0;while(true){
if((i__28646_28650 < count__28645_28649))
{var n_28651 = cljs.core._nth.call(null,chunk__28644_28648,i__28646_28650);n_28651.removeAttribute(cljs.core.name.call(null,name));
{
var G__28652 = seq__28643_28647;
var G__28653 = chunk__28644_28648;
var G__28654 = count__28645_28649;
var G__28655 = (i__28646_28650 + 1);
seq__28643_28647 = G__28652;
chunk__28644_28648 = G__28653;
count__28645_28649 = G__28654;
i__28646_28650 = G__28655;
continue;
}
} else
{var temp__4092__auto___28656 = cljs.core.seq.call(null,seq__28643_28647);if(temp__4092__auto___28656)
{var seq__28643_28657__$1 = temp__4092__auto___28656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28643_28657__$1))
{var c__4189__auto___28658 = cljs.core.chunk_first.call(null,seq__28643_28657__$1);{
var G__28659 = cljs.core.chunk_rest.call(null,seq__28643_28657__$1);
var G__28660 = c__4189__auto___28658;
var G__28661 = cljs.core.count.call(null,c__4189__auto___28658);
var G__28662 = 0;
seq__28643_28647 = G__28659;
chunk__28644_28648 = G__28660;
count__28645_28649 = G__28661;
i__28646_28650 = G__28662;
continue;
}
} else
{var n_28663 = cljs.core.first.call(null,seq__28643_28657__$1);n_28663.removeAttribute(cljs.core.name.call(null,name));
{
var G__28664 = cljs.core.next.call(null,seq__28643_28657__$1);
var G__28665 = null;
var G__28666 = 0;
var G__28667 = 0;
seq__28643_28647 = G__28664;
chunk__28644_28648 = G__28665;
count__28645_28649 = G__28666;
i__28646_28650 = G__28667;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28669 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28669,0,null);var v = cljs.core.nth.call(null,vec__28669,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28670_SHARP_){var attr = attrs__$1.item(p1__28670_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28677_28683 = cljs.core.seq.call(null,styles);var chunk__28678_28684 = null;var count__28679_28685 = 0;var i__28680_28686 = 0;while(true){
if((i__28680_28686 < count__28679_28685))
{var vec__28681_28687 = cljs.core._nth.call(null,chunk__28678_28684,i__28680_28686);var name_28688 = cljs.core.nth.call(null,vec__28681_28687,0,null);var value_28689 = cljs.core.nth.call(null,vec__28681_28687,1,null);domina.set_style_BANG_.call(null,content,name_28688,value_28689);
{
var G__28690 = seq__28677_28683;
var G__28691 = chunk__28678_28684;
var G__28692 = count__28679_28685;
var G__28693 = (i__28680_28686 + 1);
seq__28677_28683 = G__28690;
chunk__28678_28684 = G__28691;
count__28679_28685 = G__28692;
i__28680_28686 = G__28693;
continue;
}
} else
{var temp__4092__auto___28694 = cljs.core.seq.call(null,seq__28677_28683);if(temp__4092__auto___28694)
{var seq__28677_28695__$1 = temp__4092__auto___28694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28677_28695__$1))
{var c__4189__auto___28696 = cljs.core.chunk_first.call(null,seq__28677_28695__$1);{
var G__28697 = cljs.core.chunk_rest.call(null,seq__28677_28695__$1);
var G__28698 = c__4189__auto___28696;
var G__28699 = cljs.core.count.call(null,c__4189__auto___28696);
var G__28700 = 0;
seq__28677_28683 = G__28697;
chunk__28678_28684 = G__28698;
count__28679_28685 = G__28699;
i__28680_28686 = G__28700;
continue;
}
} else
{var vec__28682_28701 = cljs.core.first.call(null,seq__28677_28695__$1);var name_28702 = cljs.core.nth.call(null,vec__28682_28701,0,null);var value_28703 = cljs.core.nth.call(null,vec__28682_28701,1,null);domina.set_style_BANG_.call(null,content,name_28702,value_28703);
{
var G__28704 = cljs.core.next.call(null,seq__28677_28695__$1);
var G__28705 = null;
var G__28706 = 0;
var G__28707 = 0;
seq__28677_28683 = G__28704;
chunk__28678_28684 = G__28705;
count__28679_28685 = G__28706;
i__28680_28686 = G__28707;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28714_28720 = cljs.core.seq.call(null,attrs);var chunk__28715_28721 = null;var count__28716_28722 = 0;var i__28717_28723 = 0;while(true){
if((i__28717_28723 < count__28716_28722))
{var vec__28718_28724 = cljs.core._nth.call(null,chunk__28715_28721,i__28717_28723);var name_28725 = cljs.core.nth.call(null,vec__28718_28724,0,null);var value_28726 = cljs.core.nth.call(null,vec__28718_28724,1,null);domina.set_attr_BANG_.call(null,content,name_28725,value_28726);
{
var G__28727 = seq__28714_28720;
var G__28728 = chunk__28715_28721;
var G__28729 = count__28716_28722;
var G__28730 = (i__28717_28723 + 1);
seq__28714_28720 = G__28727;
chunk__28715_28721 = G__28728;
count__28716_28722 = G__28729;
i__28717_28723 = G__28730;
continue;
}
} else
{var temp__4092__auto___28731 = cljs.core.seq.call(null,seq__28714_28720);if(temp__4092__auto___28731)
{var seq__28714_28732__$1 = temp__4092__auto___28731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28714_28732__$1))
{var c__4189__auto___28733 = cljs.core.chunk_first.call(null,seq__28714_28732__$1);{
var G__28734 = cljs.core.chunk_rest.call(null,seq__28714_28732__$1);
var G__28735 = c__4189__auto___28733;
var G__28736 = cljs.core.count.call(null,c__4189__auto___28733);
var G__28737 = 0;
seq__28714_28720 = G__28734;
chunk__28715_28721 = G__28735;
count__28716_28722 = G__28736;
i__28717_28723 = G__28737;
continue;
}
} else
{var vec__28719_28738 = cljs.core.first.call(null,seq__28714_28732__$1);var name_28739 = cljs.core.nth.call(null,vec__28719_28738,0,null);var value_28740 = cljs.core.nth.call(null,vec__28719_28738,1,null);domina.set_attr_BANG_.call(null,content,name_28739,value_28740);
{
var G__28741 = cljs.core.next.call(null,seq__28714_28732__$1);
var G__28742 = null;
var G__28743 = 0;
var G__28744 = 0;
seq__28714_28720 = G__28741;
chunk__28715_28721 = G__28742;
count__28716_28722 = G__28743;
i__28717_28723 = G__28744;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28749_28753 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28750_28754 = null;var count__28751_28755 = 0;var i__28752_28756 = 0;while(true){
if((i__28752_28756 < count__28751_28755))
{var node_28757 = cljs.core._nth.call(null,chunk__28750_28754,i__28752_28756);goog.dom.classes.add(node_28757,class$);
{
var G__28758 = seq__28749_28753;
var G__28759 = chunk__28750_28754;
var G__28760 = count__28751_28755;
var G__28761 = (i__28752_28756 + 1);
seq__28749_28753 = G__28758;
chunk__28750_28754 = G__28759;
count__28751_28755 = G__28760;
i__28752_28756 = G__28761;
continue;
}
} else
{var temp__4092__auto___28762 = cljs.core.seq.call(null,seq__28749_28753);if(temp__4092__auto___28762)
{var seq__28749_28763__$1 = temp__4092__auto___28762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28749_28763__$1))
{var c__4189__auto___28764 = cljs.core.chunk_first.call(null,seq__28749_28763__$1);{
var G__28765 = cljs.core.chunk_rest.call(null,seq__28749_28763__$1);
var G__28766 = c__4189__auto___28764;
var G__28767 = cljs.core.count.call(null,c__4189__auto___28764);
var G__28768 = 0;
seq__28749_28753 = G__28765;
chunk__28750_28754 = G__28766;
count__28751_28755 = G__28767;
i__28752_28756 = G__28768;
continue;
}
} else
{var node_28769 = cljs.core.first.call(null,seq__28749_28763__$1);goog.dom.classes.add(node_28769,class$);
{
var G__28770 = cljs.core.next.call(null,seq__28749_28763__$1);
var G__28771 = null;
var G__28772 = 0;
var G__28773 = 0;
seq__28749_28753 = G__28770;
chunk__28750_28754 = G__28771;
count__28751_28755 = G__28772;
i__28752_28756 = G__28773;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28778_28782 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28779_28783 = null;var count__28780_28784 = 0;var i__28781_28785 = 0;while(true){
if((i__28781_28785 < count__28780_28784))
{var node_28786 = cljs.core._nth.call(null,chunk__28779_28783,i__28781_28785);goog.dom.classes.remove(node_28786,class$);
{
var G__28787 = seq__28778_28782;
var G__28788 = chunk__28779_28783;
var G__28789 = count__28780_28784;
var G__28790 = (i__28781_28785 + 1);
seq__28778_28782 = G__28787;
chunk__28779_28783 = G__28788;
count__28780_28784 = G__28789;
i__28781_28785 = G__28790;
continue;
}
} else
{var temp__4092__auto___28791 = cljs.core.seq.call(null,seq__28778_28782);if(temp__4092__auto___28791)
{var seq__28778_28792__$1 = temp__4092__auto___28791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28778_28792__$1))
{var c__4189__auto___28793 = cljs.core.chunk_first.call(null,seq__28778_28792__$1);{
var G__28794 = cljs.core.chunk_rest.call(null,seq__28778_28792__$1);
var G__28795 = c__4189__auto___28793;
var G__28796 = cljs.core.count.call(null,c__4189__auto___28793);
var G__28797 = 0;
seq__28778_28782 = G__28794;
chunk__28779_28783 = G__28795;
count__28780_28784 = G__28796;
i__28781_28785 = G__28797;
continue;
}
} else
{var node_28798 = cljs.core.first.call(null,seq__28778_28792__$1);goog.dom.classes.remove(node_28798,class$);
{
var G__28799 = cljs.core.next.call(null,seq__28778_28792__$1);
var G__28800 = null;
var G__28801 = 0;
var G__28802 = 0;
seq__28778_28782 = G__28799;
chunk__28779_28783 = G__28800;
count__28780_28784 = G__28801;
i__28781_28785 = G__28802;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28807_28811 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28808_28812 = null;var count__28809_28813 = 0;var i__28810_28814 = 0;while(true){
if((i__28810_28814 < count__28809_28813))
{var node_28815 = cljs.core._nth.call(null,chunk__28808_28812,i__28810_28814);goog.dom.classes.toggle(node_28815,class$);
{
var G__28816 = seq__28807_28811;
var G__28817 = chunk__28808_28812;
var G__28818 = count__28809_28813;
var G__28819 = (i__28810_28814 + 1);
seq__28807_28811 = G__28816;
chunk__28808_28812 = G__28817;
count__28809_28813 = G__28818;
i__28810_28814 = G__28819;
continue;
}
} else
{var temp__4092__auto___28820 = cljs.core.seq.call(null,seq__28807_28811);if(temp__4092__auto___28820)
{var seq__28807_28821__$1 = temp__4092__auto___28820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28807_28821__$1))
{var c__4189__auto___28822 = cljs.core.chunk_first.call(null,seq__28807_28821__$1);{
var G__28823 = cljs.core.chunk_rest.call(null,seq__28807_28821__$1);
var G__28824 = c__4189__auto___28822;
var G__28825 = cljs.core.count.call(null,c__4189__auto___28822);
var G__28826 = 0;
seq__28807_28811 = G__28823;
chunk__28808_28812 = G__28824;
count__28809_28813 = G__28825;
i__28810_28814 = G__28826;
continue;
}
} else
{var node_28827 = cljs.core.first.call(null,seq__28807_28821__$1);goog.dom.classes.toggle(node_28827,class$);
{
var G__28828 = cljs.core.next.call(null,seq__28807_28821__$1);
var G__28829 = null;
var G__28830 = 0;
var G__28831 = 0;
seq__28807_28811 = G__28828;
chunk__28808_28812 = G__28829;
count__28809_28813 = G__28830;
i__28810_28814 = G__28831;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28840__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28836_28841 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28837_28842 = null;var count__28838_28843 = 0;var i__28839_28844 = 0;while(true){
if((i__28839_28844 < count__28838_28843))
{var node_28845 = cljs.core._nth.call(null,chunk__28837_28842,i__28839_28844);goog.dom.classes.set(node_28845,classes_28840__$1);
{
var G__28846 = seq__28836_28841;
var G__28847 = chunk__28837_28842;
var G__28848 = count__28838_28843;
var G__28849 = (i__28839_28844 + 1);
seq__28836_28841 = G__28846;
chunk__28837_28842 = G__28847;
count__28838_28843 = G__28848;
i__28839_28844 = G__28849;
continue;
}
} else
{var temp__4092__auto___28850 = cljs.core.seq.call(null,seq__28836_28841);if(temp__4092__auto___28850)
{var seq__28836_28851__$1 = temp__4092__auto___28850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28836_28851__$1))
{var c__4189__auto___28852 = cljs.core.chunk_first.call(null,seq__28836_28851__$1);{
var G__28853 = cljs.core.chunk_rest.call(null,seq__28836_28851__$1);
var G__28854 = c__4189__auto___28852;
var G__28855 = cljs.core.count.call(null,c__4189__auto___28852);
var G__28856 = 0;
seq__28836_28841 = G__28853;
chunk__28837_28842 = G__28854;
count__28838_28843 = G__28855;
i__28839_28844 = G__28856;
continue;
}
} else
{var node_28857 = cljs.core.first.call(null,seq__28836_28851__$1);goog.dom.classes.set(node_28857,classes_28840__$1);
{
var G__28858 = cljs.core.next.call(null,seq__28836_28851__$1);
var G__28859 = null;
var G__28860 = 0;
var G__28861 = 0;
seq__28836_28841 = G__28858;
chunk__28837_28842 = G__28859;
count__28838_28843 = G__28860;
i__28839_28844 = G__28861;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28866_28870 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28867_28871 = null;var count__28868_28872 = 0;var i__28869_28873 = 0;while(true){
if((i__28869_28873 < count__28868_28872))
{var node_28874 = cljs.core._nth.call(null,chunk__28867_28871,i__28869_28873);goog.dom.setTextContent(node_28874,value);
{
var G__28875 = seq__28866_28870;
var G__28876 = chunk__28867_28871;
var G__28877 = count__28868_28872;
var G__28878 = (i__28869_28873 + 1);
seq__28866_28870 = G__28875;
chunk__28867_28871 = G__28876;
count__28868_28872 = G__28877;
i__28869_28873 = G__28878;
continue;
}
} else
{var temp__4092__auto___28879 = cljs.core.seq.call(null,seq__28866_28870);if(temp__4092__auto___28879)
{var seq__28866_28880__$1 = temp__4092__auto___28879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28866_28880__$1))
{var c__4189__auto___28881 = cljs.core.chunk_first.call(null,seq__28866_28880__$1);{
var G__28882 = cljs.core.chunk_rest.call(null,seq__28866_28880__$1);
var G__28883 = c__4189__auto___28881;
var G__28884 = cljs.core.count.call(null,c__4189__auto___28881);
var G__28885 = 0;
seq__28866_28870 = G__28882;
chunk__28867_28871 = G__28883;
count__28868_28872 = G__28884;
i__28869_28873 = G__28885;
continue;
}
} else
{var node_28886 = cljs.core.first.call(null,seq__28866_28880__$1);goog.dom.setTextContent(node_28886,value);
{
var G__28887 = cljs.core.next.call(null,seq__28866_28880__$1);
var G__28888 = null;
var G__28889 = 0;
var G__28890 = 0;
seq__28866_28870 = G__28887;
chunk__28867_28871 = G__28888;
count__28868_28872 = G__28889;
i__28869_28873 = G__28890;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28895_28899 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28896_28900 = null;var count__28897_28901 = 0;var i__28898_28902 = 0;while(true){
if((i__28898_28902 < count__28897_28901))
{var node_28903 = cljs.core._nth.call(null,chunk__28896_28900,i__28898_28902);goog.dom.forms.setValue(node_28903,value);
{
var G__28904 = seq__28895_28899;
var G__28905 = chunk__28896_28900;
var G__28906 = count__28897_28901;
var G__28907 = (i__28898_28902 + 1);
seq__28895_28899 = G__28904;
chunk__28896_28900 = G__28905;
count__28897_28901 = G__28906;
i__28898_28902 = G__28907;
continue;
}
} else
{var temp__4092__auto___28908 = cljs.core.seq.call(null,seq__28895_28899);if(temp__4092__auto___28908)
{var seq__28895_28909__$1 = temp__4092__auto___28908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28895_28909__$1))
{var c__4189__auto___28910 = cljs.core.chunk_first.call(null,seq__28895_28909__$1);{
var G__28911 = cljs.core.chunk_rest.call(null,seq__28895_28909__$1);
var G__28912 = c__4189__auto___28910;
var G__28913 = cljs.core.count.call(null,c__4189__auto___28910);
var G__28914 = 0;
seq__28895_28899 = G__28911;
chunk__28896_28900 = G__28912;
count__28897_28901 = G__28913;
i__28898_28902 = G__28914;
continue;
}
} else
{var node_28915 = cljs.core.first.call(null,seq__28895_28909__$1);goog.dom.forms.setValue(node_28915,value);
{
var G__28916 = cljs.core.next.call(null,seq__28895_28909__$1);
var G__28917 = null;
var G__28918 = 0;
var G__28919 = 0;
seq__28895_28899 = G__28916;
chunk__28896_28900 = G__28917;
count__28897_28901 = G__28918;
i__28898_28902 = G__28919;
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
{var value_28930 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28926_28931 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28927_28932 = null;var count__28928_28933 = 0;var i__28929_28934 = 0;while(true){
if((i__28929_28934 < count__28928_28933))
{var node_28935 = cljs.core._nth.call(null,chunk__28927_28932,i__28929_28934);node_28935.innerHTML = value_28930;
{
var G__28936 = seq__28926_28931;
var G__28937 = chunk__28927_28932;
var G__28938 = count__28928_28933;
var G__28939 = (i__28929_28934 + 1);
seq__28926_28931 = G__28936;
chunk__28927_28932 = G__28937;
count__28928_28933 = G__28938;
i__28929_28934 = G__28939;
continue;
}
} else
{var temp__4092__auto___28940 = cljs.core.seq.call(null,seq__28926_28931);if(temp__4092__auto___28940)
{var seq__28926_28941__$1 = temp__4092__auto___28940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28926_28941__$1))
{var c__4189__auto___28942 = cljs.core.chunk_first.call(null,seq__28926_28941__$1);{
var G__28943 = cljs.core.chunk_rest.call(null,seq__28926_28941__$1);
var G__28944 = c__4189__auto___28942;
var G__28945 = cljs.core.count.call(null,c__4189__auto___28942);
var G__28946 = 0;
seq__28926_28931 = G__28943;
chunk__28927_28932 = G__28944;
count__28928_28933 = G__28945;
i__28929_28934 = G__28946;
continue;
}
} else
{var node_28947 = cljs.core.first.call(null,seq__28926_28941__$1);node_28947.innerHTML = value_28930;
{
var G__28948 = cljs.core.next.call(null,seq__28926_28941__$1);
var G__28949 = null;
var G__28950 = 0;
var G__28951 = 0;
seq__28926_28931 = G__28948;
chunk__28927_28932 = G__28949;
count__28928_28933 = G__28950;
i__28929_28934 = G__28951;
continue;
}
}
} else
{}
}
break;
}
}catch (e28925){if((e28925 instanceof Error))
{var e_28952 = e28925;domina.replace_children_BANG_.call(null,content,value_28930);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28925;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28959_28963 = cljs.core.seq.call(null,children);var chunk__28960_28964 = null;var count__28961_28965 = 0;var i__28962_28966 = 0;while(true){
if((i__28962_28966 < count__28961_28965))
{var child_28967 = cljs.core._nth.call(null,chunk__28960_28964,i__28962_28966);frag.appendChild(child_28967);
{
var G__28968 = seq__28959_28963;
var G__28969 = chunk__28960_28964;
var G__28970 = count__28961_28965;
var G__28971 = (i__28962_28966 + 1);
seq__28959_28963 = G__28968;
chunk__28960_28964 = G__28969;
count__28961_28965 = G__28970;
i__28962_28966 = G__28971;
continue;
}
} else
{var temp__4092__auto___28972 = cljs.core.seq.call(null,seq__28959_28963);if(temp__4092__auto___28972)
{var seq__28959_28973__$1 = temp__4092__auto___28972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28959_28973__$1))
{var c__4189__auto___28974 = cljs.core.chunk_first.call(null,seq__28959_28973__$1);{
var G__28975 = cljs.core.chunk_rest.call(null,seq__28959_28973__$1);
var G__28976 = c__4189__auto___28974;
var G__28977 = cljs.core.count.call(null,c__4189__auto___28974);
var G__28978 = 0;
seq__28959_28963 = G__28975;
chunk__28960_28964 = G__28976;
count__28961_28965 = G__28977;
i__28962_28966 = G__28978;
continue;
}
} else
{var child_28979 = cljs.core.first.call(null,seq__28959_28973__$1);frag.appendChild(child_28979);
{
var G__28980 = cljs.core.next.call(null,seq__28959_28973__$1);
var G__28981 = null;
var G__28982 = 0;
var G__28983 = 0;
seq__28959_28963 = G__28980;
chunk__28960_28964 = G__28981;
count__28961_28965 = G__28982;
i__28962_28966 = G__28983;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28953_SHARP_,p2__28954_SHARP_){return f.call(null,p1__28953_SHARP_,p2__28954_SHARP_);
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
{if((function (){var G__28985 = list_thing;if(G__28985)
{var bit__4091__auto__ = (G__28985.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28985.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28985.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28985);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28985);
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
{if((function (){var G__28986 = content;if(G__28986)
{var bit__4091__auto__ = (G__28986.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28986.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28986.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28986);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28986);
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
{if((function (){var G__28987 = content;if(G__28987)
{var bit__4091__auto__ = (G__28987.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28987.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28987.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28987);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28987);
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