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
var opt_wrapper_15004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15005 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15006 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15005,table_section_wrapper_15005,opt_wrapper_15004,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15006,table_section_wrapper_15005,cell_wrapper_15006,opt_wrapper_15004,table_section_wrapper_15005,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15005]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15011 = cljs.core.seq.call(null,tbody);var chunk__15012 = null;var count__15013 = 0;var i__15014 = 0;while(true){
if((i__15014 < count__15013))
{var child = cljs.core._nth.call(null,chunk__15012,i__15014);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15015 = seq__15011;
var G__15016 = chunk__15012;
var G__15017 = count__15013;
var G__15018 = (i__15014 + 1);
seq__15011 = G__15015;
chunk__15012 = G__15016;
count__15013 = G__15017;
i__15014 = G__15018;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15011);if(temp__4092__auto__)
{var seq__15011__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15011__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15011__$1);{
var G__15019 = cljs.core.chunk_rest.call(null,seq__15011__$1);
var G__15020 = c__4148__auto__;
var G__15021 = cljs.core.count.call(null,c__4148__auto__);
var G__15022 = 0;
seq__15011 = G__15019;
chunk__15012 = G__15020;
count__15013 = G__15021;
i__15014 = G__15022;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15011__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15023 = cljs.core.next.call(null,seq__15011__$1);
var G__15024 = null;
var G__15025 = 0;
var G__15026 = 0;
seq__15011 = G__15023;
chunk__15012 = G__15024;
count__15013 = G__15025;
i__15014 = G__15026;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15028 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15028,0,null);var start_wrap = cljs.core.nth.call(null,vec__15028,1,null);var end_wrap = cljs.core.nth.call(null,vec__15028,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15029 = wrapper.lastChild;
var G__15030 = (level - 1);
wrapper = G__15029;
level = G__15030;
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
domina.DomContent = (function (){var obj15032 = {};return obj15032;
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
log_debug.cljs$lang$applyTo = (function (arglist__15033){
var mesg = cljs.core.seq(arglist__15033);
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
log.cljs$lang$applyTo = (function (arglist__15034){
var mesg = cljs.core.seq(arglist__15034);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15035){
var contents = cljs.core.seq(arglist__15035);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15036_SHARP_){return p1__15036_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15037_SHARP_,p2__15038_SHARP_){return goog.dom.insertChildAt(p1__15037_SHARP_,p2__15038_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15040_SHARP_,p2__15039_SHARP_){return goog.dom.insertSiblingBefore(p2__15039_SHARP_,p1__15040_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15042_SHARP_,p2__15041_SHARP_){return goog.dom.insertSiblingAfter(p2__15041_SHARP_,p1__15042_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15044_SHARP_,p2__15043_SHARP_){return goog.dom.replaceNode(p2__15043_SHARP_,p1__15044_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15049_15053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15050_15054 = null;var count__15051_15055 = 0;var i__15052_15056 = 0;while(true){
if((i__15052_15056 < count__15051_15055))
{var n_15057 = cljs.core._nth.call(null,chunk__15050_15054,i__15052_15056);goog.style.setStyle(n_15057,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15058 = seq__15049_15053;
var G__15059 = chunk__15050_15054;
var G__15060 = count__15051_15055;
var G__15061 = (i__15052_15056 + 1);
seq__15049_15053 = G__15058;
chunk__15050_15054 = G__15059;
count__15051_15055 = G__15060;
i__15052_15056 = G__15061;
continue;
}
} else
{var temp__4092__auto___15062 = cljs.core.seq.call(null,seq__15049_15053);if(temp__4092__auto___15062)
{var seq__15049_15063__$1 = temp__4092__auto___15062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15049_15063__$1))
{var c__4148__auto___15064 = cljs.core.chunk_first.call(null,seq__15049_15063__$1);{
var G__15065 = cljs.core.chunk_rest.call(null,seq__15049_15063__$1);
var G__15066 = c__4148__auto___15064;
var G__15067 = cljs.core.count.call(null,c__4148__auto___15064);
var G__15068 = 0;
seq__15049_15053 = G__15065;
chunk__15050_15054 = G__15066;
count__15051_15055 = G__15067;
i__15052_15056 = G__15068;
continue;
}
} else
{var n_15069 = cljs.core.first.call(null,seq__15049_15063__$1);goog.style.setStyle(n_15069,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15070 = cljs.core.next.call(null,seq__15049_15063__$1);
var G__15071 = null;
var G__15072 = 0;
var G__15073 = 0;
seq__15049_15053 = G__15070;
chunk__15050_15054 = G__15071;
count__15051_15055 = G__15072;
i__15052_15056 = G__15073;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15074){
var content = cljs.core.first(arglist__15074);
arglist__15074 = cljs.core.next(arglist__15074);
var name = cljs.core.first(arglist__15074);
var value = cljs.core.rest(arglist__15074);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15079_15083 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15080_15084 = null;var count__15081_15085 = 0;var i__15082_15086 = 0;while(true){
if((i__15082_15086 < count__15081_15085))
{var n_15087 = cljs.core._nth.call(null,chunk__15080_15084,i__15082_15086);n_15087.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15088 = seq__15079_15083;
var G__15089 = chunk__15080_15084;
var G__15090 = count__15081_15085;
var G__15091 = (i__15082_15086 + 1);
seq__15079_15083 = G__15088;
chunk__15080_15084 = G__15089;
count__15081_15085 = G__15090;
i__15082_15086 = G__15091;
continue;
}
} else
{var temp__4092__auto___15092 = cljs.core.seq.call(null,seq__15079_15083);if(temp__4092__auto___15092)
{var seq__15079_15093__$1 = temp__4092__auto___15092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15079_15093__$1))
{var c__4148__auto___15094 = cljs.core.chunk_first.call(null,seq__15079_15093__$1);{
var G__15095 = cljs.core.chunk_rest.call(null,seq__15079_15093__$1);
var G__15096 = c__4148__auto___15094;
var G__15097 = cljs.core.count.call(null,c__4148__auto___15094);
var G__15098 = 0;
seq__15079_15083 = G__15095;
chunk__15080_15084 = G__15096;
count__15081_15085 = G__15097;
i__15082_15086 = G__15098;
continue;
}
} else
{var n_15099 = cljs.core.first.call(null,seq__15079_15093__$1);n_15099.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15100 = cljs.core.next.call(null,seq__15079_15093__$1);
var G__15101 = null;
var G__15102 = 0;
var G__15103 = 0;
seq__15079_15083 = G__15100;
chunk__15080_15084 = G__15101;
count__15081_15085 = G__15102;
i__15082_15086 = G__15103;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15104){
var content = cljs.core.first(arglist__15104);
arglist__15104 = cljs.core.next(arglist__15104);
var name = cljs.core.first(arglist__15104);
var value = cljs.core.rest(arglist__15104);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15109_15113 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15110_15114 = null;var count__15111_15115 = 0;var i__15112_15116 = 0;while(true){
if((i__15112_15116 < count__15111_15115))
{var n_15117 = cljs.core._nth.call(null,chunk__15110_15114,i__15112_15116);n_15117.removeAttribute(cljs.core.name.call(null,name));
{
var G__15118 = seq__15109_15113;
var G__15119 = chunk__15110_15114;
var G__15120 = count__15111_15115;
var G__15121 = (i__15112_15116 + 1);
seq__15109_15113 = G__15118;
chunk__15110_15114 = G__15119;
count__15111_15115 = G__15120;
i__15112_15116 = G__15121;
continue;
}
} else
{var temp__4092__auto___15122 = cljs.core.seq.call(null,seq__15109_15113);if(temp__4092__auto___15122)
{var seq__15109_15123__$1 = temp__4092__auto___15122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15109_15123__$1))
{var c__4148__auto___15124 = cljs.core.chunk_first.call(null,seq__15109_15123__$1);{
var G__15125 = cljs.core.chunk_rest.call(null,seq__15109_15123__$1);
var G__15126 = c__4148__auto___15124;
var G__15127 = cljs.core.count.call(null,c__4148__auto___15124);
var G__15128 = 0;
seq__15109_15113 = G__15125;
chunk__15110_15114 = G__15126;
count__15111_15115 = G__15127;
i__15112_15116 = G__15128;
continue;
}
} else
{var n_15129 = cljs.core.first.call(null,seq__15109_15123__$1);n_15129.removeAttribute(cljs.core.name.call(null,name));
{
var G__15130 = cljs.core.next.call(null,seq__15109_15123__$1);
var G__15131 = null;
var G__15132 = 0;
var G__15133 = 0;
seq__15109_15113 = G__15130;
chunk__15110_15114 = G__15131;
count__15111_15115 = G__15132;
i__15112_15116 = G__15133;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15135 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15135,0,null);var v = cljs.core.nth.call(null,vec__15135,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15136_SHARP_){var attr = attrs__$1.item(p1__15136_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15143_15149 = cljs.core.seq.call(null,styles);var chunk__15144_15150 = null;var count__15145_15151 = 0;var i__15146_15152 = 0;while(true){
if((i__15146_15152 < count__15145_15151))
{var vec__15147_15153 = cljs.core._nth.call(null,chunk__15144_15150,i__15146_15152);var name_15154 = cljs.core.nth.call(null,vec__15147_15153,0,null);var value_15155 = cljs.core.nth.call(null,vec__15147_15153,1,null);domina.set_style_BANG_.call(null,content,name_15154,value_15155);
{
var G__15156 = seq__15143_15149;
var G__15157 = chunk__15144_15150;
var G__15158 = count__15145_15151;
var G__15159 = (i__15146_15152 + 1);
seq__15143_15149 = G__15156;
chunk__15144_15150 = G__15157;
count__15145_15151 = G__15158;
i__15146_15152 = G__15159;
continue;
}
} else
{var temp__4092__auto___15160 = cljs.core.seq.call(null,seq__15143_15149);if(temp__4092__auto___15160)
{var seq__15143_15161__$1 = temp__4092__auto___15160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15143_15161__$1))
{var c__4148__auto___15162 = cljs.core.chunk_first.call(null,seq__15143_15161__$1);{
var G__15163 = cljs.core.chunk_rest.call(null,seq__15143_15161__$1);
var G__15164 = c__4148__auto___15162;
var G__15165 = cljs.core.count.call(null,c__4148__auto___15162);
var G__15166 = 0;
seq__15143_15149 = G__15163;
chunk__15144_15150 = G__15164;
count__15145_15151 = G__15165;
i__15146_15152 = G__15166;
continue;
}
} else
{var vec__15148_15167 = cljs.core.first.call(null,seq__15143_15161__$1);var name_15168 = cljs.core.nth.call(null,vec__15148_15167,0,null);var value_15169 = cljs.core.nth.call(null,vec__15148_15167,1,null);domina.set_style_BANG_.call(null,content,name_15168,value_15169);
{
var G__15170 = cljs.core.next.call(null,seq__15143_15161__$1);
var G__15171 = null;
var G__15172 = 0;
var G__15173 = 0;
seq__15143_15149 = G__15170;
chunk__15144_15150 = G__15171;
count__15145_15151 = G__15172;
i__15146_15152 = G__15173;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15180_15186 = cljs.core.seq.call(null,attrs);var chunk__15181_15187 = null;var count__15182_15188 = 0;var i__15183_15189 = 0;while(true){
if((i__15183_15189 < count__15182_15188))
{var vec__15184_15190 = cljs.core._nth.call(null,chunk__15181_15187,i__15183_15189);var name_15191 = cljs.core.nth.call(null,vec__15184_15190,0,null);var value_15192 = cljs.core.nth.call(null,vec__15184_15190,1,null);domina.set_attr_BANG_.call(null,content,name_15191,value_15192);
{
var G__15193 = seq__15180_15186;
var G__15194 = chunk__15181_15187;
var G__15195 = count__15182_15188;
var G__15196 = (i__15183_15189 + 1);
seq__15180_15186 = G__15193;
chunk__15181_15187 = G__15194;
count__15182_15188 = G__15195;
i__15183_15189 = G__15196;
continue;
}
} else
{var temp__4092__auto___15197 = cljs.core.seq.call(null,seq__15180_15186);if(temp__4092__auto___15197)
{var seq__15180_15198__$1 = temp__4092__auto___15197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15180_15198__$1))
{var c__4148__auto___15199 = cljs.core.chunk_first.call(null,seq__15180_15198__$1);{
var G__15200 = cljs.core.chunk_rest.call(null,seq__15180_15198__$1);
var G__15201 = c__4148__auto___15199;
var G__15202 = cljs.core.count.call(null,c__4148__auto___15199);
var G__15203 = 0;
seq__15180_15186 = G__15200;
chunk__15181_15187 = G__15201;
count__15182_15188 = G__15202;
i__15183_15189 = G__15203;
continue;
}
} else
{var vec__15185_15204 = cljs.core.first.call(null,seq__15180_15198__$1);var name_15205 = cljs.core.nth.call(null,vec__15185_15204,0,null);var value_15206 = cljs.core.nth.call(null,vec__15185_15204,1,null);domina.set_attr_BANG_.call(null,content,name_15205,value_15206);
{
var G__15207 = cljs.core.next.call(null,seq__15180_15198__$1);
var G__15208 = null;
var G__15209 = 0;
var G__15210 = 0;
seq__15180_15186 = G__15207;
chunk__15181_15187 = G__15208;
count__15182_15188 = G__15209;
i__15183_15189 = G__15210;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15215_15219 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15216_15220 = null;var count__15217_15221 = 0;var i__15218_15222 = 0;while(true){
if((i__15218_15222 < count__15217_15221))
{var node_15223 = cljs.core._nth.call(null,chunk__15216_15220,i__15218_15222);goog.dom.classes.add(node_15223,class$);
{
var G__15224 = seq__15215_15219;
var G__15225 = chunk__15216_15220;
var G__15226 = count__15217_15221;
var G__15227 = (i__15218_15222 + 1);
seq__15215_15219 = G__15224;
chunk__15216_15220 = G__15225;
count__15217_15221 = G__15226;
i__15218_15222 = G__15227;
continue;
}
} else
{var temp__4092__auto___15228 = cljs.core.seq.call(null,seq__15215_15219);if(temp__4092__auto___15228)
{var seq__15215_15229__$1 = temp__4092__auto___15228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15215_15229__$1))
{var c__4148__auto___15230 = cljs.core.chunk_first.call(null,seq__15215_15229__$1);{
var G__15231 = cljs.core.chunk_rest.call(null,seq__15215_15229__$1);
var G__15232 = c__4148__auto___15230;
var G__15233 = cljs.core.count.call(null,c__4148__auto___15230);
var G__15234 = 0;
seq__15215_15219 = G__15231;
chunk__15216_15220 = G__15232;
count__15217_15221 = G__15233;
i__15218_15222 = G__15234;
continue;
}
} else
{var node_15235 = cljs.core.first.call(null,seq__15215_15229__$1);goog.dom.classes.add(node_15235,class$);
{
var G__15236 = cljs.core.next.call(null,seq__15215_15229__$1);
var G__15237 = null;
var G__15238 = 0;
var G__15239 = 0;
seq__15215_15219 = G__15236;
chunk__15216_15220 = G__15237;
count__15217_15221 = G__15238;
i__15218_15222 = G__15239;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15244_15248 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15245_15249 = null;var count__15246_15250 = 0;var i__15247_15251 = 0;while(true){
if((i__15247_15251 < count__15246_15250))
{var node_15252 = cljs.core._nth.call(null,chunk__15245_15249,i__15247_15251);goog.dom.classes.remove(node_15252,class$);
{
var G__15253 = seq__15244_15248;
var G__15254 = chunk__15245_15249;
var G__15255 = count__15246_15250;
var G__15256 = (i__15247_15251 + 1);
seq__15244_15248 = G__15253;
chunk__15245_15249 = G__15254;
count__15246_15250 = G__15255;
i__15247_15251 = G__15256;
continue;
}
} else
{var temp__4092__auto___15257 = cljs.core.seq.call(null,seq__15244_15248);if(temp__4092__auto___15257)
{var seq__15244_15258__$1 = temp__4092__auto___15257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15244_15258__$1))
{var c__4148__auto___15259 = cljs.core.chunk_first.call(null,seq__15244_15258__$1);{
var G__15260 = cljs.core.chunk_rest.call(null,seq__15244_15258__$1);
var G__15261 = c__4148__auto___15259;
var G__15262 = cljs.core.count.call(null,c__4148__auto___15259);
var G__15263 = 0;
seq__15244_15248 = G__15260;
chunk__15245_15249 = G__15261;
count__15246_15250 = G__15262;
i__15247_15251 = G__15263;
continue;
}
} else
{var node_15264 = cljs.core.first.call(null,seq__15244_15258__$1);goog.dom.classes.remove(node_15264,class$);
{
var G__15265 = cljs.core.next.call(null,seq__15244_15258__$1);
var G__15266 = null;
var G__15267 = 0;
var G__15268 = 0;
seq__15244_15248 = G__15265;
chunk__15245_15249 = G__15266;
count__15246_15250 = G__15267;
i__15247_15251 = G__15268;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15273_15277 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15274_15278 = null;var count__15275_15279 = 0;var i__15276_15280 = 0;while(true){
if((i__15276_15280 < count__15275_15279))
{var node_15281 = cljs.core._nth.call(null,chunk__15274_15278,i__15276_15280);goog.dom.classes.toggle(node_15281,class$);
{
var G__15282 = seq__15273_15277;
var G__15283 = chunk__15274_15278;
var G__15284 = count__15275_15279;
var G__15285 = (i__15276_15280 + 1);
seq__15273_15277 = G__15282;
chunk__15274_15278 = G__15283;
count__15275_15279 = G__15284;
i__15276_15280 = G__15285;
continue;
}
} else
{var temp__4092__auto___15286 = cljs.core.seq.call(null,seq__15273_15277);if(temp__4092__auto___15286)
{var seq__15273_15287__$1 = temp__4092__auto___15286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15273_15287__$1))
{var c__4148__auto___15288 = cljs.core.chunk_first.call(null,seq__15273_15287__$1);{
var G__15289 = cljs.core.chunk_rest.call(null,seq__15273_15287__$1);
var G__15290 = c__4148__auto___15288;
var G__15291 = cljs.core.count.call(null,c__4148__auto___15288);
var G__15292 = 0;
seq__15273_15277 = G__15289;
chunk__15274_15278 = G__15290;
count__15275_15279 = G__15291;
i__15276_15280 = G__15292;
continue;
}
} else
{var node_15293 = cljs.core.first.call(null,seq__15273_15287__$1);goog.dom.classes.toggle(node_15293,class$);
{
var G__15294 = cljs.core.next.call(null,seq__15273_15287__$1);
var G__15295 = null;
var G__15296 = 0;
var G__15297 = 0;
seq__15273_15277 = G__15294;
chunk__15274_15278 = G__15295;
count__15275_15279 = G__15296;
i__15276_15280 = G__15297;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15306__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15302_15307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15303_15308 = null;var count__15304_15309 = 0;var i__15305_15310 = 0;while(true){
if((i__15305_15310 < count__15304_15309))
{var node_15311 = cljs.core._nth.call(null,chunk__15303_15308,i__15305_15310);goog.dom.classes.set(node_15311,classes_15306__$1);
{
var G__15312 = seq__15302_15307;
var G__15313 = chunk__15303_15308;
var G__15314 = count__15304_15309;
var G__15315 = (i__15305_15310 + 1);
seq__15302_15307 = G__15312;
chunk__15303_15308 = G__15313;
count__15304_15309 = G__15314;
i__15305_15310 = G__15315;
continue;
}
} else
{var temp__4092__auto___15316 = cljs.core.seq.call(null,seq__15302_15307);if(temp__4092__auto___15316)
{var seq__15302_15317__$1 = temp__4092__auto___15316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15302_15317__$1))
{var c__4148__auto___15318 = cljs.core.chunk_first.call(null,seq__15302_15317__$1);{
var G__15319 = cljs.core.chunk_rest.call(null,seq__15302_15317__$1);
var G__15320 = c__4148__auto___15318;
var G__15321 = cljs.core.count.call(null,c__4148__auto___15318);
var G__15322 = 0;
seq__15302_15307 = G__15319;
chunk__15303_15308 = G__15320;
count__15304_15309 = G__15321;
i__15305_15310 = G__15322;
continue;
}
} else
{var node_15323 = cljs.core.first.call(null,seq__15302_15317__$1);goog.dom.classes.set(node_15323,classes_15306__$1);
{
var G__15324 = cljs.core.next.call(null,seq__15302_15317__$1);
var G__15325 = null;
var G__15326 = 0;
var G__15327 = 0;
seq__15302_15307 = G__15324;
chunk__15303_15308 = G__15325;
count__15304_15309 = G__15326;
i__15305_15310 = G__15327;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15332_15336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15333_15337 = null;var count__15334_15338 = 0;var i__15335_15339 = 0;while(true){
if((i__15335_15339 < count__15334_15338))
{var node_15340 = cljs.core._nth.call(null,chunk__15333_15337,i__15335_15339);goog.dom.setTextContent(node_15340,value);
{
var G__15341 = seq__15332_15336;
var G__15342 = chunk__15333_15337;
var G__15343 = count__15334_15338;
var G__15344 = (i__15335_15339 + 1);
seq__15332_15336 = G__15341;
chunk__15333_15337 = G__15342;
count__15334_15338 = G__15343;
i__15335_15339 = G__15344;
continue;
}
} else
{var temp__4092__auto___15345 = cljs.core.seq.call(null,seq__15332_15336);if(temp__4092__auto___15345)
{var seq__15332_15346__$1 = temp__4092__auto___15345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15332_15346__$1))
{var c__4148__auto___15347 = cljs.core.chunk_first.call(null,seq__15332_15346__$1);{
var G__15348 = cljs.core.chunk_rest.call(null,seq__15332_15346__$1);
var G__15349 = c__4148__auto___15347;
var G__15350 = cljs.core.count.call(null,c__4148__auto___15347);
var G__15351 = 0;
seq__15332_15336 = G__15348;
chunk__15333_15337 = G__15349;
count__15334_15338 = G__15350;
i__15335_15339 = G__15351;
continue;
}
} else
{var node_15352 = cljs.core.first.call(null,seq__15332_15346__$1);goog.dom.setTextContent(node_15352,value);
{
var G__15353 = cljs.core.next.call(null,seq__15332_15346__$1);
var G__15354 = null;
var G__15355 = 0;
var G__15356 = 0;
seq__15332_15336 = G__15353;
chunk__15333_15337 = G__15354;
count__15334_15338 = G__15355;
i__15335_15339 = G__15356;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15361_15365 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15362_15366 = null;var count__15363_15367 = 0;var i__15364_15368 = 0;while(true){
if((i__15364_15368 < count__15363_15367))
{var node_15369 = cljs.core._nth.call(null,chunk__15362_15366,i__15364_15368);goog.dom.forms.setValue(node_15369,value);
{
var G__15370 = seq__15361_15365;
var G__15371 = chunk__15362_15366;
var G__15372 = count__15363_15367;
var G__15373 = (i__15364_15368 + 1);
seq__15361_15365 = G__15370;
chunk__15362_15366 = G__15371;
count__15363_15367 = G__15372;
i__15364_15368 = G__15373;
continue;
}
} else
{var temp__4092__auto___15374 = cljs.core.seq.call(null,seq__15361_15365);if(temp__4092__auto___15374)
{var seq__15361_15375__$1 = temp__4092__auto___15374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15361_15375__$1))
{var c__4148__auto___15376 = cljs.core.chunk_first.call(null,seq__15361_15375__$1);{
var G__15377 = cljs.core.chunk_rest.call(null,seq__15361_15375__$1);
var G__15378 = c__4148__auto___15376;
var G__15379 = cljs.core.count.call(null,c__4148__auto___15376);
var G__15380 = 0;
seq__15361_15365 = G__15377;
chunk__15362_15366 = G__15378;
count__15363_15367 = G__15379;
i__15364_15368 = G__15380;
continue;
}
} else
{var node_15381 = cljs.core.first.call(null,seq__15361_15375__$1);goog.dom.forms.setValue(node_15381,value);
{
var G__15382 = cljs.core.next.call(null,seq__15361_15375__$1);
var G__15383 = null;
var G__15384 = 0;
var G__15385 = 0;
seq__15361_15365 = G__15382;
chunk__15362_15366 = G__15383;
count__15363_15367 = G__15384;
i__15364_15368 = G__15385;
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
{var value_15396 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15392_15397 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15393_15398 = null;var count__15394_15399 = 0;var i__15395_15400 = 0;while(true){
if((i__15395_15400 < count__15394_15399))
{var node_15401 = cljs.core._nth.call(null,chunk__15393_15398,i__15395_15400);node_15401.innerHTML = value_15396;
{
var G__15402 = seq__15392_15397;
var G__15403 = chunk__15393_15398;
var G__15404 = count__15394_15399;
var G__15405 = (i__15395_15400 + 1);
seq__15392_15397 = G__15402;
chunk__15393_15398 = G__15403;
count__15394_15399 = G__15404;
i__15395_15400 = G__15405;
continue;
}
} else
{var temp__4092__auto___15406 = cljs.core.seq.call(null,seq__15392_15397);if(temp__4092__auto___15406)
{var seq__15392_15407__$1 = temp__4092__auto___15406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15392_15407__$1))
{var c__4148__auto___15408 = cljs.core.chunk_first.call(null,seq__15392_15407__$1);{
var G__15409 = cljs.core.chunk_rest.call(null,seq__15392_15407__$1);
var G__15410 = c__4148__auto___15408;
var G__15411 = cljs.core.count.call(null,c__4148__auto___15408);
var G__15412 = 0;
seq__15392_15397 = G__15409;
chunk__15393_15398 = G__15410;
count__15394_15399 = G__15411;
i__15395_15400 = G__15412;
continue;
}
} else
{var node_15413 = cljs.core.first.call(null,seq__15392_15407__$1);node_15413.innerHTML = value_15396;
{
var G__15414 = cljs.core.next.call(null,seq__15392_15407__$1);
var G__15415 = null;
var G__15416 = 0;
var G__15417 = 0;
seq__15392_15397 = G__15414;
chunk__15393_15398 = G__15415;
count__15394_15399 = G__15416;
i__15395_15400 = G__15417;
continue;
}
}
} else
{}
}
break;
}
}catch (e15391){if((e15391 instanceof Error))
{var e_15418 = e15391;domina.replace_children_BANG_.call(null,content,value_15396);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15391;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15425_15429 = cljs.core.seq.call(null,children);var chunk__15426_15430 = null;var count__15427_15431 = 0;var i__15428_15432 = 0;while(true){
if((i__15428_15432 < count__15427_15431))
{var child_15433 = cljs.core._nth.call(null,chunk__15426_15430,i__15428_15432);frag.appendChild(child_15433);
{
var G__15434 = seq__15425_15429;
var G__15435 = chunk__15426_15430;
var G__15436 = count__15427_15431;
var G__15437 = (i__15428_15432 + 1);
seq__15425_15429 = G__15434;
chunk__15426_15430 = G__15435;
count__15427_15431 = G__15436;
i__15428_15432 = G__15437;
continue;
}
} else
{var temp__4092__auto___15438 = cljs.core.seq.call(null,seq__15425_15429);if(temp__4092__auto___15438)
{var seq__15425_15439__$1 = temp__4092__auto___15438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15425_15439__$1))
{var c__4148__auto___15440 = cljs.core.chunk_first.call(null,seq__15425_15439__$1);{
var G__15441 = cljs.core.chunk_rest.call(null,seq__15425_15439__$1);
var G__15442 = c__4148__auto___15440;
var G__15443 = cljs.core.count.call(null,c__4148__auto___15440);
var G__15444 = 0;
seq__15425_15429 = G__15441;
chunk__15426_15430 = G__15442;
count__15427_15431 = G__15443;
i__15428_15432 = G__15444;
continue;
}
} else
{var child_15445 = cljs.core.first.call(null,seq__15425_15439__$1);frag.appendChild(child_15445);
{
var G__15446 = cljs.core.next.call(null,seq__15425_15439__$1);
var G__15447 = null;
var G__15448 = 0;
var G__15449 = 0;
seq__15425_15429 = G__15446;
chunk__15426_15430 = G__15447;
count__15427_15431 = G__15448;
i__15428_15432 = G__15449;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15419_SHARP_,p2__15420_SHARP_){return f.call(null,p1__15419_SHARP_,p2__15420_SHARP_);
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
{if((function (){var G__15451 = list_thing;if(G__15451)
{var bit__4050__auto__ = (G__15451.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15451.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15451.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15451);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15451);
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
{if((function (){var G__15452 = content;if(G__15452)
{var bit__4050__auto__ = (G__15452.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15452.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15452.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15452);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15452);
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
{if((function (){var G__15453 = content;if(G__15453)
{var bit__4050__auto__ = (G__15453.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15453.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15453.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15453);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15453);
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