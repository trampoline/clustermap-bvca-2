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
var opt_wrapper_15009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15010 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15010,table_section_wrapper_15010,opt_wrapper_15009,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15011,table_section_wrapper_15010,cell_wrapper_15011,opt_wrapper_15009,table_section_wrapper_15010,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15010]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15016 = cljs.core.seq.call(null,tbody);var chunk__15017 = null;var count__15018 = 0;var i__15019 = 0;while(true){
if((i__15019 < count__15018))
{var child = cljs.core._nth.call(null,chunk__15017,i__15019);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15020 = seq__15016;
var G__15021 = chunk__15017;
var G__15022 = count__15018;
var G__15023 = (i__15019 + 1);
seq__15016 = G__15020;
chunk__15017 = G__15021;
count__15018 = G__15022;
i__15019 = G__15023;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15016);if(temp__4092__auto__)
{var seq__15016__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15016__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15016__$1);{
var G__15024 = cljs.core.chunk_rest.call(null,seq__15016__$1);
var G__15025 = c__4148__auto__;
var G__15026 = cljs.core.count.call(null,c__4148__auto__);
var G__15027 = 0;
seq__15016 = G__15024;
chunk__15017 = G__15025;
count__15018 = G__15026;
i__15019 = G__15027;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15016__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15028 = cljs.core.next.call(null,seq__15016__$1);
var G__15029 = null;
var G__15030 = 0;
var G__15031 = 0;
seq__15016 = G__15028;
chunk__15017 = G__15029;
count__15018 = G__15030;
i__15019 = G__15031;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15033 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15033,0,null);var start_wrap = cljs.core.nth.call(null,vec__15033,1,null);var end_wrap = cljs.core.nth.call(null,vec__15033,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15034 = wrapper.lastChild;
var G__15035 = (level - 1);
wrapper = G__15034;
level = G__15035;
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
domina.DomContent = (function (){var obj15037 = {};return obj15037;
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
log_debug.cljs$lang$applyTo = (function (arglist__15038){
var mesg = cljs.core.seq(arglist__15038);
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
log.cljs$lang$applyTo = (function (arglist__15039){
var mesg = cljs.core.seq(arglist__15039);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15040){
var contents = cljs.core.seq(arglist__15040);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15041_SHARP_){return p1__15041_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15042_SHARP_,p2__15043_SHARP_){return goog.dom.insertChildAt(p1__15042_SHARP_,p2__15043_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15045_SHARP_,p2__15044_SHARP_){return goog.dom.insertSiblingBefore(p2__15044_SHARP_,p1__15045_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15047_SHARP_,p2__15046_SHARP_){return goog.dom.insertSiblingAfter(p2__15046_SHARP_,p1__15047_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15049_SHARP_,p2__15048_SHARP_){return goog.dom.replaceNode(p2__15048_SHARP_,p1__15049_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15054_15058 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15055_15059 = null;var count__15056_15060 = 0;var i__15057_15061 = 0;while(true){
if((i__15057_15061 < count__15056_15060))
{var n_15062 = cljs.core._nth.call(null,chunk__15055_15059,i__15057_15061);goog.style.setStyle(n_15062,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15063 = seq__15054_15058;
var G__15064 = chunk__15055_15059;
var G__15065 = count__15056_15060;
var G__15066 = (i__15057_15061 + 1);
seq__15054_15058 = G__15063;
chunk__15055_15059 = G__15064;
count__15056_15060 = G__15065;
i__15057_15061 = G__15066;
continue;
}
} else
{var temp__4092__auto___15067 = cljs.core.seq.call(null,seq__15054_15058);if(temp__4092__auto___15067)
{var seq__15054_15068__$1 = temp__4092__auto___15067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15054_15068__$1))
{var c__4148__auto___15069 = cljs.core.chunk_first.call(null,seq__15054_15068__$1);{
var G__15070 = cljs.core.chunk_rest.call(null,seq__15054_15068__$1);
var G__15071 = c__4148__auto___15069;
var G__15072 = cljs.core.count.call(null,c__4148__auto___15069);
var G__15073 = 0;
seq__15054_15058 = G__15070;
chunk__15055_15059 = G__15071;
count__15056_15060 = G__15072;
i__15057_15061 = G__15073;
continue;
}
} else
{var n_15074 = cljs.core.first.call(null,seq__15054_15068__$1);goog.style.setStyle(n_15074,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15075 = cljs.core.next.call(null,seq__15054_15068__$1);
var G__15076 = null;
var G__15077 = 0;
var G__15078 = 0;
seq__15054_15058 = G__15075;
chunk__15055_15059 = G__15076;
count__15056_15060 = G__15077;
i__15057_15061 = G__15078;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15079){
var content = cljs.core.first(arglist__15079);
arglist__15079 = cljs.core.next(arglist__15079);
var name = cljs.core.first(arglist__15079);
var value = cljs.core.rest(arglist__15079);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15084_15088 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15085_15089 = null;var count__15086_15090 = 0;var i__15087_15091 = 0;while(true){
if((i__15087_15091 < count__15086_15090))
{var n_15092 = cljs.core._nth.call(null,chunk__15085_15089,i__15087_15091);n_15092.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15093 = seq__15084_15088;
var G__15094 = chunk__15085_15089;
var G__15095 = count__15086_15090;
var G__15096 = (i__15087_15091 + 1);
seq__15084_15088 = G__15093;
chunk__15085_15089 = G__15094;
count__15086_15090 = G__15095;
i__15087_15091 = G__15096;
continue;
}
} else
{var temp__4092__auto___15097 = cljs.core.seq.call(null,seq__15084_15088);if(temp__4092__auto___15097)
{var seq__15084_15098__$1 = temp__4092__auto___15097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15084_15098__$1))
{var c__4148__auto___15099 = cljs.core.chunk_first.call(null,seq__15084_15098__$1);{
var G__15100 = cljs.core.chunk_rest.call(null,seq__15084_15098__$1);
var G__15101 = c__4148__auto___15099;
var G__15102 = cljs.core.count.call(null,c__4148__auto___15099);
var G__15103 = 0;
seq__15084_15088 = G__15100;
chunk__15085_15089 = G__15101;
count__15086_15090 = G__15102;
i__15087_15091 = G__15103;
continue;
}
} else
{var n_15104 = cljs.core.first.call(null,seq__15084_15098__$1);n_15104.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15105 = cljs.core.next.call(null,seq__15084_15098__$1);
var G__15106 = null;
var G__15107 = 0;
var G__15108 = 0;
seq__15084_15088 = G__15105;
chunk__15085_15089 = G__15106;
count__15086_15090 = G__15107;
i__15087_15091 = G__15108;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15109){
var content = cljs.core.first(arglist__15109);
arglist__15109 = cljs.core.next(arglist__15109);
var name = cljs.core.first(arglist__15109);
var value = cljs.core.rest(arglist__15109);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15114_15118 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15115_15119 = null;var count__15116_15120 = 0;var i__15117_15121 = 0;while(true){
if((i__15117_15121 < count__15116_15120))
{var n_15122 = cljs.core._nth.call(null,chunk__15115_15119,i__15117_15121);n_15122.removeAttribute(cljs.core.name.call(null,name));
{
var G__15123 = seq__15114_15118;
var G__15124 = chunk__15115_15119;
var G__15125 = count__15116_15120;
var G__15126 = (i__15117_15121 + 1);
seq__15114_15118 = G__15123;
chunk__15115_15119 = G__15124;
count__15116_15120 = G__15125;
i__15117_15121 = G__15126;
continue;
}
} else
{var temp__4092__auto___15127 = cljs.core.seq.call(null,seq__15114_15118);if(temp__4092__auto___15127)
{var seq__15114_15128__$1 = temp__4092__auto___15127;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15114_15128__$1))
{var c__4148__auto___15129 = cljs.core.chunk_first.call(null,seq__15114_15128__$1);{
var G__15130 = cljs.core.chunk_rest.call(null,seq__15114_15128__$1);
var G__15131 = c__4148__auto___15129;
var G__15132 = cljs.core.count.call(null,c__4148__auto___15129);
var G__15133 = 0;
seq__15114_15118 = G__15130;
chunk__15115_15119 = G__15131;
count__15116_15120 = G__15132;
i__15117_15121 = G__15133;
continue;
}
} else
{var n_15134 = cljs.core.first.call(null,seq__15114_15128__$1);n_15134.removeAttribute(cljs.core.name.call(null,name));
{
var G__15135 = cljs.core.next.call(null,seq__15114_15128__$1);
var G__15136 = null;
var G__15137 = 0;
var G__15138 = 0;
seq__15114_15118 = G__15135;
chunk__15115_15119 = G__15136;
count__15116_15120 = G__15137;
i__15117_15121 = G__15138;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15140 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15140,0,null);var v = cljs.core.nth.call(null,vec__15140,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15141_SHARP_){var attr = attrs__$1.item(p1__15141_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15148_15154 = cljs.core.seq.call(null,styles);var chunk__15149_15155 = null;var count__15150_15156 = 0;var i__15151_15157 = 0;while(true){
if((i__15151_15157 < count__15150_15156))
{var vec__15152_15158 = cljs.core._nth.call(null,chunk__15149_15155,i__15151_15157);var name_15159 = cljs.core.nth.call(null,vec__15152_15158,0,null);var value_15160 = cljs.core.nth.call(null,vec__15152_15158,1,null);domina.set_style_BANG_.call(null,content,name_15159,value_15160);
{
var G__15161 = seq__15148_15154;
var G__15162 = chunk__15149_15155;
var G__15163 = count__15150_15156;
var G__15164 = (i__15151_15157 + 1);
seq__15148_15154 = G__15161;
chunk__15149_15155 = G__15162;
count__15150_15156 = G__15163;
i__15151_15157 = G__15164;
continue;
}
} else
{var temp__4092__auto___15165 = cljs.core.seq.call(null,seq__15148_15154);if(temp__4092__auto___15165)
{var seq__15148_15166__$1 = temp__4092__auto___15165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15148_15166__$1))
{var c__4148__auto___15167 = cljs.core.chunk_first.call(null,seq__15148_15166__$1);{
var G__15168 = cljs.core.chunk_rest.call(null,seq__15148_15166__$1);
var G__15169 = c__4148__auto___15167;
var G__15170 = cljs.core.count.call(null,c__4148__auto___15167);
var G__15171 = 0;
seq__15148_15154 = G__15168;
chunk__15149_15155 = G__15169;
count__15150_15156 = G__15170;
i__15151_15157 = G__15171;
continue;
}
} else
{var vec__15153_15172 = cljs.core.first.call(null,seq__15148_15166__$1);var name_15173 = cljs.core.nth.call(null,vec__15153_15172,0,null);var value_15174 = cljs.core.nth.call(null,vec__15153_15172,1,null);domina.set_style_BANG_.call(null,content,name_15173,value_15174);
{
var G__15175 = cljs.core.next.call(null,seq__15148_15166__$1);
var G__15176 = null;
var G__15177 = 0;
var G__15178 = 0;
seq__15148_15154 = G__15175;
chunk__15149_15155 = G__15176;
count__15150_15156 = G__15177;
i__15151_15157 = G__15178;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15185_15191 = cljs.core.seq.call(null,attrs);var chunk__15186_15192 = null;var count__15187_15193 = 0;var i__15188_15194 = 0;while(true){
if((i__15188_15194 < count__15187_15193))
{var vec__15189_15195 = cljs.core._nth.call(null,chunk__15186_15192,i__15188_15194);var name_15196 = cljs.core.nth.call(null,vec__15189_15195,0,null);var value_15197 = cljs.core.nth.call(null,vec__15189_15195,1,null);domina.set_attr_BANG_.call(null,content,name_15196,value_15197);
{
var G__15198 = seq__15185_15191;
var G__15199 = chunk__15186_15192;
var G__15200 = count__15187_15193;
var G__15201 = (i__15188_15194 + 1);
seq__15185_15191 = G__15198;
chunk__15186_15192 = G__15199;
count__15187_15193 = G__15200;
i__15188_15194 = G__15201;
continue;
}
} else
{var temp__4092__auto___15202 = cljs.core.seq.call(null,seq__15185_15191);if(temp__4092__auto___15202)
{var seq__15185_15203__$1 = temp__4092__auto___15202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15185_15203__$1))
{var c__4148__auto___15204 = cljs.core.chunk_first.call(null,seq__15185_15203__$1);{
var G__15205 = cljs.core.chunk_rest.call(null,seq__15185_15203__$1);
var G__15206 = c__4148__auto___15204;
var G__15207 = cljs.core.count.call(null,c__4148__auto___15204);
var G__15208 = 0;
seq__15185_15191 = G__15205;
chunk__15186_15192 = G__15206;
count__15187_15193 = G__15207;
i__15188_15194 = G__15208;
continue;
}
} else
{var vec__15190_15209 = cljs.core.first.call(null,seq__15185_15203__$1);var name_15210 = cljs.core.nth.call(null,vec__15190_15209,0,null);var value_15211 = cljs.core.nth.call(null,vec__15190_15209,1,null);domina.set_attr_BANG_.call(null,content,name_15210,value_15211);
{
var G__15212 = cljs.core.next.call(null,seq__15185_15203__$1);
var G__15213 = null;
var G__15214 = 0;
var G__15215 = 0;
seq__15185_15191 = G__15212;
chunk__15186_15192 = G__15213;
count__15187_15193 = G__15214;
i__15188_15194 = G__15215;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15220_15224 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15221_15225 = null;var count__15222_15226 = 0;var i__15223_15227 = 0;while(true){
if((i__15223_15227 < count__15222_15226))
{var node_15228 = cljs.core._nth.call(null,chunk__15221_15225,i__15223_15227);goog.dom.classes.add(node_15228,class$);
{
var G__15229 = seq__15220_15224;
var G__15230 = chunk__15221_15225;
var G__15231 = count__15222_15226;
var G__15232 = (i__15223_15227 + 1);
seq__15220_15224 = G__15229;
chunk__15221_15225 = G__15230;
count__15222_15226 = G__15231;
i__15223_15227 = G__15232;
continue;
}
} else
{var temp__4092__auto___15233 = cljs.core.seq.call(null,seq__15220_15224);if(temp__4092__auto___15233)
{var seq__15220_15234__$1 = temp__4092__auto___15233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15220_15234__$1))
{var c__4148__auto___15235 = cljs.core.chunk_first.call(null,seq__15220_15234__$1);{
var G__15236 = cljs.core.chunk_rest.call(null,seq__15220_15234__$1);
var G__15237 = c__4148__auto___15235;
var G__15238 = cljs.core.count.call(null,c__4148__auto___15235);
var G__15239 = 0;
seq__15220_15224 = G__15236;
chunk__15221_15225 = G__15237;
count__15222_15226 = G__15238;
i__15223_15227 = G__15239;
continue;
}
} else
{var node_15240 = cljs.core.first.call(null,seq__15220_15234__$1);goog.dom.classes.add(node_15240,class$);
{
var G__15241 = cljs.core.next.call(null,seq__15220_15234__$1);
var G__15242 = null;
var G__15243 = 0;
var G__15244 = 0;
seq__15220_15224 = G__15241;
chunk__15221_15225 = G__15242;
count__15222_15226 = G__15243;
i__15223_15227 = G__15244;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15249_15253 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15250_15254 = null;var count__15251_15255 = 0;var i__15252_15256 = 0;while(true){
if((i__15252_15256 < count__15251_15255))
{var node_15257 = cljs.core._nth.call(null,chunk__15250_15254,i__15252_15256);goog.dom.classes.remove(node_15257,class$);
{
var G__15258 = seq__15249_15253;
var G__15259 = chunk__15250_15254;
var G__15260 = count__15251_15255;
var G__15261 = (i__15252_15256 + 1);
seq__15249_15253 = G__15258;
chunk__15250_15254 = G__15259;
count__15251_15255 = G__15260;
i__15252_15256 = G__15261;
continue;
}
} else
{var temp__4092__auto___15262 = cljs.core.seq.call(null,seq__15249_15253);if(temp__4092__auto___15262)
{var seq__15249_15263__$1 = temp__4092__auto___15262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15249_15263__$1))
{var c__4148__auto___15264 = cljs.core.chunk_first.call(null,seq__15249_15263__$1);{
var G__15265 = cljs.core.chunk_rest.call(null,seq__15249_15263__$1);
var G__15266 = c__4148__auto___15264;
var G__15267 = cljs.core.count.call(null,c__4148__auto___15264);
var G__15268 = 0;
seq__15249_15253 = G__15265;
chunk__15250_15254 = G__15266;
count__15251_15255 = G__15267;
i__15252_15256 = G__15268;
continue;
}
} else
{var node_15269 = cljs.core.first.call(null,seq__15249_15263__$1);goog.dom.classes.remove(node_15269,class$);
{
var G__15270 = cljs.core.next.call(null,seq__15249_15263__$1);
var G__15271 = null;
var G__15272 = 0;
var G__15273 = 0;
seq__15249_15253 = G__15270;
chunk__15250_15254 = G__15271;
count__15251_15255 = G__15272;
i__15252_15256 = G__15273;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15278_15282 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15279_15283 = null;var count__15280_15284 = 0;var i__15281_15285 = 0;while(true){
if((i__15281_15285 < count__15280_15284))
{var node_15286 = cljs.core._nth.call(null,chunk__15279_15283,i__15281_15285);goog.dom.classes.toggle(node_15286,class$);
{
var G__15287 = seq__15278_15282;
var G__15288 = chunk__15279_15283;
var G__15289 = count__15280_15284;
var G__15290 = (i__15281_15285 + 1);
seq__15278_15282 = G__15287;
chunk__15279_15283 = G__15288;
count__15280_15284 = G__15289;
i__15281_15285 = G__15290;
continue;
}
} else
{var temp__4092__auto___15291 = cljs.core.seq.call(null,seq__15278_15282);if(temp__4092__auto___15291)
{var seq__15278_15292__$1 = temp__4092__auto___15291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15278_15292__$1))
{var c__4148__auto___15293 = cljs.core.chunk_first.call(null,seq__15278_15292__$1);{
var G__15294 = cljs.core.chunk_rest.call(null,seq__15278_15292__$1);
var G__15295 = c__4148__auto___15293;
var G__15296 = cljs.core.count.call(null,c__4148__auto___15293);
var G__15297 = 0;
seq__15278_15282 = G__15294;
chunk__15279_15283 = G__15295;
count__15280_15284 = G__15296;
i__15281_15285 = G__15297;
continue;
}
} else
{var node_15298 = cljs.core.first.call(null,seq__15278_15292__$1);goog.dom.classes.toggle(node_15298,class$);
{
var G__15299 = cljs.core.next.call(null,seq__15278_15292__$1);
var G__15300 = null;
var G__15301 = 0;
var G__15302 = 0;
seq__15278_15282 = G__15299;
chunk__15279_15283 = G__15300;
count__15280_15284 = G__15301;
i__15281_15285 = G__15302;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15311__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15307_15312 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15308_15313 = null;var count__15309_15314 = 0;var i__15310_15315 = 0;while(true){
if((i__15310_15315 < count__15309_15314))
{var node_15316 = cljs.core._nth.call(null,chunk__15308_15313,i__15310_15315);goog.dom.classes.set(node_15316,classes_15311__$1);
{
var G__15317 = seq__15307_15312;
var G__15318 = chunk__15308_15313;
var G__15319 = count__15309_15314;
var G__15320 = (i__15310_15315 + 1);
seq__15307_15312 = G__15317;
chunk__15308_15313 = G__15318;
count__15309_15314 = G__15319;
i__15310_15315 = G__15320;
continue;
}
} else
{var temp__4092__auto___15321 = cljs.core.seq.call(null,seq__15307_15312);if(temp__4092__auto___15321)
{var seq__15307_15322__$1 = temp__4092__auto___15321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15307_15322__$1))
{var c__4148__auto___15323 = cljs.core.chunk_first.call(null,seq__15307_15322__$1);{
var G__15324 = cljs.core.chunk_rest.call(null,seq__15307_15322__$1);
var G__15325 = c__4148__auto___15323;
var G__15326 = cljs.core.count.call(null,c__4148__auto___15323);
var G__15327 = 0;
seq__15307_15312 = G__15324;
chunk__15308_15313 = G__15325;
count__15309_15314 = G__15326;
i__15310_15315 = G__15327;
continue;
}
} else
{var node_15328 = cljs.core.first.call(null,seq__15307_15322__$1);goog.dom.classes.set(node_15328,classes_15311__$1);
{
var G__15329 = cljs.core.next.call(null,seq__15307_15322__$1);
var G__15330 = null;
var G__15331 = 0;
var G__15332 = 0;
seq__15307_15312 = G__15329;
chunk__15308_15313 = G__15330;
count__15309_15314 = G__15331;
i__15310_15315 = G__15332;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15337_15341 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15338_15342 = null;var count__15339_15343 = 0;var i__15340_15344 = 0;while(true){
if((i__15340_15344 < count__15339_15343))
{var node_15345 = cljs.core._nth.call(null,chunk__15338_15342,i__15340_15344);goog.dom.setTextContent(node_15345,value);
{
var G__15346 = seq__15337_15341;
var G__15347 = chunk__15338_15342;
var G__15348 = count__15339_15343;
var G__15349 = (i__15340_15344 + 1);
seq__15337_15341 = G__15346;
chunk__15338_15342 = G__15347;
count__15339_15343 = G__15348;
i__15340_15344 = G__15349;
continue;
}
} else
{var temp__4092__auto___15350 = cljs.core.seq.call(null,seq__15337_15341);if(temp__4092__auto___15350)
{var seq__15337_15351__$1 = temp__4092__auto___15350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15337_15351__$1))
{var c__4148__auto___15352 = cljs.core.chunk_first.call(null,seq__15337_15351__$1);{
var G__15353 = cljs.core.chunk_rest.call(null,seq__15337_15351__$1);
var G__15354 = c__4148__auto___15352;
var G__15355 = cljs.core.count.call(null,c__4148__auto___15352);
var G__15356 = 0;
seq__15337_15341 = G__15353;
chunk__15338_15342 = G__15354;
count__15339_15343 = G__15355;
i__15340_15344 = G__15356;
continue;
}
} else
{var node_15357 = cljs.core.first.call(null,seq__15337_15351__$1);goog.dom.setTextContent(node_15357,value);
{
var G__15358 = cljs.core.next.call(null,seq__15337_15351__$1);
var G__15359 = null;
var G__15360 = 0;
var G__15361 = 0;
seq__15337_15341 = G__15358;
chunk__15338_15342 = G__15359;
count__15339_15343 = G__15360;
i__15340_15344 = G__15361;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15366_15370 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15367_15371 = null;var count__15368_15372 = 0;var i__15369_15373 = 0;while(true){
if((i__15369_15373 < count__15368_15372))
{var node_15374 = cljs.core._nth.call(null,chunk__15367_15371,i__15369_15373);goog.dom.forms.setValue(node_15374,value);
{
var G__15375 = seq__15366_15370;
var G__15376 = chunk__15367_15371;
var G__15377 = count__15368_15372;
var G__15378 = (i__15369_15373 + 1);
seq__15366_15370 = G__15375;
chunk__15367_15371 = G__15376;
count__15368_15372 = G__15377;
i__15369_15373 = G__15378;
continue;
}
} else
{var temp__4092__auto___15379 = cljs.core.seq.call(null,seq__15366_15370);if(temp__4092__auto___15379)
{var seq__15366_15380__$1 = temp__4092__auto___15379;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15366_15380__$1))
{var c__4148__auto___15381 = cljs.core.chunk_first.call(null,seq__15366_15380__$1);{
var G__15382 = cljs.core.chunk_rest.call(null,seq__15366_15380__$1);
var G__15383 = c__4148__auto___15381;
var G__15384 = cljs.core.count.call(null,c__4148__auto___15381);
var G__15385 = 0;
seq__15366_15370 = G__15382;
chunk__15367_15371 = G__15383;
count__15368_15372 = G__15384;
i__15369_15373 = G__15385;
continue;
}
} else
{var node_15386 = cljs.core.first.call(null,seq__15366_15380__$1);goog.dom.forms.setValue(node_15386,value);
{
var G__15387 = cljs.core.next.call(null,seq__15366_15380__$1);
var G__15388 = null;
var G__15389 = 0;
var G__15390 = 0;
seq__15366_15370 = G__15387;
chunk__15367_15371 = G__15388;
count__15368_15372 = G__15389;
i__15369_15373 = G__15390;
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
{var value_15401 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15397_15402 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15398_15403 = null;var count__15399_15404 = 0;var i__15400_15405 = 0;while(true){
if((i__15400_15405 < count__15399_15404))
{var node_15406 = cljs.core._nth.call(null,chunk__15398_15403,i__15400_15405);node_15406.innerHTML = value_15401;
{
var G__15407 = seq__15397_15402;
var G__15408 = chunk__15398_15403;
var G__15409 = count__15399_15404;
var G__15410 = (i__15400_15405 + 1);
seq__15397_15402 = G__15407;
chunk__15398_15403 = G__15408;
count__15399_15404 = G__15409;
i__15400_15405 = G__15410;
continue;
}
} else
{var temp__4092__auto___15411 = cljs.core.seq.call(null,seq__15397_15402);if(temp__4092__auto___15411)
{var seq__15397_15412__$1 = temp__4092__auto___15411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15397_15412__$1))
{var c__4148__auto___15413 = cljs.core.chunk_first.call(null,seq__15397_15412__$1);{
var G__15414 = cljs.core.chunk_rest.call(null,seq__15397_15412__$1);
var G__15415 = c__4148__auto___15413;
var G__15416 = cljs.core.count.call(null,c__4148__auto___15413);
var G__15417 = 0;
seq__15397_15402 = G__15414;
chunk__15398_15403 = G__15415;
count__15399_15404 = G__15416;
i__15400_15405 = G__15417;
continue;
}
} else
{var node_15418 = cljs.core.first.call(null,seq__15397_15412__$1);node_15418.innerHTML = value_15401;
{
var G__15419 = cljs.core.next.call(null,seq__15397_15412__$1);
var G__15420 = null;
var G__15421 = 0;
var G__15422 = 0;
seq__15397_15402 = G__15419;
chunk__15398_15403 = G__15420;
count__15399_15404 = G__15421;
i__15400_15405 = G__15422;
continue;
}
}
} else
{}
}
break;
}
}catch (e15396){if((e15396 instanceof Error))
{var e_15423 = e15396;domina.replace_children_BANG_.call(null,content,value_15401);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15396;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15430_15434 = cljs.core.seq.call(null,children);var chunk__15431_15435 = null;var count__15432_15436 = 0;var i__15433_15437 = 0;while(true){
if((i__15433_15437 < count__15432_15436))
{var child_15438 = cljs.core._nth.call(null,chunk__15431_15435,i__15433_15437);frag.appendChild(child_15438);
{
var G__15439 = seq__15430_15434;
var G__15440 = chunk__15431_15435;
var G__15441 = count__15432_15436;
var G__15442 = (i__15433_15437 + 1);
seq__15430_15434 = G__15439;
chunk__15431_15435 = G__15440;
count__15432_15436 = G__15441;
i__15433_15437 = G__15442;
continue;
}
} else
{var temp__4092__auto___15443 = cljs.core.seq.call(null,seq__15430_15434);if(temp__4092__auto___15443)
{var seq__15430_15444__$1 = temp__4092__auto___15443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15430_15444__$1))
{var c__4148__auto___15445 = cljs.core.chunk_first.call(null,seq__15430_15444__$1);{
var G__15446 = cljs.core.chunk_rest.call(null,seq__15430_15444__$1);
var G__15447 = c__4148__auto___15445;
var G__15448 = cljs.core.count.call(null,c__4148__auto___15445);
var G__15449 = 0;
seq__15430_15434 = G__15446;
chunk__15431_15435 = G__15447;
count__15432_15436 = G__15448;
i__15433_15437 = G__15449;
continue;
}
} else
{var child_15450 = cljs.core.first.call(null,seq__15430_15444__$1);frag.appendChild(child_15450);
{
var G__15451 = cljs.core.next.call(null,seq__15430_15444__$1);
var G__15452 = null;
var G__15453 = 0;
var G__15454 = 0;
seq__15430_15434 = G__15451;
chunk__15431_15435 = G__15452;
count__15432_15436 = G__15453;
i__15433_15437 = G__15454;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15424_SHARP_,p2__15425_SHARP_){return f.call(null,p1__15424_SHARP_,p2__15425_SHARP_);
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
{if((function (){var G__15456 = list_thing;if(G__15456)
{var bit__4050__auto__ = (G__15456.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15456.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15456.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15456);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15456);
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
{if((function (){var G__15457 = content;if(G__15457)
{var bit__4050__auto__ = (G__15457.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15457.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15457.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15457);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15457);
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
{if((function (){var G__15458 = content;if(G__15458)
{var bit__4050__auto__ = (G__15458.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15458.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15458.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15458);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15458);
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