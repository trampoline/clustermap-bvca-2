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
var opt_wrapper_37954 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37955 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37956 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37955,table_section_wrapper_37955,opt_wrapper_37954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37956,table_section_wrapper_37955,cell_wrapper_37956,opt_wrapper_37954,table_section_wrapper_37955,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37955]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37961 = cljs.core.seq.call(null,tbody);var chunk__37962 = null;var count__37963 = 0;var i__37964 = 0;while(true){
if((i__37964 < count__37963))
{var child = cljs.core._nth.call(null,chunk__37962,i__37964);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37965 = seq__37961;
var G__37966 = chunk__37962;
var G__37967 = count__37963;
var G__37968 = (i__37964 + 1);
seq__37961 = G__37965;
chunk__37962 = G__37966;
count__37963 = G__37967;
i__37964 = G__37968;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37961);if(temp__4092__auto__)
{var seq__37961__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37961__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37961__$1);{
var G__37969 = cljs.core.chunk_rest.call(null,seq__37961__$1);
var G__37970 = c__4148__auto__;
var G__37971 = cljs.core.count.call(null,c__4148__auto__);
var G__37972 = 0;
seq__37961 = G__37969;
chunk__37962 = G__37970;
count__37963 = G__37971;
i__37964 = G__37972;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37961__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37973 = cljs.core.next.call(null,seq__37961__$1);
var G__37974 = null;
var G__37975 = 0;
var G__37976 = 0;
seq__37961 = G__37973;
chunk__37962 = G__37974;
count__37963 = G__37975;
i__37964 = G__37976;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37978 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37978,0,null);var start_wrap = cljs.core.nth.call(null,vec__37978,1,null);var end_wrap = cljs.core.nth.call(null,vec__37978,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37979 = wrapper.lastChild;
var G__37980 = (level - 1);
wrapper = G__37979;
level = G__37980;
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
domina.DomContent = (function (){var obj37982 = {};return obj37982;
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
log_debug.cljs$lang$applyTo = (function (arglist__37983){
var mesg = cljs.core.seq(arglist__37983);
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
log.cljs$lang$applyTo = (function (arglist__37984){
var mesg = cljs.core.seq(arglist__37984);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37985){
var contents = cljs.core.seq(arglist__37985);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37986_SHARP_){return p1__37986_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37987_SHARP_,p2__37988_SHARP_){return goog.dom.insertChildAt(p1__37987_SHARP_,p2__37988_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37990_SHARP_,p2__37989_SHARP_){return goog.dom.insertSiblingBefore(p2__37989_SHARP_,p1__37990_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37992_SHARP_,p2__37991_SHARP_){return goog.dom.insertSiblingAfter(p2__37991_SHARP_,p1__37992_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37994_SHARP_,p2__37993_SHARP_){return goog.dom.replaceNode(p2__37993_SHARP_,p1__37994_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37999_38003 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38000_38004 = null;var count__38001_38005 = 0;var i__38002_38006 = 0;while(true){
if((i__38002_38006 < count__38001_38005))
{var n_38007 = cljs.core._nth.call(null,chunk__38000_38004,i__38002_38006);goog.style.setStyle(n_38007,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38008 = seq__37999_38003;
var G__38009 = chunk__38000_38004;
var G__38010 = count__38001_38005;
var G__38011 = (i__38002_38006 + 1);
seq__37999_38003 = G__38008;
chunk__38000_38004 = G__38009;
count__38001_38005 = G__38010;
i__38002_38006 = G__38011;
continue;
}
} else
{var temp__4092__auto___38012 = cljs.core.seq.call(null,seq__37999_38003);if(temp__4092__auto___38012)
{var seq__37999_38013__$1 = temp__4092__auto___38012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37999_38013__$1))
{var c__4148__auto___38014 = cljs.core.chunk_first.call(null,seq__37999_38013__$1);{
var G__38015 = cljs.core.chunk_rest.call(null,seq__37999_38013__$1);
var G__38016 = c__4148__auto___38014;
var G__38017 = cljs.core.count.call(null,c__4148__auto___38014);
var G__38018 = 0;
seq__37999_38003 = G__38015;
chunk__38000_38004 = G__38016;
count__38001_38005 = G__38017;
i__38002_38006 = G__38018;
continue;
}
} else
{var n_38019 = cljs.core.first.call(null,seq__37999_38013__$1);goog.style.setStyle(n_38019,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38020 = cljs.core.next.call(null,seq__37999_38013__$1);
var G__38021 = null;
var G__38022 = 0;
var G__38023 = 0;
seq__37999_38003 = G__38020;
chunk__38000_38004 = G__38021;
count__38001_38005 = G__38022;
i__38002_38006 = G__38023;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38024){
var content = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var name = cljs.core.first(arglist__38024);
var value = cljs.core.rest(arglist__38024);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38029_38033 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38030_38034 = null;var count__38031_38035 = 0;var i__38032_38036 = 0;while(true){
if((i__38032_38036 < count__38031_38035))
{var n_38037 = cljs.core._nth.call(null,chunk__38030_38034,i__38032_38036);n_38037.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38038 = seq__38029_38033;
var G__38039 = chunk__38030_38034;
var G__38040 = count__38031_38035;
var G__38041 = (i__38032_38036 + 1);
seq__38029_38033 = G__38038;
chunk__38030_38034 = G__38039;
count__38031_38035 = G__38040;
i__38032_38036 = G__38041;
continue;
}
} else
{var temp__4092__auto___38042 = cljs.core.seq.call(null,seq__38029_38033);if(temp__4092__auto___38042)
{var seq__38029_38043__$1 = temp__4092__auto___38042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38029_38043__$1))
{var c__4148__auto___38044 = cljs.core.chunk_first.call(null,seq__38029_38043__$1);{
var G__38045 = cljs.core.chunk_rest.call(null,seq__38029_38043__$1);
var G__38046 = c__4148__auto___38044;
var G__38047 = cljs.core.count.call(null,c__4148__auto___38044);
var G__38048 = 0;
seq__38029_38033 = G__38045;
chunk__38030_38034 = G__38046;
count__38031_38035 = G__38047;
i__38032_38036 = G__38048;
continue;
}
} else
{var n_38049 = cljs.core.first.call(null,seq__38029_38043__$1);n_38049.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38050 = cljs.core.next.call(null,seq__38029_38043__$1);
var G__38051 = null;
var G__38052 = 0;
var G__38053 = 0;
seq__38029_38033 = G__38050;
chunk__38030_38034 = G__38051;
count__38031_38035 = G__38052;
i__38032_38036 = G__38053;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38054){
var content = cljs.core.first(arglist__38054);
arglist__38054 = cljs.core.next(arglist__38054);
var name = cljs.core.first(arglist__38054);
var value = cljs.core.rest(arglist__38054);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38059_38063 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38060_38064 = null;var count__38061_38065 = 0;var i__38062_38066 = 0;while(true){
if((i__38062_38066 < count__38061_38065))
{var n_38067 = cljs.core._nth.call(null,chunk__38060_38064,i__38062_38066);n_38067.removeAttribute(cljs.core.name.call(null,name));
{
var G__38068 = seq__38059_38063;
var G__38069 = chunk__38060_38064;
var G__38070 = count__38061_38065;
var G__38071 = (i__38062_38066 + 1);
seq__38059_38063 = G__38068;
chunk__38060_38064 = G__38069;
count__38061_38065 = G__38070;
i__38062_38066 = G__38071;
continue;
}
} else
{var temp__4092__auto___38072 = cljs.core.seq.call(null,seq__38059_38063);if(temp__4092__auto___38072)
{var seq__38059_38073__$1 = temp__4092__auto___38072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38059_38073__$1))
{var c__4148__auto___38074 = cljs.core.chunk_first.call(null,seq__38059_38073__$1);{
var G__38075 = cljs.core.chunk_rest.call(null,seq__38059_38073__$1);
var G__38076 = c__4148__auto___38074;
var G__38077 = cljs.core.count.call(null,c__4148__auto___38074);
var G__38078 = 0;
seq__38059_38063 = G__38075;
chunk__38060_38064 = G__38076;
count__38061_38065 = G__38077;
i__38062_38066 = G__38078;
continue;
}
} else
{var n_38079 = cljs.core.first.call(null,seq__38059_38073__$1);n_38079.removeAttribute(cljs.core.name.call(null,name));
{
var G__38080 = cljs.core.next.call(null,seq__38059_38073__$1);
var G__38081 = null;
var G__38082 = 0;
var G__38083 = 0;
seq__38059_38063 = G__38080;
chunk__38060_38064 = G__38081;
count__38061_38065 = G__38082;
i__38062_38066 = G__38083;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38085 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38085,0,null);var v = cljs.core.nth.call(null,vec__38085,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38086_SHARP_){var attr = attrs__$1.item(p1__38086_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38093_38099 = cljs.core.seq.call(null,styles);var chunk__38094_38100 = null;var count__38095_38101 = 0;var i__38096_38102 = 0;while(true){
if((i__38096_38102 < count__38095_38101))
{var vec__38097_38103 = cljs.core._nth.call(null,chunk__38094_38100,i__38096_38102);var name_38104 = cljs.core.nth.call(null,vec__38097_38103,0,null);var value_38105 = cljs.core.nth.call(null,vec__38097_38103,1,null);domina.set_style_BANG_.call(null,content,name_38104,value_38105);
{
var G__38106 = seq__38093_38099;
var G__38107 = chunk__38094_38100;
var G__38108 = count__38095_38101;
var G__38109 = (i__38096_38102 + 1);
seq__38093_38099 = G__38106;
chunk__38094_38100 = G__38107;
count__38095_38101 = G__38108;
i__38096_38102 = G__38109;
continue;
}
} else
{var temp__4092__auto___38110 = cljs.core.seq.call(null,seq__38093_38099);if(temp__4092__auto___38110)
{var seq__38093_38111__$1 = temp__4092__auto___38110;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38093_38111__$1))
{var c__4148__auto___38112 = cljs.core.chunk_first.call(null,seq__38093_38111__$1);{
var G__38113 = cljs.core.chunk_rest.call(null,seq__38093_38111__$1);
var G__38114 = c__4148__auto___38112;
var G__38115 = cljs.core.count.call(null,c__4148__auto___38112);
var G__38116 = 0;
seq__38093_38099 = G__38113;
chunk__38094_38100 = G__38114;
count__38095_38101 = G__38115;
i__38096_38102 = G__38116;
continue;
}
} else
{var vec__38098_38117 = cljs.core.first.call(null,seq__38093_38111__$1);var name_38118 = cljs.core.nth.call(null,vec__38098_38117,0,null);var value_38119 = cljs.core.nth.call(null,vec__38098_38117,1,null);domina.set_style_BANG_.call(null,content,name_38118,value_38119);
{
var G__38120 = cljs.core.next.call(null,seq__38093_38111__$1);
var G__38121 = null;
var G__38122 = 0;
var G__38123 = 0;
seq__38093_38099 = G__38120;
chunk__38094_38100 = G__38121;
count__38095_38101 = G__38122;
i__38096_38102 = G__38123;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38130_38136 = cljs.core.seq.call(null,attrs);var chunk__38131_38137 = null;var count__38132_38138 = 0;var i__38133_38139 = 0;while(true){
if((i__38133_38139 < count__38132_38138))
{var vec__38134_38140 = cljs.core._nth.call(null,chunk__38131_38137,i__38133_38139);var name_38141 = cljs.core.nth.call(null,vec__38134_38140,0,null);var value_38142 = cljs.core.nth.call(null,vec__38134_38140,1,null);domina.set_attr_BANG_.call(null,content,name_38141,value_38142);
{
var G__38143 = seq__38130_38136;
var G__38144 = chunk__38131_38137;
var G__38145 = count__38132_38138;
var G__38146 = (i__38133_38139 + 1);
seq__38130_38136 = G__38143;
chunk__38131_38137 = G__38144;
count__38132_38138 = G__38145;
i__38133_38139 = G__38146;
continue;
}
} else
{var temp__4092__auto___38147 = cljs.core.seq.call(null,seq__38130_38136);if(temp__4092__auto___38147)
{var seq__38130_38148__$1 = temp__4092__auto___38147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38130_38148__$1))
{var c__4148__auto___38149 = cljs.core.chunk_first.call(null,seq__38130_38148__$1);{
var G__38150 = cljs.core.chunk_rest.call(null,seq__38130_38148__$1);
var G__38151 = c__4148__auto___38149;
var G__38152 = cljs.core.count.call(null,c__4148__auto___38149);
var G__38153 = 0;
seq__38130_38136 = G__38150;
chunk__38131_38137 = G__38151;
count__38132_38138 = G__38152;
i__38133_38139 = G__38153;
continue;
}
} else
{var vec__38135_38154 = cljs.core.first.call(null,seq__38130_38148__$1);var name_38155 = cljs.core.nth.call(null,vec__38135_38154,0,null);var value_38156 = cljs.core.nth.call(null,vec__38135_38154,1,null);domina.set_attr_BANG_.call(null,content,name_38155,value_38156);
{
var G__38157 = cljs.core.next.call(null,seq__38130_38148__$1);
var G__38158 = null;
var G__38159 = 0;
var G__38160 = 0;
seq__38130_38136 = G__38157;
chunk__38131_38137 = G__38158;
count__38132_38138 = G__38159;
i__38133_38139 = G__38160;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38165_38169 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38166_38170 = null;var count__38167_38171 = 0;var i__38168_38172 = 0;while(true){
if((i__38168_38172 < count__38167_38171))
{var node_38173 = cljs.core._nth.call(null,chunk__38166_38170,i__38168_38172);goog.dom.classes.add(node_38173,class$);
{
var G__38174 = seq__38165_38169;
var G__38175 = chunk__38166_38170;
var G__38176 = count__38167_38171;
var G__38177 = (i__38168_38172 + 1);
seq__38165_38169 = G__38174;
chunk__38166_38170 = G__38175;
count__38167_38171 = G__38176;
i__38168_38172 = G__38177;
continue;
}
} else
{var temp__4092__auto___38178 = cljs.core.seq.call(null,seq__38165_38169);if(temp__4092__auto___38178)
{var seq__38165_38179__$1 = temp__4092__auto___38178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38165_38179__$1))
{var c__4148__auto___38180 = cljs.core.chunk_first.call(null,seq__38165_38179__$1);{
var G__38181 = cljs.core.chunk_rest.call(null,seq__38165_38179__$1);
var G__38182 = c__4148__auto___38180;
var G__38183 = cljs.core.count.call(null,c__4148__auto___38180);
var G__38184 = 0;
seq__38165_38169 = G__38181;
chunk__38166_38170 = G__38182;
count__38167_38171 = G__38183;
i__38168_38172 = G__38184;
continue;
}
} else
{var node_38185 = cljs.core.first.call(null,seq__38165_38179__$1);goog.dom.classes.add(node_38185,class$);
{
var G__38186 = cljs.core.next.call(null,seq__38165_38179__$1);
var G__38187 = null;
var G__38188 = 0;
var G__38189 = 0;
seq__38165_38169 = G__38186;
chunk__38166_38170 = G__38187;
count__38167_38171 = G__38188;
i__38168_38172 = G__38189;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38194_38198 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38195_38199 = null;var count__38196_38200 = 0;var i__38197_38201 = 0;while(true){
if((i__38197_38201 < count__38196_38200))
{var node_38202 = cljs.core._nth.call(null,chunk__38195_38199,i__38197_38201);goog.dom.classes.remove(node_38202,class$);
{
var G__38203 = seq__38194_38198;
var G__38204 = chunk__38195_38199;
var G__38205 = count__38196_38200;
var G__38206 = (i__38197_38201 + 1);
seq__38194_38198 = G__38203;
chunk__38195_38199 = G__38204;
count__38196_38200 = G__38205;
i__38197_38201 = G__38206;
continue;
}
} else
{var temp__4092__auto___38207 = cljs.core.seq.call(null,seq__38194_38198);if(temp__4092__auto___38207)
{var seq__38194_38208__$1 = temp__4092__auto___38207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38194_38208__$1))
{var c__4148__auto___38209 = cljs.core.chunk_first.call(null,seq__38194_38208__$1);{
var G__38210 = cljs.core.chunk_rest.call(null,seq__38194_38208__$1);
var G__38211 = c__4148__auto___38209;
var G__38212 = cljs.core.count.call(null,c__4148__auto___38209);
var G__38213 = 0;
seq__38194_38198 = G__38210;
chunk__38195_38199 = G__38211;
count__38196_38200 = G__38212;
i__38197_38201 = G__38213;
continue;
}
} else
{var node_38214 = cljs.core.first.call(null,seq__38194_38208__$1);goog.dom.classes.remove(node_38214,class$);
{
var G__38215 = cljs.core.next.call(null,seq__38194_38208__$1);
var G__38216 = null;
var G__38217 = 0;
var G__38218 = 0;
seq__38194_38198 = G__38215;
chunk__38195_38199 = G__38216;
count__38196_38200 = G__38217;
i__38197_38201 = G__38218;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38223_38227 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38224_38228 = null;var count__38225_38229 = 0;var i__38226_38230 = 0;while(true){
if((i__38226_38230 < count__38225_38229))
{var node_38231 = cljs.core._nth.call(null,chunk__38224_38228,i__38226_38230);goog.dom.classes.toggle(node_38231,class$);
{
var G__38232 = seq__38223_38227;
var G__38233 = chunk__38224_38228;
var G__38234 = count__38225_38229;
var G__38235 = (i__38226_38230 + 1);
seq__38223_38227 = G__38232;
chunk__38224_38228 = G__38233;
count__38225_38229 = G__38234;
i__38226_38230 = G__38235;
continue;
}
} else
{var temp__4092__auto___38236 = cljs.core.seq.call(null,seq__38223_38227);if(temp__4092__auto___38236)
{var seq__38223_38237__$1 = temp__4092__auto___38236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38223_38237__$1))
{var c__4148__auto___38238 = cljs.core.chunk_first.call(null,seq__38223_38237__$1);{
var G__38239 = cljs.core.chunk_rest.call(null,seq__38223_38237__$1);
var G__38240 = c__4148__auto___38238;
var G__38241 = cljs.core.count.call(null,c__4148__auto___38238);
var G__38242 = 0;
seq__38223_38227 = G__38239;
chunk__38224_38228 = G__38240;
count__38225_38229 = G__38241;
i__38226_38230 = G__38242;
continue;
}
} else
{var node_38243 = cljs.core.first.call(null,seq__38223_38237__$1);goog.dom.classes.toggle(node_38243,class$);
{
var G__38244 = cljs.core.next.call(null,seq__38223_38237__$1);
var G__38245 = null;
var G__38246 = 0;
var G__38247 = 0;
seq__38223_38227 = G__38244;
chunk__38224_38228 = G__38245;
count__38225_38229 = G__38246;
i__38226_38230 = G__38247;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38256__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38252_38257 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38253_38258 = null;var count__38254_38259 = 0;var i__38255_38260 = 0;while(true){
if((i__38255_38260 < count__38254_38259))
{var node_38261 = cljs.core._nth.call(null,chunk__38253_38258,i__38255_38260);goog.dom.classes.set(node_38261,classes_38256__$1);
{
var G__38262 = seq__38252_38257;
var G__38263 = chunk__38253_38258;
var G__38264 = count__38254_38259;
var G__38265 = (i__38255_38260 + 1);
seq__38252_38257 = G__38262;
chunk__38253_38258 = G__38263;
count__38254_38259 = G__38264;
i__38255_38260 = G__38265;
continue;
}
} else
{var temp__4092__auto___38266 = cljs.core.seq.call(null,seq__38252_38257);if(temp__4092__auto___38266)
{var seq__38252_38267__$1 = temp__4092__auto___38266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38252_38267__$1))
{var c__4148__auto___38268 = cljs.core.chunk_first.call(null,seq__38252_38267__$1);{
var G__38269 = cljs.core.chunk_rest.call(null,seq__38252_38267__$1);
var G__38270 = c__4148__auto___38268;
var G__38271 = cljs.core.count.call(null,c__4148__auto___38268);
var G__38272 = 0;
seq__38252_38257 = G__38269;
chunk__38253_38258 = G__38270;
count__38254_38259 = G__38271;
i__38255_38260 = G__38272;
continue;
}
} else
{var node_38273 = cljs.core.first.call(null,seq__38252_38267__$1);goog.dom.classes.set(node_38273,classes_38256__$1);
{
var G__38274 = cljs.core.next.call(null,seq__38252_38267__$1);
var G__38275 = null;
var G__38276 = 0;
var G__38277 = 0;
seq__38252_38257 = G__38274;
chunk__38253_38258 = G__38275;
count__38254_38259 = G__38276;
i__38255_38260 = G__38277;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38282_38286 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38283_38287 = null;var count__38284_38288 = 0;var i__38285_38289 = 0;while(true){
if((i__38285_38289 < count__38284_38288))
{var node_38290 = cljs.core._nth.call(null,chunk__38283_38287,i__38285_38289);goog.dom.setTextContent(node_38290,value);
{
var G__38291 = seq__38282_38286;
var G__38292 = chunk__38283_38287;
var G__38293 = count__38284_38288;
var G__38294 = (i__38285_38289 + 1);
seq__38282_38286 = G__38291;
chunk__38283_38287 = G__38292;
count__38284_38288 = G__38293;
i__38285_38289 = G__38294;
continue;
}
} else
{var temp__4092__auto___38295 = cljs.core.seq.call(null,seq__38282_38286);if(temp__4092__auto___38295)
{var seq__38282_38296__$1 = temp__4092__auto___38295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38282_38296__$1))
{var c__4148__auto___38297 = cljs.core.chunk_first.call(null,seq__38282_38296__$1);{
var G__38298 = cljs.core.chunk_rest.call(null,seq__38282_38296__$1);
var G__38299 = c__4148__auto___38297;
var G__38300 = cljs.core.count.call(null,c__4148__auto___38297);
var G__38301 = 0;
seq__38282_38286 = G__38298;
chunk__38283_38287 = G__38299;
count__38284_38288 = G__38300;
i__38285_38289 = G__38301;
continue;
}
} else
{var node_38302 = cljs.core.first.call(null,seq__38282_38296__$1);goog.dom.setTextContent(node_38302,value);
{
var G__38303 = cljs.core.next.call(null,seq__38282_38296__$1);
var G__38304 = null;
var G__38305 = 0;
var G__38306 = 0;
seq__38282_38286 = G__38303;
chunk__38283_38287 = G__38304;
count__38284_38288 = G__38305;
i__38285_38289 = G__38306;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38311_38315 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38312_38316 = null;var count__38313_38317 = 0;var i__38314_38318 = 0;while(true){
if((i__38314_38318 < count__38313_38317))
{var node_38319 = cljs.core._nth.call(null,chunk__38312_38316,i__38314_38318);goog.dom.forms.setValue(node_38319,value);
{
var G__38320 = seq__38311_38315;
var G__38321 = chunk__38312_38316;
var G__38322 = count__38313_38317;
var G__38323 = (i__38314_38318 + 1);
seq__38311_38315 = G__38320;
chunk__38312_38316 = G__38321;
count__38313_38317 = G__38322;
i__38314_38318 = G__38323;
continue;
}
} else
{var temp__4092__auto___38324 = cljs.core.seq.call(null,seq__38311_38315);if(temp__4092__auto___38324)
{var seq__38311_38325__$1 = temp__4092__auto___38324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38311_38325__$1))
{var c__4148__auto___38326 = cljs.core.chunk_first.call(null,seq__38311_38325__$1);{
var G__38327 = cljs.core.chunk_rest.call(null,seq__38311_38325__$1);
var G__38328 = c__4148__auto___38326;
var G__38329 = cljs.core.count.call(null,c__4148__auto___38326);
var G__38330 = 0;
seq__38311_38315 = G__38327;
chunk__38312_38316 = G__38328;
count__38313_38317 = G__38329;
i__38314_38318 = G__38330;
continue;
}
} else
{var node_38331 = cljs.core.first.call(null,seq__38311_38325__$1);goog.dom.forms.setValue(node_38331,value);
{
var G__38332 = cljs.core.next.call(null,seq__38311_38325__$1);
var G__38333 = null;
var G__38334 = 0;
var G__38335 = 0;
seq__38311_38315 = G__38332;
chunk__38312_38316 = G__38333;
count__38313_38317 = G__38334;
i__38314_38318 = G__38335;
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
{var value_38346 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38342_38347 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38343_38348 = null;var count__38344_38349 = 0;var i__38345_38350 = 0;while(true){
if((i__38345_38350 < count__38344_38349))
{var node_38351 = cljs.core._nth.call(null,chunk__38343_38348,i__38345_38350);node_38351.innerHTML = value_38346;
{
var G__38352 = seq__38342_38347;
var G__38353 = chunk__38343_38348;
var G__38354 = count__38344_38349;
var G__38355 = (i__38345_38350 + 1);
seq__38342_38347 = G__38352;
chunk__38343_38348 = G__38353;
count__38344_38349 = G__38354;
i__38345_38350 = G__38355;
continue;
}
} else
{var temp__4092__auto___38356 = cljs.core.seq.call(null,seq__38342_38347);if(temp__4092__auto___38356)
{var seq__38342_38357__$1 = temp__4092__auto___38356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38342_38357__$1))
{var c__4148__auto___38358 = cljs.core.chunk_first.call(null,seq__38342_38357__$1);{
var G__38359 = cljs.core.chunk_rest.call(null,seq__38342_38357__$1);
var G__38360 = c__4148__auto___38358;
var G__38361 = cljs.core.count.call(null,c__4148__auto___38358);
var G__38362 = 0;
seq__38342_38347 = G__38359;
chunk__38343_38348 = G__38360;
count__38344_38349 = G__38361;
i__38345_38350 = G__38362;
continue;
}
} else
{var node_38363 = cljs.core.first.call(null,seq__38342_38357__$1);node_38363.innerHTML = value_38346;
{
var G__38364 = cljs.core.next.call(null,seq__38342_38357__$1);
var G__38365 = null;
var G__38366 = 0;
var G__38367 = 0;
seq__38342_38347 = G__38364;
chunk__38343_38348 = G__38365;
count__38344_38349 = G__38366;
i__38345_38350 = G__38367;
continue;
}
}
} else
{}
}
break;
}
}catch (e38341){if((e38341 instanceof Error))
{var e_38368 = e38341;domina.replace_children_BANG_.call(null,content,value_38346);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38341;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38375_38379 = cljs.core.seq.call(null,children);var chunk__38376_38380 = null;var count__38377_38381 = 0;var i__38378_38382 = 0;while(true){
if((i__38378_38382 < count__38377_38381))
{var child_38383 = cljs.core._nth.call(null,chunk__38376_38380,i__38378_38382);frag.appendChild(child_38383);
{
var G__38384 = seq__38375_38379;
var G__38385 = chunk__38376_38380;
var G__38386 = count__38377_38381;
var G__38387 = (i__38378_38382 + 1);
seq__38375_38379 = G__38384;
chunk__38376_38380 = G__38385;
count__38377_38381 = G__38386;
i__38378_38382 = G__38387;
continue;
}
} else
{var temp__4092__auto___38388 = cljs.core.seq.call(null,seq__38375_38379);if(temp__4092__auto___38388)
{var seq__38375_38389__$1 = temp__4092__auto___38388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38375_38389__$1))
{var c__4148__auto___38390 = cljs.core.chunk_first.call(null,seq__38375_38389__$1);{
var G__38391 = cljs.core.chunk_rest.call(null,seq__38375_38389__$1);
var G__38392 = c__4148__auto___38390;
var G__38393 = cljs.core.count.call(null,c__4148__auto___38390);
var G__38394 = 0;
seq__38375_38379 = G__38391;
chunk__38376_38380 = G__38392;
count__38377_38381 = G__38393;
i__38378_38382 = G__38394;
continue;
}
} else
{var child_38395 = cljs.core.first.call(null,seq__38375_38389__$1);frag.appendChild(child_38395);
{
var G__38396 = cljs.core.next.call(null,seq__38375_38389__$1);
var G__38397 = null;
var G__38398 = 0;
var G__38399 = 0;
seq__38375_38379 = G__38396;
chunk__38376_38380 = G__38397;
count__38377_38381 = G__38398;
i__38378_38382 = G__38399;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38369_SHARP_,p2__38370_SHARP_){return f.call(null,p1__38369_SHARP_,p2__38370_SHARP_);
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
{if((function (){var G__38401 = list_thing;if(G__38401)
{var bit__4050__auto__ = (G__38401.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38401.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38401.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38401);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38401);
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
{if((function (){var G__38402 = content;if(G__38402)
{var bit__4050__auto__ = (G__38402.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38402.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38402.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38402);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38402);
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
{if((function (){var G__38403 = content;if(G__38403)
{var bit__4050__auto__ = (G__38403.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38403.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38403.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38403);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38403);
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
